import React from "react";

function WordCard({
  setShowmeaning,
  setWordlist,
  wordlist,
  currentwordindex,
  setCurrentwordindex,
  revisionwords,
  setRevisionwords,
  maxindex,
}) {
  const currentword = wordlist[currentwordindex];
  const handleclick = (type) => {
    let newrevisionwords = type
      ? revisionwords
      : [...revisionwords, currentword];
    let newindex = currentwordindex + 1;
    if (currentwordindex === maxindex) {
      console.debug(currentword, maxindex);
      newindex = 0;
      setWordlist(newrevisionwords);
      newrevisionwords = [];
    }
    setRevisionwords(newrevisionwords);
    setCurrentwordindex(newindex);
    setShowmeaning(false);
  };
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
      <h2>{currentword?.word}</h2>
      <h3>{currentword?.synonym}</h3>
      <h5>{currentword?.meaning}</h5>
      <h5>{currentword?.usecase}</h5>
      <div style={{ width: "400px", height: "40px", padding: "10px" }}>
        <button
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#8ED653",
            border: "10px",
          }}
          onClick={() => {
            handleclick(true);
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
            handleclick(false);
          }}
        >
          Don't know this word
        </button>
      </div>
    </div>
  );
}

export default WordCard;
