function ButtonPanel({ details, sendQuery }) {
  const handleButtonClick = (key, value) => {
    if (key.toLowerCase().includes("image")) {
      sendQuery({ key, value, isImage: true });
    } else {
      sendQuery({ key, value });
    }
  };

  return (
    <div className="button-panel" style={{ display: "flex", justifyContent: "center", gap: "10px", marginLeft: "40px" }}>
      {Object.entries(details).map(([key, value]) => (
        <button 
          key={key} 
          onClick={() => handleButtonClick(key, value)} 
          style={{ padding: "10px", minWidth: "120px", backgroundColor: "#f0f0f0", cursor: "pointer", textAlign: "center" }}
          onMouseOver={(e) => e.target.style.backgroundColor = "#b2d2d2"}
          onMouseOut={(e) => e.target.style.backgroundColor = "#f0f0f0"}

        >
          {key.charAt(0).toUpperCase() + key.slice(1)}
        </button>
      ))}
      <button 
        onClick={() => sendQuery({ key: "Review", value: "Summary of Reviews" })} 
        style={{ padding: "10px", minWidth: "120px", backgroundColor: "#f0f0f0", cursor: "pointer", textAlign: "center" }}
        onMouseOver={(e) => e.target.style.backgroundColor = "#b2d2d2"}
        onMouseOut={(e) => e.target.style.backgroundColor = "#f0f0f0"}

      >
        Summary Of Reviews
      </button>
    </div>
  );
}

export default ButtonPanel;

