import React, { Component } from 'react';

export class Card extends Component{
    render(){
        return (
            <div className={"card "+(this.props.name)}>
              <h3> {this.props.title} </h3>
              
            </div>
        );
    }
}

export default Card;
