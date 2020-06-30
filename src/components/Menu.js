import React, { useState } from 'react';
import { speak, silence } from '../utils/speech.js';
import './Menu.css';

function Menu(props) {
  // const [count, setCount] = useState(0);

  return (

    <div className={`Menu ${props.state.menuIsOpen ? "onScreen" : "offScreen"}`}>

      <div className=" button kidsKeyboardButton loginBigIcon" style={{ backgroundImage: `url(/loginBigIcon.png)` }} onClick={() => {
        props.state.loginIsOpen ? speak("Closing Log In") : speak("Log in");
        props.alterState({
          loginIsOpen: !props.state.loginIsOpen
        })
      }}>

      </div>

      <div className=" button kidsKeyboardButton loginSmallIcon" style={{ backgroundImage: `url(/${props.state.activeSpeechSynthesis ? "soundOn" : "soundOff"}Icon.png)` }} onClick={() => {
        props.speechSynthesisToggle()
      }}>
      </div>

      <div className="iconRow MenuCredentials">
        {!!props.state.loginSign.length &&
          <div
            className="button kidsKeyboardButton category"
            style={{ backgroundImage: `url(/personIcon.png)` }}
            onClick={() => { silence(); speak(["my sign is ",...props.state.loginSign]) }}
          >
          </div>
        }
        {props.state.loginSign.map(item => {
          return (<div
            key={item}
            className="button kidsKeyboardButton"
            style={{ backgroundImage: `url(/${item}Icon.png)` }}
            onClick={() => { silence(); speak(item) }}
          >
          </div>)
        })}
        {!!props.state.loginHouse.length &&
          <div
            className="button kidsKeyboardButton category"
            style={{ backgroundImage: `url(/houseIcon.png)` }}
            onClick={() => { silence(); speak(["my house is ",...props.state.loginHouse]) }}
          >
          </div>
        }
        {props.state.loginHouse.map(item => {
          return (<div
            key={item}
            className="button kidsKeyboardButton"
            style={{ backgroundImage: `url(/${item}Icon.png)` }}
            onClick={() => { silence(); speak(item) }}
          >
          </div>)
        })}
      </div>
    </div>
  );
}

export default Menu;