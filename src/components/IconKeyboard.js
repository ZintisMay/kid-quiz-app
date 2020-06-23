import React, { useState, useEffect } from 'react';
import './IconKeyboard.css';

function IconKeyboard(props) {

  const [animalPhrase, setAnimalPhrase] = useState([]);

  function addAnimalIcon(word){
  	speak(word)
		setAnimalPhrase([...animalPhrase, word])
  }

  function removeAnimalIcon(index){
  	window.speechSynthesis.cancel()
  	speak("no " + animalPhrase[index])
		setAnimalPhrase([...animalPhrase.filter((x, ind)=>{return ind != index})])
  }

  function go(){
  	speak(animalPhrase.join(" "))
  }
  
  function close(){
  	props.alterState("keyBoardIsOpen", false)
  }

  function speak(word){
		var msg = new SpeechSynthesisUtterance(word);
		window.speechSynthesis.speak(msg);
  }

    return (
      <div className="IconKeyboard">
				<div 
					 	className="kidsKeyboardButton goButton" 
					 	onClick={go}
					 	style={{backgroundImage:`url(/checkmarkIcon.png)`}}
					 	>
				</div>
				<div 
					 	className="kidsKeyboardButton closeButton" 
					 	onClick={close}
					 	style={{backgroundImage:`url(/xIcon.png)`}}
					 	>
				</div>
				<div className="textArea">{animalPhrase.join(" ")}</div>
				<div className="writingArea">
          {animalPhrase.map((item, index)=>{
		       	return (<div 
			       	key={item}
						 	className="kidsKeyboardButton" 
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
						 	className="kidsKeyboardButton" 
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