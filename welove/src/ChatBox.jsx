import { useState } from "react";

function ChatBox({ messages, sendQuery }) {
  const [query, setQuery] = useState("");

  return (
    <div className="chatbox" style={{ textAlign: "left", maxWidth: "400px" }}>
      <div className="messages" style={{ marginBottom: "10px" }}>
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
        style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
      />
      <button
        onClick={() => {
          sendQuery({ key: query, value: query });
          setQuery("");
        }}
        style={{ width: "100%", padding: "8px", marginTop: "5px" }}
      >
        Send
      </button>
    </div>
  );
}

export default ChatBox;
