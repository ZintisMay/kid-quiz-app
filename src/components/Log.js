import React from 'react';
// import './Login.css';

class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name:'a'
    }
  }

  alterState(newState){
    this.setState(newState)
  }


  render(){
    return (
      <div className="Login">
       Login {this.state.name}
      </div>
    );
  }
}

export default Login;
