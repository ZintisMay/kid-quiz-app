import React, { useState, useEffect } from 'react';
import './IconKeyboard.css';

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

function IconKeyboard(props) {

  const [animalArray, setAnimalArray] = useState([]);

  function addAnimalIcon(word){
  	window.speechSynthesis.cancel()
  	speak(word)
		setAnimalArray([...animalArray, word])
  }

  function removeAnimalIcon(index){
  	window.speechSynthesis.cancel()
  	speak("no " + animalArray[index])
		setAnimalArray([...animalArray.filter((x, ind)=>{return ind != index})])
  }

  function go(){

  	speak(animalArray.join(" "))

  	props.keyboardWrite(animalArray.map((item)=>{
  	 return capitalize(item);
  	}).join(""))

  	setTimeout(()=>{
  		close()
  	},1000)
  }
  
  function close(){
  	setAnimalArray([])
  	props.alterState("keyboardIsOpen", false)
  }

  function speak(word){
		var msg = new SpeechSynthesisUtterance(word);
		window.speechSynthesis.speak(msg);
  }

  //Go button is in the corner with the closeButton
  return (
    <div className={`IconKeyboard ${props.keyboardIsOpen ? "onScreen":"offScreen"}`}>
			<div 
				 	className="button kidsKeyboardButton goButton" 
				 	onClick={go}
				 	style={{backgroundImage:`url(/checkmarkIcon.png)`}}
				 	>
			</div>
			<div 
				 	className="button kidsKeyboardButton closeButton" 
				 	onClick={close}
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
			<div className="keyArea">
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