import { useState } from 'react';

import { Send, Person, SmartToy } from '@mui/icons-material';
import { FormControl, OutlinedInput, IconButton } from '@mui/material'

import MyMarkdown from '@/components/utils/markdown/markdown';

import MuiThemeWrapper from '@/components/utils/muiThemeWrapper';

import { CopyTextBtn, CopyIconBtn } from '@/components/utils/copy';


export function DialogBox({ dialog }) {

  const { role, content } = dialog

  return (
    <MuiThemeWrapper>
    <div className={`dialogBox flex flex-col`}>

      <div className={`role flex gap-1 items-end ${role == 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
        {role == 'user' ? <Person className='h-10 w-10' /> : <SmartToy className='h-10 w-10' />}

        <div className={`items-end text-xl font-bold ${role == "user" ? "text-end" : ""}`}>
        {role == "user" ? "You" : "Bot"}
        </div>
      </div>

      <div className={`dialog w-full flex ${role == 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className='px-1 w-10 opacity-50 hover:opacity-100 transition-opacity'><CopyIconBtn content={content} className={`w-6 h-6`} color='notObvious' /></div>

        <div 
        className={`content p-2 px-3 flex flex-col gap-2 text-justify border border-solid border-neutral-500 rounded-md
        ${role == 'user' ? 'mr-1 ml-11' : 'ml-1 mr-11'}`}>
          {/* <div className="content p-2 flex flex-col gap-2 text-justify bg-neutral-200 rounded-md"> */}
          <MyMarkdown>{content}</MyMarkdown>
        </div>
      </div>
      
    </div>
    </MuiThemeWrapper>
  )
}

export function DialogInput({ handleUserInput }) {

  const [userInput, setUserInput] = useState('')
  const handleUserInputChange = (e) => {
    setUserInput(e.target.value)
  }

  const handleSubmit = () => {
    // console.log(process.env.NEXT_PUBLIC_OLLAMA_URL)
    handleUserInput(userInput)
    setUserInput('')
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && !event.shiftKey && userInput.trim() !== ''){
      event.preventDefault(); // Prevent newline in textarea
      handleSubmit(); // Call askQuestion function when Enter is pressed
    }
  };

  return (
    <div id="dialogInput" className="p-2 pb-0 flex flex-col gap-1">

      <MuiThemeWrapper>
          <FormControl className='w-full flex flex-row gap-2 items-end'>
            <OutlinedInput
              placeholder='Message the bot ...'
              className='w-full'
              multiline
              maxRows={6}
              size='small'
              value={userInput}
              onChange={handleUserInputChange}
              onKeyDown={handleKeyPress}
            />
            <IconButton color="primary" className='rounded' onClick={handleSubmit}>
              <Send />
            </IconButton>
          </FormControl>
      </MuiThemeWrapper>

      <p className='text-neutral-500 text-xs'>LLM can be misleading sometimes. Be careful with the answers. </p>
    </div>
  )
}

export function DemoDialog() {
  return (
    <DialogBox dialog={{
      "role": 'bot',
      "content": `# Demo Markdown Content

## Markdown Elements

### Headings

#### Heading Level 4

##### Heading Level 5

###### Heading Level 6

- Item 1
- Item 2
  - Sub-item 1
  - Sub-item 2
    1. Nested item 1
    2. Nested item 2

[Google](https://www.google.com)

*Italic text* **Bold text**

\`Inline code\`

\`\`\`javascript
function greet(name) {
  console.log(\`Hello, \${name}\`);
}

greet('World');
\`\`\`

\`\`\`
function greet(name) {
  console.log(\`Hello, \${name}\`);
}

greet('World');
\`\`\`

> Blockquote

---

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |

\\\*Escaped characters\\\*
`
    }} />
  )
}