import React from 'react';
import Login from './components/Login.js';
import IconKeyboard from './components/IconKeyboard.js';
import './App.css';

import keyboardIconList from './data/keyboardIconList'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name:'a',
      keyBoardIsOpen:false,
      keyBoardType:0
    }
    console.log(keyboardIconList)
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
       <button onClick={()=>{this.setState({keyBoardIsOpen:!this.state.keyBoardIsOpen})}}>Open Keyboard</button>
       <Login alterState={this.alterState} />
       {this.state.keyBoardIsOpen && <IconKeyboard keyboardIconList={keyboardIconList} alterState = {this.alterState}/>}
      </div>
    );
  }
}

export default App;
