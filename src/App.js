import React, { Component } from 'react';
import './App.css';
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
   
    return (
      
      <div className="background-body">
        <div className = "filter-layer">
          <div className='gradient'>
            <div className='structure1'>          
            <div className='structure'>
              <div className="menu">
                <div className="n-l">
                  <div className="logo"></div>
                  <div className="name-title"><h1>Tripadvisor</h1></div>
                </div>
                <div className='home'>HOME</div>
                <div className='about'>ABOUT US</div>
                <div className='contact'>CONTACT US</div>
              </div>
              <Link to="/signup"><div className="loginsignupcard">
                <div className="profilelogo"><CgProfile/></div>
                <div className="loginsignup-text">Log In or Sign up</div>
              </div></Link>
            </div>
            
            <div className="content-main">
              <div className="white-line"></div>
              <div className="content-main-text">
                <p>PLAN YOUR <br/> PERFECT TRIP</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
   
export default App;