import React, { useState } from 'react';
import './IconKeyboard.css';

function IconKeyboard(props) {

  const [animalPhrase, setAnimalPhrase] = useState([]);

    return (
      <div className="IconKeyboard">
				<div className="textArea">{animalPhrase.join(" ")}</div>
				<div className="writingArea">
					<div 
						 	className="kidsKeyboardButton goButton" 
						 	onClick={()=>{}}
						 	style={{backgroundImage:`url(/checkmarkIcon.png)`}}
						 	>
					</div>
          {animalPhrase.map(item=>{
		       	return (<div 
			       	key={item}
						 	className="kidsKeyboardButton" 
						 	onClick={()=>{setAnimalPhrase([...animalPhrase.filter((x)=>{return x != item})])}}
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
						 	onClick={()=>{setAnimalPhrase([...animalPhrase,item])}}
						 	style={{backgroundImage:`url(/${item}Icon.png)`}}
						 	>
						 </div>)
		      })}
        </div>

      </div>
    );

}


export default IconKeyboard;