import React from 'react';
import Login from './components/Login.js';
import Menu from './components/Menu.js';
import IconKeyboard from './components/IconKeyboard.js';
import {speak, silence} from './utils/speech.js'
import './App.css';

import keyboardIconList from './data/keyboardIconList'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name:'myname',

      keyboardIsWritingTo:"loginName",
      keyboardIsOpen:false,
      keyboardType:0,

      loginName:[],
      loginHouse:[],

      loginIsOpen:false,
      menuIsOpen:false,
    }
    console.log(keyboardIconList)
  }

  // setKeyboardTargetAndOpen = (target) => {
  //   this.setState({keyboardIsOpen:true, keyboardIsWritingTo:target})
  // }

  keyboardWrite = (val) => {
    let newState = {...this.state}
    newState[this.state.keyboardIsWritingTo] = val
    this.setState(newState)
  }

  // alterState = (key,value) => {
  //   let newState = {...this.state}
  //   newState[key] = value
  //   this.setState(newState)
  // }

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
       APP {this.state.loginName}



       <div class={`button MenuButton flexCenter ${this.state.menuIsOpen ? "cross":""}`} onClick={()=>{this.setState({menuIsOpen:!this.state.menuIsOpen})}}>
         <div class="MenuLine A"></div>
         <div class="MenuLine B"></div>
         <div class="MenuLine C"></div>
       </div>


       <Login state={this.state} alterState={this.alterState}  setKeyboardTargetAndOpen={this.setKeyboardTargetAndOpen}/>

       <Menu menuIsOpen={this.state.menuIsOpen} state={this.state} alterState = {this.alterState} />

       <IconKeyboard keyboardIsOpen={this.state.keyboardIsOpen} keyboardIconList={keyboardIconList} keyboardWrite={this.keyboardWrite} keyboardIsWritingTo={this.keyboardIsWritingTo} alterState = {this.alterState} />

      </div>
    );
  }
}

export default App;
