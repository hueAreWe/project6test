import React, { Component } from 'react';
import axios from 'axios';

class SectionTwo extends Component {
    constructor() {
        super();
        this.state = {
            color: '#9C7667',
        }
    }
        appendColors = () => {
            for (let i in this.props.brandProductsAndColorsProp) {
                console.log('hiiii', i)
                return i
            }
            this.appendColors();
        }
    render() {
        return (
            <div>
                
                {/* {console.log(this.props.chosenBrandProp)} */}
                {
                
                    
                }
                <h1>You chose the brand: {this.props.chosenBrandProp}</h1>
                <p>Choosing {this.props.chosenBrandProp} is a great idea! Personally, we love {this.props.top3ProductsProp}</p>
                <p>there are the product colors we love{this.props.productColorsProp}</p>
                {
                    
                    
                    // <p>Color 1 {this.props.productColorsProp}. Color 2 {this.props.productColorsProp}. Color 3 {this.props.productColorsProp}. Color 4 {this.props.productColorsProp}. Color 5 {this.props.productColorsProp}. Color 6 {this.props.productColorsProp}. Color 7 {this.props.productColorsProp}</p> 
                    // colorsssssss 
                    // this.props.productColorsProp.map((eeee) => {

                    //     // return (
                    //     //     <p> {eeee.product_name} </p>  
                    //     // )
                    //     console.log(eeee)
                    // })
                    
                }
                
                <button onClick={this.props.makeUpCallProp}>howdy</button>
​
            </div>
        )
    }

}

export default SectionTwo;