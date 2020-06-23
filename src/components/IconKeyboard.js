import React, { useState, useEffect } from 'react';
import { speak, silence } from '../utils/speech.js';
import {capitalize} from '../utils/utils.js'
import './IconKeyboard.css';

function IconKeyboard(props) {

  const [animalArray, setAnimalArray] = useState([]);

  useEffect(() => {
    // Update the document title using the browser API
  });

  function addAnimalIcon(word){
  	console.log(animalArray)
  	if(animalArray.length >= 3){
  		return null
  	};
  	silence()
		speak(word)
		setAnimalArray([...animalArray, word])
  }

  function removeAnimalIcon(index){
  	silence()
  	speak("no " + animalArray[index])
		setAnimalArray([...animalArray.filter((x, ind)=>{return ind != index})])
  }

  function go(){

  	speak(animalArray.join(" "))

  	props.keyboardWrite(animalArray)

    let waitTime = window.activeSpeechSynthesis ? 500 : 0;
    setTimeout(()=>{
      close()
    }, waitTime)
  }

  function exit(){
    setAnimalArray([])
    props.keyboardWrite([])
    close()
  }
  
  function close(){
  	setTimeout(()=>{
  		setAnimalArray([])
  	},500)
    props.alterState({"keyboardIsOpen":false,"keyboardIsWritingTo":""})
  }

  //Go button is in the corner with the closeButton
  return (
    <div className={`IconKeyboard ${props.state.keyboardIsOpen ? "onScreen":"offScreen"}`}>
			<div 
				 	className="button kidsKeyboardButton RoundedButton goButton" 
				 	onClick={go}
				 	style={{backgroundImage:`url(/checkmarkIcon.png)`}}
				 	>
			</div>
			<div 
				 	className="button kidsKeyboardButton RoundedButton closeButton" 
				 	onClick={exit}
				 	style={{backgroundImage:`url(/xIcon.png)`}}
				 	>
			</div>
			<div className="textArea">{animalArray.join(" ")}</div>
			<div className="writingArea">
        {animalArray.map((item, index)=>{
	       	return (<div 
		       	key={item}
					 	className="button kidsKeyboardButton" 
					 	onClick={()=>{removeAnimalIcon(index)}}
					 	style={{backgroundImage:`url(/${item}Icon.png)`}}
					 	>
					 </div>)
	      })}
			</div>
			<div className="keyArea barAbove">
        {props.keyboardIconList.map(item=>{
	       	return (<div 
		       	key={item}
					 	className="button kidsKeyboardButton" 
					 	onClick={()=>{addAnimalIcon(item)}}
					 	style={{backgroundImage:`url(/${item}Icon.png)`}}
					 	>
					 </div>)
	      })}
      </div>

    </div>
  );

}


export default IconKeyboard;