import React, { Component } from 'react';
import './HomeContent.css';
import { Link } from "react-router-dom";

class HomeContent extends Component {
    render() {
        return (
            <div className='home-page'>
                
                <div className="content-main">
                    <div className="white-line"></div>
                    <div className="content-main-text">
                        <p>PLAN YOUR <br/> PERFECT TRIP</p>
                    </div>
                    <Link to="/final" style={{ textDecoration: 'none' }}> 
                    <div className='bengaluru-cover'>
                        <div className='bengaluru-image'></div>
                        <div className='bengaluru-name'>
                            BENGALURU
                        </div>
                    </div></Link>
                </div>
            </div>
        );
    }
}

export default HomeContent;