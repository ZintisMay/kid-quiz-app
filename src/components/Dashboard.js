import React, { useState } from 'react';
import { speak, silence } from '../utils/speech.js';
import './Dashboard.css';

const HousePanel = (props) => {

	return (
		<div className="HousePanel" key={props.houseKey}>
			<h1 onClick={(e) => { speak(e.target.textContent) }}>{props.houseKey}</h1>
			<h2 onClick={(e) => { speak(e.target.textContent) }}>{props.house.teacher}</h2>
			<div className="row">
				{Object.keys(props.house.quizzes).map((quizKey) => {
					let quiz = props.house.quizzes[quizKey]
					return (<div className={`quizIcon flexCenter`} onClick={(e) => { props.selectQuiz(e.target.textContent,props.houseKey)}}>{quiz.name}</div>)
				})}
			</div>
		</div>
	)

}

function Dashboard(props) {
	const [selectedQuiz, setSelectedQuiz] = useState(null);

	const selectQuiz = (quizName, houseName) => {
		if (selectedQuiz == quizName) {
			let theQuiz = props.state.houses[houseName].quizzes[quizName]
			speak("starting " + quizName)
			props.alterState({ currentQuiz: theQuiz })
			setSelectedQuiz(null)
		}else{
			setSelectedQuiz(quizName)
			speak("selecting " + quizName)
		}
	}

	return (

		<div className={`Dashboard `}>
			{Object.keys(props.state.houses).map((houseKey, index) => {
				let house = props.state.houses[houseKey]
				console.log(house.name)
				return (<HousePanel selectQuiz={selectQuiz} houseKey={houseKey} key={index} houseKey={houseKey} house={house} />)
			})}
		</div>
	);

}



export default Dashboard;