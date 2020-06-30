import React, { useState } from 'react';
import { speak, silence } from '../utils/speech.js';
import './Dashboard.css';

const HousePanel = (props) => {
	let quizzes = props.house.quizzes
	let quizNames = Object.keys(quizzes)

	return (
		<div className={`HousePanel ${props.possibleHouse == props.houseKey ? "highlightBox":""}`} onClick={() => { props.setCurrentHouse(props.houseKey) }} key={props.houseKey}>
			<h1>{props.houseKey}</h1>
			<h2>{props.house.teacher}</h2>
			<div className="row">
				{quizNames.slice(0, 3).map((quizKey, index) => {

					let quiz = quizzes[quizKey]

					return (<div 
						key={index} 
						className={`quizIcon flexCenter`} 
						// onClick={(e) => { props.selectQuiz(e.target.textContent, props.houseKey) }}
						>{quiz.name}</div>)
					})
				}
				{quizNames.length > 4 && `...and ${quizNames.length - 4} more`}
			</div>
		</div>
	)

}

function Dashboard(props) {
	const [possibleHouse, setPossibleHouse] = useState(null);

	const setCurrentHouse = (houseKey) => {
		if (possibleHouse == houseKey) {
			speak("going to " + houseKey)
			// console.log(props.state.houses[houseKey])
			setPossibleHouse(null)
			props.alterState({ currentHouse: props.state.houses[houseKey] })
		} else {
			speak(`${houseKey} with ${props.state.houses[houseKey].teacher}`)
			setPossibleHouse(houseKey)
		}
	}

	// const selectQuiz = (quizName, houseName) => {
	// 	// if (selectedQuiz == quizName) {
	// 	let theQuiz = props.state.houses[houseName].quizzes[quizName]
	// 	speak("starting " + quizName)
	// 	props.alterState({ currentQuiz: theQuiz })
	// 	// setSelectedQuiz(null)
	// 	// }else{
	// 	// setSelectedQuiz(quizName)
	// 	// speak("selecting " + quizName)
	// 	// }
	// }

	return (

		<div className={`Dashboard `}>
			{Object.keys(props.state.houses).map((houseKey, index) => {
				let house = props.state.houses[houseKey]
				// console.log(house.name)
				return (<HousePanel 
					possibleHouse={possibleHouse} 
					setCurrentHouse={setCurrentHouse} 
					// selectQuiz={selectQuiz} 
					houseKey={houseKey} 
					key={index} 
					houseKey={houseKey} 
					house={house} />)
				})}
		</div>
	);

}



export default Dashboard;