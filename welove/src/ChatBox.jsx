import { useState } from "react";

function ChatBox({ messages, sendQuery }) {
  const [query, setQuery] = useState("");

  return (
    <div className="chatbox">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.role}`}>
            {msg.imageUrl ? (
              <img src={msg.imageUrl} alt="Product" className="chat-image" />
            ) : (
              msg.content
            )}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask something..."
      />
      <button
        onClick={() => {
          sendQuery({ key: query, value: query });
          setQuery("");
        }}
      >
        Send
      </button>
    </div>
  );
}

export default ChatBox;
