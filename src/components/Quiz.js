import React, { useState } from 'react'
import './Quiz.css'
import { speak, silence } from '../utils/speech.js'
import { capitalize } from '../utils/utils.js'

const Quiz = (props) => {

	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [answerToSelect, setAnswerToSelect] = useState(null);
	const theQuiz = props.state.currentQuiz
	const theQuestion = theQuiz.questions[currentQuestionIndex]

	// console.log(props.state.currentQuiz)

	if (theQuiz && window.speechSynthesis.activeSpeechSynthesis) {
		speak(`Starting Quiz ${theQuiz.name}`)
	}

	let answerQuestion = (questionIndex, answerIndex) => {
		console.log(questionIndex, answerIndex)
		speak(theQuestion.answers[answerIndex])

	}

	let selectAnswer = (questionIndex, answerIndex) => {

		//Second click? Go!
		if (answerToSelect == answerIndex) {
			if(theQuestion.correctAnswerIndex == answerToSelect){
				silence()
				speak(`${theQuestion.answers[answerIndex]} is correct!`)
			}else{
				silence()
				speak(`The answer is ${theQuestion.answers[theQuestion.correctAnswerIndex]}`)
			}
			theQuestion.answersByUser[props.state.realName] = answerIndex
			setTimeout(nextQuestion,1000)
			
		//First click? speak it aloud
		} else {
			silence()
			speak(`${theQuestion.answers[answerIndex]}`)
			setAnswerToSelect(answerIndex)
		}
		
	}

	let nextQuestion = () => {
		setCurrentQuestionIndex(currentQuestionIndex + 1)
		setAnswerToSelect(null)
	}

	let prevQuestion = () => {
		setCurrentQuestionIndex(currentQuestionIndex - 1)
		setAnswerToSelect(null)
	}

	let goBack = () => {
		silence()
		speak("returning to quiz list")
		props.alterState({ currentQuiz: null })
	}

	return (
		<div className={`Quiz ${props.state.quizIsOpen ? "open" : ""}`}>

			{}

			<div class="quizQuestion flex center" onClick={()=>{speak(theQuestion.prompt[0])}}>{theQuestion.prompt[0]}</div>
			<div class="quizAnswers">
				{
					theQuiz.questions[currentQuestionIndex].answers.map((item, answerIndex) => {
						return <div className={`quizAnswer flex center ${answerIndex == answerToSelect ? 'highlightBox':''}`} key={answerIndex} onClick={() => { selectAnswer(currentQuestionIndex, answerIndex) }}>{item}</div>
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