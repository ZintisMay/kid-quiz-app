import React from 'react';
import Login from './components/Login.js';
import Menu from './components/Menu.js';
import Dashboard from './components/Dashboard.js';
import IconKeyboard from './components/IconKeyboard.js';
import {speak, silence} from './utils/speech.js'
import './App.css';

import keyboardIconList from './data/keyboardIconList'
import houses from './data/houses.js'

class App extends React.Component {

  constructor(props){
    super(props)
    //Turn on sound, is a switch for the "speak()" function
    window.activeSpeechSynthesis = true
    this.state = {
      name:'myname',

      currentQuiz:false,

      keyboardIsWritingTo:"loginName",
      keyboardIsOpen:false,
      keyboardType:0,
      keyboardIconList: keyboardIconList,

      //Data to run student quizzes
      houses: houses,

      //
      activeSpeechSynthesis:window.activeSpeechSynthesis,

      loginName:[],
      loginHouse:[],
      userIsLoggedIn:true,
      dashboardIsOpen:true,

      loginIsOpen:false,
      menuIsOpen:false,
    }
    console.log(keyboardIconList)
  }

  //Allows the user to write to a specific value in the state
  keyboardWrite = (val) => {
    let newState = {...this.state}
    newState[this.state.keyboardIsWritingTo] = val
    this.setState(newState)
  }

  //Turns off the TTS
  speechSynthesisToggle = () => {
    console.log(this.state, window.activeSpeechSynthesis)
    silence()
    if(window.activeSpeechSynthesis){
      speak("sound off")
      window.activeSpeechSynthesis = false
    }else{
      window.activeSpeechSynthesis = true
      speak("sound on")
    }
    this.setState({activeSpeechSynthesis: window.activeSpeechSynthesis})
  }

  // this is a passable setState basically
  alterState = (alterObj) => {
    let newState = {...this.state}
    for(let key in alterObj){
      newState[key] = alterObj[key]
    }
    this.setState(newState)
  }

  render(){
    return (
      <div className="App">

       <div className={`button MenuButton RoundedButton flexCenter ${this.state.menuIsOpen ? "cross":""}`} onClick={ () => {this.setState({menuIsOpen:!this.state.menuIsOpen})}}>
         <div className="MenuLine A"></div>
         <div className="MenuLine B"></div>
         <div className="MenuLine C"></div>
       </div>


       {!this.state.userIsLoggedIn && <Login state={this.state} alterState={this.alterState}  setKeyboardTargetAndOpen={this.setKeyboardTargetAndOpen}/>}


     {/*Dashboard component, condition on login*/}
       {this.state.userIsLoggedIn && this.state.dashboardIsOpen && !this.state.currentQuiz && <Dashboard state={this.state} alterState = {this.alterState}/>}

       <Menu state={this.state} alterState = {this.alterState} speechSynthesisToggle={this.speechSynthesisToggle}/>

       <IconKeyboard keyboardIsOpen={this.state.keyboardIsOpen} keyboardWrite={this.keyboardWrite} keyboardIsWritingTo={this.keyboardIsWritingTo} alterState = {this.alterState} state={this.state}/>

      </div>
    );
  }
}

export default App;
