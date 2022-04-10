import { useState } from "react";
import "./App.css";

function App() {
  let speech = new SpeechSynthesisUtterance();

  const speak = (statement) => {
    speech.text = statement;
    speech.rate = 1;
    speech.volume = 3;
    speech.pitch = 2;
    speech.lang = "he-IL";
    speechSynthesis.speak(speech);
  };

  const [sentence, setSentence] = useState("");

  return (
    <div className="App">
      <div className="card">
        <h2>what would you like to say?</h2>
        <form onSubmit={() => speak(sentence)} className="form">
          <input
            type="text"
            onInput={(e) => {
              setSentence(e.target.value);
            }}
          />
          <button>Speak</button>
        </form>
      </div>
    </div>
  );
}

export default App;
