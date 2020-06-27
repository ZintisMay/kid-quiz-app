import React, { useState } from 'react';
import { speak, silence } from '../utils/speech.js';
import './HouseDashboard.css';


function HouseDashboard(props) {
	const [possibleQuiz, setPossibleQuiz] = useState(null);

	let goBack = () => {
		silence()
		speak("returning to house dashboard")
		props.alterState({currentHouse:null})
	}

	let selectQuiz = (quizKey) => {
		if (possibleQuiz == quizKey) {
			silence()
			speak("taking quiz " + quizKey)
			setPossibleQuiz(null)
			props.alterState({ currentQuiz: props.state.currentHouse.quizzes[quizKey] })
		} else {
			silence()
			speak(`Quiz ${quizKey}`)
			setPossibleQuiz(quizKey)
		}
	}

	return (

		<div className={`HouseDashboard `}>
			<h1>{props.state.currentHouse.name}</h1>
			<div className="row">
				{
					Object.keys(props.state.currentHouse.quizzes).map((quizKey, index)=>{
						let quiz = props.state.currentHouse.quizzes[quizKey]
						return (<div class={`quizPanel flexCenter col ${possibleQuiz == quizKey ? "highlightBox":""}`} onClick={()=>{selectQuiz(quizKey)}}>
								<h2>{quiz.name}</h2>
								<p>{quiz.summary}</p>
							</div>)
					})
				}
			</div>
			<div 
				 	className="button kidsKeyboardButton RoundedButton goButton goBack" 
				 	onClick={goBack}
				 	style={{backgroundImage:`url(/arrowLeftIcon.png)`}}
				 	>
			</div>
		</div>
	);

}



export default HouseDashboard;