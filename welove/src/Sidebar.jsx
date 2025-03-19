import { useState } from "react";

function Sidebar({ setProductLink }) {
    const [input, setInput] = useState("");
  
    return (
      <div className="sidebar">
        <h2>Enter Product Link</h2>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Product URL"
        />
        <button onClick={() => setProductLink(input)}>Fetch Details</button>
      </div>
    );
  }

export default Sidebar;