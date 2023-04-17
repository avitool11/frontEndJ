import React, { Component } from 'react';
import './App.css';
import { Link } from "react-router-dom";
import ProfileCard from "./components/Profile/ProfileCard";
import HomeContent from "./components/HomeContent/HomeContent";
import ClassesPage from "./components/ClassesPage/ClassesPage"
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
              <Link to="/signup" style={{ textDecoration: 'none' }}><div className="loginsignupcard">
                  <ProfileCard/>
              </div></Link>
            </div>
              {/* <HomeContent/> */}
              <ClassesPage/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
   
export default App;