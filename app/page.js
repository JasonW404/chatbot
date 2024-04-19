'use client';
import { unstable_noStore as noStore } from 'next/cache'

import Link from "next/link";

import { useState, useEffect, useRef } from "react";
import { useImmer } from "use-immer";

import { Button } from "@mui/material";

import MuiThemeWrapper from "@/components/utils/muiThemeWrapper";

import IdleScreen from "@/components/chatbot/chatWindow/idleScreen";
import ModelSwitch from "@/components/chatbot/modelSwitch";
import { DialogBox, DialogInput, DemoDialog } from "@/components/chatbot/chatWindow/dialog";
import { HistoryList } from "@/components/chatbot/historyList";

import axios from "axios";

noStore();
const ollama = process.env.NEXT_PUBLIC_OLLAMA_API;

export function ChatList({ changeDialog }) {

  return (
    <section
      id="chatList"
      className="h-full p-4 w-72"
    >
      <MuiThemeWrapper>
        <div id="pageTitle" className="mb-6">
          <h1 className="text-3xl font-medium">
            <Link
              href="/"
              className="text-3xl font-medium"
            >Jason404</Link> <span className="text-2xl font-light">Chatbot</span>
          </h1>
        </div>

        <div id="newChat" className="flex flex-row flex-wrap mt-4">
          <Button variant="outlined" color="primary" className="flex-auto text-left justify-start">New Chat</Button>
        </div>

        <HistoryList onDialogChange={changeDialog} />

      </MuiThemeWrapper>
    </section>
  )

}


export function ChatControl({ models, changeModel }) {
  return (
    <div
      className="w-full p-2 border-b-2 border-solid border-neutral-800 flex flex-row justify-end"
    >
      <ModelSwitch models={models} changeModel={changeModel} />
    </div>
  );
}

export function ChatWindow({ currDialogId, dialogHistory }) {

  // console.log("ChatWindow")

  return (
    <div id="chatWindow"
      className="
      w-full px-2 py-4 
      flex-grow flex flex-col gap-2
      overflow-y-auto">
      {/* <DemoDialog /> */}
      {dialogHistory.length === 0 ? (
        <IdleScreen />
      ) : (
        dialogHistory.map((dialog, index) => (
          <DialogBox key={index} dialog={dialog} />
        ))
      )}

    </div>
  );
}


export function PromptInput({ currModel, dialogHistory, setDialogHistory }) {

  const ollama_chat = async (dialogs) => {
    const data = {
      "model": currModel.toLowerCase(),
      "messages": dialogs, // Array of historical messages
      "stream": true
    }

    try {
      const response = await fetch(`${ollama}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const reader = response.body.getReader();
      let decoder = new TextDecoder();

      // Initialize dialog history with an empty "assistant" dialog
      setDialogHistory(dh => {
        dh.push({ role: "assistant", content: "" });
      });

      let allContent = '';
      while (true) {
        const { done, value } = await reader.read();

        if (done) break; // Exit the loop when streaming is done

        // Decode and parse the received data
        const chunk = decoder.decode(value, { stream: true });
        const llmResponse = JSON.parse(chunk);

        // Form the complete message (not necessary)
        allContent += llmResponse.message.content;

        // Append the content of the message to the last "assistant" dialog
        setDialogHistory(dh => {
          dh[dh.length - 1].content += llmResponse.message.content;
        })
      }
      console.log(allContent);
    } catch (error) {
      console.error(error);
    }
  }

  const handleUserInput = (userInput) => {
    // userInput -> API -> response: role, message

    if (userInput == "") {
      alert("If you don't ask, how can I help you?");
      return;
    }

    // Push LLM dialog to history
    const dialogs = [
      ...dialogHistory,
      { "role": "user", "content": userInput }
    ];

    // Push user dialog to history
    setDialogHistory(dh => {
      dh.push({ "role": "user", "content": userInput });
    });
    // console.log("Push user dialog")

    // console.log(dialogHistory);

    ollama_chat(dialogs);
  }

  return (
    <div id="chatInput" className="w-full">
      <DialogInput handleUserInput={handleUserInput} />
    </div>
  );
}

export default function Page() {
  // console.log(ollama)

  /* 
    Local LLM List 
  */

  const [models, setModels] = useState([]);

  useEffect(() => {
    // Define the fetchModels function within the useEffect hook
    const fetchModels = async () => {
      try {
        const response = await axios.get(`${ollama}/tags`);
        const modelsData = response.data.models.map(
          item => {
            const name = item.name.split(":")[0].toUpperCase();
            const tag = item.name.split(":")[1].toUpperCase();
            return `${name}:${tag}`;
          });
        setModels(modelsData);
        setCurrModel(modelsData[0]); // Set the current model to the first model in the list
      } catch (error) {
        console.error(error);
      }
    };

    // Call fetchModels when the component mounts
    fetchModels();

    // Cleanup function (optional)
    return () => {
      // Perform any cleanup if needed
    };
  }, []); // Empty dependency array ensures that the effect runs only once, on mount


  /* 
    Chat Control 
  */

  const [currModel, setCurrModel] = useState(models[0]);
  const [currDialogId, setCurrDialogId] = useState(null);
  const [dialogHistory, setDialogHistory] = useImmer([]);


  const changeDialog = (id) => {
    setCurrDialogId(id);
  }

  const changeCurrModel = (model) => {
    setCurrModel(model);
  }

  return (
    <div
      id="ChatbotContainer"
      className="
      flex-grow flex flex-row
      h-full w-full
      "
    >

      <div id="sidebar" className="max-w-xs px-2 py-2 bg-neutral-200 rounded-s-lg">
        <ChatList changeDialog={changeDialog} />
      </div>

      <div id="content" className="flex-grow px-6 py-4 flex flex-col items-center bg-neutral-100 rounded-e-lg">
        <ChatControl models={models} changeModel={changeCurrModel} />
        <ChatWindow currDialogId={currDialogId} dialogHistory={dialogHistory} />
        <PromptInput currModel={currModel} dialogHistory={dialogHistory} setDialogHistory={setDialogHistory} />
      </div>

    </div>
  );
}
