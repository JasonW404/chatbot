export function HistoryList ({ onDialogChange }) {


  return (
    <div id="chatList" className="mt-4">
      <h2 className="text-2xl">Chat History</h2>

      <div id="chatListItems">
        {/* 
          * A list of chats.  
          * 
          * For each item, 
          *   - display the topic of the chat,
          *   - use dialogId as the key,
          *   - handle onClick event to change the dialogId of <dialogs> state at <ChatWindow />.
          */}
      </div>
    </div>
  )
}