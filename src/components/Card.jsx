import React, { Component } from 'react';

export class Card extends Component{
    render(){
        return (
            <div className={"card "+(this.props.name)}>
                { this.props.nom }
                { this.props.couleur }
            </div>
        );
    }
}

export default Card;
