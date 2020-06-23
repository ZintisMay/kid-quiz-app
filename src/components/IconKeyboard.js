import React, { useState, useEffect } from 'react';
import './IconKeyboard.css';

function IconKeyboard(props) {

  const [animalPhrase, setAnimalPhrase] = useState([]);
 
  function addAnimalIcon(word){
  	speak(word)
		setAnimalPhrase([...animalPhrase, word])
  }

  function removeAnimalIcon(word){
  	speak("no " + word)
		setAnimalPhrase([...animalPhrase.filter((x)=>{return x != word})])
  }


  function go(){
  	speak(animalPhrase.join(" "))
  }
  
  function speak(word){
		var msg = new SpeechSynthesisUtterance(word);
		window.speechSynthesis.speak(msg);
  }

    return (
      <div className="IconKeyboard">
				<div className="textArea">{animalPhrase.join(" ")}</div>
				<div className="writingArea">
					<div 
						 	className="kidsKeyboardButton goButton" 
						 	onClick={go}
						 	style={{backgroundImage:`url(/checkmarkIcon.png)`}}
						 	>
					</div>
          {animalPhrase.map(item=>{
		       	return (<div 
			       	key={item}
						 	className="kidsKeyboardButton" 
						 	onClick={()=>{removeAnimalIcon(item)}}
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