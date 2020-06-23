import React from 'react';
import Login from './components/Login.js';
import Menu from './components/Menu.js';
import IconKeyboard from './components/IconKeyboard.js';
import './App.css';

import keyboardIconList from './data/keyboardIconList'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name:'myname',
      keyboardIsWritingTo:"name",
      keyboardIsOpen:false,
      keyboardType:0,

      loginIsOpen:false,
      menuIsOpen:false,
    }
    console.log(keyboardIconList)
  }

  setKeyboardTargetAndOpen = (target) => {
    this.setState({keyboardIsOpen:true, keyboardIsWritingTo:target})
  }

  keyboardWrite = (val) => {
    let newState = {...this.state}
    newState[this.state.keyboardIsWritingTo] = val
    this.setState(newState)
  }

  alterState = (key,value) => {
    let newState = {...this.state}
    newState[key] = value
    this.setState(newState)
  }

  render(){
    return (
      <div className="App">
       APP {this.state.name}

       <div onClick={()=>{this.setState({keyboardIsOpen:!this.state.keyboardIsOpen})}}>
         Open keyboard
       </div>

       <div class={`button MenuButton flexCenter ${this.state.menuIsOpen ? "cross":""}`} onClick={()=>{this.setState({menuIsOpen:!this.state.menuIsOpen})}}>
         <div class="MenuLine A"></div>
         <div class="MenuLine B"></div>
         <div class="MenuLine C"></div>
       </div>


       <Login alterState={this.alterState} setKeyboardTargetAndOpen={this.setKeyboardTargetAndOpen}/>

       <Menu menuIsOpen={this.state.menuIsOpen} />

       <IconKeyboard keyboardIsOpen={this.state.keyboardIsOpen} keyboardIconList={keyboardIconList} keyboardWrite={this.keyboardWrite} keyboardIsWritingTo={this.keyboardIsWritingTo} alterState = {this.alterState}/>

      </div>
    );
  }
}

export default App;
