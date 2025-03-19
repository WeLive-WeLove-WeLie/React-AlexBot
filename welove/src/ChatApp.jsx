import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import ChatBox from "./ChatBox";
import ButtonPanel from "./ButtonPanel";
import "./App.css";

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [productLink, setProductLink] = useState("");
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    if (productLink) {
      setMessages([{ role: "assistant", content: "Fetching product details..." }]);
      // fetch(`/api/scrape?link=${encodeURIComponent(productLink)}`)
      fetch(`/test-data.json`)
        .then((res) => res.json())
        .then((data) => {
          setProductDetails(data);
          setMessages((prev) => [
            ...prev,
            { role: "assistant", content: "Details fetched. Choose an option." },
          ]);
        });
    }
  }, [productLink]);

  const sendQuery = (queryObj) => {
    if (!queryObj || !queryObj.key || queryObj.key.trim() === "") {
      console.warn("Prevented empty query submission");
      return;
    }
  
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: queryObj.isImage ? null : `${queryObj.key}: ${queryObj.value}`,
        imageUrl: queryObj.isImage ? queryObj.value : null, // Store image URL if it's an image
      },
    ]);
  
    fetch('/test-data.json', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: queryObj.key,
        value: queryObj.value,
        details: productDetails?.specifications,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.answer },
        ]);
      });
  };
  
  

  return (
    <div className="app-container">
      {/* Left Panel: URL Input */}
      <div className="left-panel">
        <Sidebar setProductLink={setProductLink} />
      </div>

      {/* Right Panel: Chat Box */}
      <div className="right-panel">
        <ChatBox messages={messages} sendQuery={sendQuery} />
        {productDetails && <ButtonPanel details={productDetails} sendQuery={sendQuery} />}
      </div>
    </div>
  );
}

export default ChatApp;
