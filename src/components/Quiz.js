import React, { useState } from 'react'
import './Quiz.css'
import { speak, silence } from '../utils/speech.js'
import { capitalize } from '../utils/utils.js'

const Quiz = (props) => {

	// const answerColors = ["red", "blue", "purple", "orange"]

	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [answerToSelect, setAnswerToSelect] = useState(null);
	
	const theQuiz = props.state.currentQuiz
	const theQuestion = theQuiz.questions[currentQuestionIndex]

	if (props.state.currentQuiz && window.speechSynthesis.activeSpeechSynthesis) {
		// console.log(props.state.currentQuiz.name)
		// speak(`Starting Quiz ${props.state.currentQuiz.name}`)
	}
	let answerQuestion = (questionIndex, answerIndex) => {
		console.log(questionIndex, answerIndex)
		// theQuestion.answersByUser[props.state.]
		speak(theQuestion.answers[answerIndex])
		nextQuestion()
	}
	let nextQuestion = () => {
		setCurrentQuestionIndex(currentQuestionIndex + 1)
	}
	let prevQuestion = () => {
		setCurrentQuestionIndex(currentQuestionIndex - 1)
	}
	let goBack = () => {
		silence()
		speak("returning to quiz list")
		props.alterState({ currentQuiz: null })
	}
	return (
		<div className={`Quiz ${props.state.quizIsOpen ? "open" : ""}`}>

			<div class="quizQuestion flex center" onClick={()=>{speak(theQuestion.prompt[0])}}>{theQuestion.prompt[0]}</div>
			<div class="quizAnswers row">
				{
					props.state.currentQuiz.questions[currentQuestionIndex].answers.map((item, answerIndex) => {
						return <div class="quizAnswer flex center" key={answerIndex} onClick={() => { answerQuestion(currentQuestionIndex, answerIndex) }}>{item}</div>
					})

				}


			</div>

			<div
				className="button kidsKeyboardButton RoundedButton goButton goBack"
				onClick={goBack}
				style={{ backgroundImage: `url(/arrowLeftIcon.png)` }}
			>
			</div>
		</div>
	)

}

export default Quiz