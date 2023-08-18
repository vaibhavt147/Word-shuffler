import { useEffect, useState } from "react";
import "./App.css";
import WordCard from "./WordCard";

const csvUrl = require("./GRE-Words.csv");
const Papa = require("papaparse");

function App() {
  const [showmeaning, setShowmeaning] = useState(false);
  const [wordlist, setWordlist] = useState([]);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const fetchData = async () => {
    const response = await fetch(csvUrl);
    const text = await response.text();
    const results = Papa.parse(text, {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
    }).data;
    return results;
  };

  const getWordlist = async () => {
    const allwords = await fetchData();
    const shuffledWords = shuffleArray(allwords);
    const randomwords = shuffledWords.slice(0, 50);
    setWordlist(randomwords);
  };

  useEffect(() => {
    getWordlist();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {showmeaning ? (
          <WordCard setShowmeaning={setShowmeaning} worddata = {wordlist[0]}></WordCard>
        ) : (
          <div
            style={{
              left: "50%",
              top: "50%",
              width: "800px",
              backgroundColor: "white",
              borderRadius: "5px",
            }}
            onClick={() => {
              setShowmeaning(true);
            }}
          >
            <h1>{wordlist[0]?.word}</h1>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
