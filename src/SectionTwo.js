import React, { Component } from 'react';
import axios from 'axios';
​
class SectionTwo extends Component {
    constructor() {
        super();
        this.state = {
            color: '#9C7667',
        }
    }
​
    
    render() {
        return (
            <div>
                {console.log(this.props.chosenBrandProp)}
                <h1>You chose the brand: {this.props.chosenBrandProp}</h1>
                <p>Choosing {this.props.chosenBrandProp} is a great idea! Personally, we love {this.props.top3ProductsProp}</p>
                {
                    /* 
                    <p>Color 1 {this.props.colorsArrayProp[0]}. Color 2 {this.props.colorsArrayProp[1]}. Color 3 {this.props.colorsArrayProp[2]}. Color 4 {this.props.colorsArrayProp[3]}. Color 5 {this.props.colorsArrayProp[4]}. Color 6 {this.props.colorsArrayProp[6]}. Color 7 {this.props.colorsArrayProp[7]}</p> 
                    */
                }
                
                <button onClick={this.props.makeUpCallProp}>howdy</button>
​
            </div>
        )
    }
​
}
​
export default SectionTwo;