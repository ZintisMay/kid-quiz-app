import React from 'react';
import Login from './components/Login.js';
import Menu from './components/Menu.js';
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

      keyboardIsWritingTo:"loginName",
      keyboardIsOpen:false,
      keyboardType:0,

      //Data to run student quizzes
      houses: houses,

      //
      activeSpeechSynthesis:window.activeSpeechSynthesis,

      loginName:[],
      loginHouse:[],

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

       <div class={`button MenuButton RoundedButton flexCenter ${this.state.menuIsOpen ? "cross":""}`} onClick={()=>{this.setState({menuIsOpen:!this.state.menuIsOpen})}}>
         <div class="MenuLine A"></div>
         <div class="MenuLine B"></div>
         <div class="MenuLine C"></div>
       </div>


       <Login state={this.state} alterState={this.alterState}  setKeyboardTargetAndOpen={this.setKeyboardTargetAndOpen}/>

       <Menu menuIsOpen={this.state.menuIsOpen} state={this.state} alterState = {this.alterState} speechSynthesisToggle={this.speechSynthesisToggle}/>

       <IconKeyboard keyboardIsOpen={this.state.keyboardIsOpen} keyboardIconList={keyboardIconList} keyboardWrite={this.keyboardWrite} keyboardIsWritingTo={this.keyboardIsWritingTo} alterState = {this.alterState} state={this.state}/>

      </div>
    );
  }
}

export default App;
