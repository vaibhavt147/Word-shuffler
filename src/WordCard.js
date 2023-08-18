import React from "react";

function WordCard({ setShowmeaning, worddata }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "column",
        left: "50%",
        top: "50%",
        width: "800px",
        backgroundColor: "white",
        borderRadius: "5px",
      }}
    >
      <h2>{worddata?.word}</h2>
      <h3>{worddata?.synonym}</h3>
      <h5>{worddata?.meaning}</h5>
      <h5>{worddata?.usecase}</h5>
      <div style={{ width: "400px", height: "40px", padding: "10px" }}>
        <button
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#8ED653",
            border: "10px",
          }}
          onClick={() => {
            setShowmeaning(false);
          }}
        >
          I know this word
        </button>
      </div>
      <div style={{ width: "400px", height: "40px", padding: "10px" }}>
        <button
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#E35D82",
            border: "10px",
          }}
          onClick={() => {
            setShowmeaning(false);
          }}
        >
          Don't know this word
        </button>
      </div>
    </div>
  );
}

export default WordCard;
