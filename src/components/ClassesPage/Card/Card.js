import React, { Component } from 'react';
import './Card.css';


class Card extends Component {
    render() {
        const { imageUrl1 } = this.props;
        return (
            <div className='main-card'>
                <div className='image-frame'  >
                    <img src={this.props.image} className="image" />
                </div>
                <div className='title'>
                    {this.props.title}
                </div>
                <div className='description'>
                    {this.props.description}
                </div>                
            </div>
        );
    }
}

export default Card;