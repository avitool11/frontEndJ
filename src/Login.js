import React, { Component } from 'react'

import { Link } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

          password: '',
   
          userName: ''

        };
      }

    handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    }
    
    handleClick = () => {
        this.setState({ isLoading: true, loaded: false });
        const bodyData = JSON.stringify({
            username: this.state.userName,
            password: this.state.password,
        })
        console.log(bodyData);
        fetch('http://127.0.0.1:5000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: bodyData
            })
        .then(response => response.json())
        
      };
  render () {
    const {password, userName } = this.state;
    return (
        <div className="background-body">
        <div className = "filter-layer">
            <div className='gradient'>
        <div className="container">
    
            <div className="uname"> User Name:&nbsp; <input type='text' name='userName' value={userName} onChange={this.handleInputChange}></input></div>
            <div className="password">Password:&nbsp;&nbsp;&nbsp;&nbsp; <input type='password' name='password' value={password} onChange={this.handleInputChange}></input></div>
            <Link to="/final">   <div className = "SubmitButton"> <button onClick = {this.handleClick}  className='button-lit'>Login</button>  </div>   </Link> 
            <Link to="/signup"><div className="clicksign">Click here to SignUp</div></Link>
        </div></div></div></div>
      )
  }
}

export default Login