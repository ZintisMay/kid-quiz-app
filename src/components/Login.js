import React, { useState } from 'react';
import './Login.css';
import { speak, silence } from '../utils/speech.js'
import { capitalize } from '../utils/utils.js'

function Login(props) {

  const [count, setCount] = useState(0);

  if (props.state.loginIsOpen && !window.speechSynthesis.speaking) {
    speak("Please enter a name and house, then press the arrow")
  }

  const enterName = () => {
    silence()
    speak("Please Enter Your Sign")
    props.alterState({ keyboardIsOpen: true, keyboardIsWritingTo: "loginSign" })
  }

  const enterHouse = () => {
    silence()
    speak("Please Enter Your House")
    props.alterState({ keyboardIsOpen: true, keyboardIsWritingTo: "loginHouse" })
  }

  const login = () => {
    silence()
    if (!props.state.loginSign.length && !props.state.loginHouse.length) {
      speak("Please enter a sign and house")
    } else if (!props.state.loginHouse.length) {
      speak("Please enter your house")
    } else if (!props.state.loginSign.length) {
      speak("Please enter your log in sign")
    } else {
      speak("Attempting Log In")

      //makes an ajax call to check for login
      props.alterState({ loginIsOpen: false, keyboardIsWritingTo: "", userIsLoggedIn: true, dashboardIsOpen: true, menuIsOpen: false })

      //throw error if failed, tell user
    }
  }

  return (
    <div className={`Login ${props.state.loginIsOpen ? "open" : ""}`}>
      <h1>Login</h1>
      <div className="iconRow">
        <div
          onClick={enterName}
          className="button kidsKeyboardButton category"
          style={{ backgroundImage: `url(/personIcon.png)` }}
        >
        </div>
        {props.state.loginSign.map(item => {
          return (<div
            key={item}
            className="button kidsKeyboardButton"
            style={{ backgroundImage: `url(/${item}Icon.png)` }}
            onClick={() => { speak(item) }}
          >
          </div>)
        })}
      </div>
      <div className="iconRow barAbove">
        <div
          onClick={enterHouse}
          className="button kidsKeyboardButton category"
          style={{ backgroundImage: `url(/houseIcon.png)` }}
        >
        </div>
        {props.state.loginHouse.map(item => {
          return (<div
            key={item}
            className="button kidsKeyboardButton"
            style={{ backgroundImage: `url(/${item}Icon.png)` }}
            onClick={() => { speak(item) }}
          >
          </div>)
        })}
      </div>
      <div className="iconRow center barAbove">
        {
          ['person', 'arrowRight', 'house'].map((item) => {
            return (<div
              key={item}
              onClick={login}
              className="button kidsKeyboardButton category"
              style={{ backgroundImage: `url(/${item}Icon.png)` }}
            >
            </div>)
          })
        }
      </div>
    </div>
  );

}

export default Login;