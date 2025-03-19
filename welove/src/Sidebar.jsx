import { useState } from "react";

function Sidebar({ setProductLink }) {
    const [input, setInput] = useState("");
  
    return (
      <div className="sidebar" style={{ textAlign: "left", maxWidth: "400px" }}>
        <h2>Enter Product Link</h2>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Product URL"
          style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
        />
        <button 
          onClick={() => setProductLink(input)}
          style={{ width: "100%", padding: "8px", marginTop: "5px", border: "none" }}
        >
          Fetch Details
        </button>
      </div>
    );
  }

export default Sidebar;
