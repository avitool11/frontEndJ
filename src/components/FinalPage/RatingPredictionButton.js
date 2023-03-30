import React, { Component } from 'react';
import './RatingPredictionButton.css';
import LoadingSpinner from './LoadingSpinner';
import SubmitButton from './SubmitButton';


class RatingPredictionButton extends Component {
    constructor(props) {
        super(props);

      

        this.state = {
          data: null,
          error: null,
          isLoading: false,
          loaded: false,
          selectedOption: '',
          showAdditionalElements: false,
          selectedOptionR: ''
        };
      }
      handleOptionChangeR = (event) => {
        this.setState({ selectedOptionR: event.target.value });
      }
      handleOptionChange = (event1) => {
        
        this.setState({
          selectedOption: event1.target.value,
          showAdditionalElements: event1.target.value === 'yes'
        });
      }
    
      handleClick = () => {
        this.setState({ isLoading: true, loaded: false });
        fetch('http://127.0.0.1:5000/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: this.props.data
            })
            })
        .then(response => response.json())
        .then(data => {
            this.setState({ data, isLoading: false,loaded: true });
        })
        .catch(error => {
            this.setState({ error, isLoading: false,loaded: false });
        });
      };
    render() {
      const { isLoading, loaded } = this.state;
      return (
        <div className='button'>
            <button onClick = {this.handleClick} className='button-lit'>Get Rating</button>
            {isLoading && <div className="loading-spinner"></div>}
            {loaded && <div className='result'>Your Predicted Rating Star is {this.state.data}<br/><br/>Would you like to change it?
                <div className='radios'>
                <br/><label>
                    <input
                        type="radio"
                        name="option"
                        value="yes"
                        checked={this.state.selectedOption === 'yes'}
                        onChange={this.handleOptionChange}
                    />
                    Yes <span></span>
                </label>
                <label>
                    <input
                        type="radio"
                        name="option"
                        value="no"
                        checked={this.state.selectedOption === 'no'}
                        onChange={this.handleOptionChange}
                    />
                    No
                </label>
                </div>
            </div>
            }
            {(this.state.selectedOption==='no') && <div className='submitprocess'>
            <div className='info-data'>Click on Submit Button to Continue<br/><br/></div>
            <div className='submit-button'><SubmitButton/></div>
            </div>}
            {this.state.showAdditionalElements && <div className='newrating'>
                <div className='raters'>
                    <label>
                        <input
                            type="radio"
                            name="option1"
                            value="1"
                            checked={this.state.selectedOptionR === '1'}
                            onChange={this.handleOptionChangeR}
                        />
                        1 <span></span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="option1"
                            value="2"
                            checked={this.state.selectedOptionR === '2'}
                            onChange={this.handleOptionChangeR}
                        />
                        2
                    </label>
                    <label>
                    <input
                        type="radio"
                        name="option1"
                        value="3"
                        checked={this.state.selectedOptionR === '3'}
                        onChange={this.handleOptionChangeR}
                    />
                    3 <span></span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="option1"
                            value="4"
                            checked={this.state.selectedOptionR === '4'}
                            onChange={this.handleOptionChangeR}
                        />
                        4
                    </label>
                    <label>
                    <input
                        type="radio"
                        name="option1"
                        value="5"
                        checked={this.state.selectedOptionR === '5'}
                        onChange={this.handleOptionChangeR}
                    />
                    5 <span></span>
                    </label>
                </div>
                {(this.state.selectedOptionR !== '') && <div className='confirmationText' ><br/>You have selected Rating as {this.state.selectedOptionR}<br/><br/>
                <div className='submitprocess'>
            <div className='info-data'>Click on Submit Button to Continue<br/><br/></div>
            <div className='submit-button'><SubmitButton/></div>
            </div>
                </div>}
            
            </div>}
        </div>
      );
    }
  }
     
  export default RatingPredictionButton;