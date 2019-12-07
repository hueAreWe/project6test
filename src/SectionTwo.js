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
                <p>helloo{this.props.brandProductsAndColorsProp}</p>
                {
                    
                    
                    // <p>Color 1 {this.props.brandProductsAndColorsProp}. Color 2 {this.props.brandProductsAndColorsProp}. Color 3 {this.props.brandProductsAndColorsProp}. Color 4 {this.props.brandProductsAndColorsProp}. Color 5 {this.props.brandProductsAndColorsProp}. Color 6 {this.props.brandProductsAndColorsProp}. Color 7 {this.props.brandProductsAndColorsProp}</p> 
                    // colorsssssss 
                    // this.props.brandProductsAndColorsProp.map((eeee) => {

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