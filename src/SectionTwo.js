import React, { Component } from 'react';
import axios from 'axios';

class SectionTwo extends Component {
    constructor() {
        super();
        this.state = {
            color: '#9C7667',
        }
    }

    
    render() {
        return (
            <div>
                {console.log(this.props.chosenBrandProp)}
                <h1>You chose the brand: {this.props.chosenBrandProp}</h1>
                <p>Choosing {this.props.chosenBrandProp} is a great idea! Personally, we love {this.props.top3ProductsProp}</p>
                {
                    /* <p>Colour 1 {this.props.coloursArrayProp[0]}. Colour 2 {this.props.coloursArrayProp[1]}. Colour 3 {this.props.coloursArrayProp[2]}. Colour 4 {this.props.coloursArrayProp[3]}. Colour 5 {this.props.coloursArrayProp[4]}. Colour 6 {this.props.coloursArrayProp[6]}. Colour 7 {this.props.coloursArrayProp[7]}</p> */
                }
                
                <button onClick={this.props.makeUpCallProp}>howdy</button>

            </div>
        )
    }

}

export default SectionTwo;