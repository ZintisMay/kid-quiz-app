import React, { useState } from 'react';
import './Quiz.css';
import { speak, silence } from '../utils/speech.js'
import { capitalize } from '../utils/utils.js'

function Quiz(props) {

  // const [count, setCount] = useState(0);

  if (props.state.currentQuiz && window.speechSynthesis.activeSpeechSynthesis) {
    speak(`Starting Quiz ${props.state.currentQuiz.name}`)
  }



  return (
    <div className={`Quiz ${props.state.quizIsOpen ? "open" : ""}`}>
      Quiz
    </div>
  );

}

export default Quiz;