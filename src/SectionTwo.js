import React, { Component } from 'react';

class SectionTwo extends Component {
    constructor() {
        super();
        this.state = {
            color: '#9C7667',
        }
    } 
        // appendColors = () => {
        //     for (let i in this.props.brandProductsAndColorsProp) {
        //         console.log('hiiii', i)
        //         return i
        //     }
        //     this.appendColors();
        // }
    render() {
        // console.log(this.props.brandArray[0])
        return (
            <div>
                <h1>You chose the brand: {this.props.chosenBrandProp}</h1>
                <p>Choosing {this.props.chosenBrandProp} is a great idea! Personally, we love {this.props.top3ProductsProp}</p>
               

                {/* <p>{this.props.brandArray[0]}</p> */
                    this.props.brandArray.map((product) => { 
                        
                        const productName = product.slice(-1)[0]
                        
                        return (
                            <div>
                                <h3>{productName}</h3>
                                <p>{product[0].hex}</p>
                                <p>{product[1].hex}</p>
                                <p>{product[2].hex}</p>
                                <p>{product[3].hex}</p>
                                <p>{product[4].hex}</p>
                                <p>{product[5].hex}</p>
                                <p>{product[6].hex}</p>
                            </div>
                        )
                        
                        // product.map((color) => {
                        //     console.log(color)
                        // })
                        
                        // product.map((color) => {
                        //     return (
                        //         <p>{color}</p>
                        //     )
                        // })
                        
                    })
                }
                
                <button onClick={this.props.makeUpCallProp}>howdy</button>
​
            </div>
        )
    }

}

export default SectionTwo;