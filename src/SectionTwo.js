import React, { Component } from 'react';

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
                <h1>You chose the brand: {this.props.chosenBrandProp}</h1>
                <p>Choosing {this.props.chosenBrandProp} is a great idea! Personally, we love {this.props.top3ProductsProp}</p>
               

                {/* <p>{this.props.brandArray[0]}</p> */
                    this.props.brandArray.map((product) => { 
                        
                        const productName = product.slice(-1)[0]
                        
                        return (
                            <div>
                                <h3>{productName}</h3>
                                <button onClick={this.props.storeColor} value={product[0].hex}>{product[0].hex}</button>
                                <button onClick={this.props.storeColor} value={product[1].hex}>{product[1].hex}</button>
                                <button onClick={this.props.storeColor} value={product[2].hex}>{product[2].hex}</button>
                                <button onClick={this.props.storeColor} value={product[3].hex}>{product[3].hex}</button>
                                <button onClick={this.props.storeColor} value={product[4].hex}>{product[4].hex}</button>
                                <button onClick={this.props.storeColor} value={product[5].hex}>{product[5].hex}</button>
                                <button onClick={this.props.storeColor} value={product[6].hex}>{product[6].hex}</button>
                            </div>
                        )
                        
                    })
                }
                
                <button onClick={this.props.makeUpCallProp}>howdy</button>
​
            </div>
        )
    }

}

export default SectionTwo;