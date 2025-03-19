function ButtonPanel({ details, sendQuery }) {
  const handleButtonClick = (key, value) => {
    if (key.toLowerCase().includes("image")) {
      sendQuery({ key, value, isImage: true });
    } else {
      sendQuery({ key, value });
    }
  };

  return (
    <div className="button-panel">
      {Object.entries(details).map(([key, value]) => (
        <button key={key} onClick={() => handleButtonClick(key, value)}>
          {key}
        </button>
      ))}
      <button onClick={() => sendQuery({ key: "review", value: "Summary of Reviews" })}>
        Summary of Reviews
      </button>
    </div>
  );
}

export default ButtonPanel;

