import React, { useState } from 'react';
import TorchEffect from './components/TorchEffect/TorchEffect';
import Main from './components/Main/Main';
import Answer from './components/Answer/Answer';
import './App.css';

function App() {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  return (
    <div className="App">
      <TorchEffect />
      <Main showAnswer={showAnswer} onShowAnswer={handleShowAnswer} />
      {showAnswer && <Answer />}
    </div>
  );
}

export default App;
