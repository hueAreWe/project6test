import React, { Component } from 'react';
import axios from 'axios';

class SectionTwo extends Component {
    constructor() {
        super();
        this.state = {
            color: '',
        }
    } 

    componentDidMount() {
    
//         document.addEventListener('DOMContentLoaded', () => {

//             const elems = document.querySelectorAll('.carousel');

//             const instances = M.Carousel.init(elems, options);
//         });
}


    render() {
        return (
            <section className="sectionTwo">
                <h1>You chose the brand: {this.props.chosenBrandProp}</h1>
                <p>Choosing {this.props.chosenBrandProp} is a great idea! Personally, we love {this.props.topProductsProp}</p>
            
                <button onClick={this.props.makeUpCallProp}>Get Your Colors!</button>

                {/* <p>{this.props.brandArray[0]}</p> */
                    this.props.brandArray.map((product) => { 
                        
                        const productName = product.slice(-1)[0]
                        
                        return (
                            <div className="productInfo wrapper">
                                <div className="makeUpInfo">
                                    <div className="makeUpDetails">
                                    <h3>{productName}</h3>
                                    <h4>{this.props.productPriceProp}</h4>
                                    </div>
                                    <div className="makeUpImg">
                                    <img src={this.props.productImageProp} alt={`${this.props.chosenBrandProp}'s ${productName}`} />
                                    </div>
                                </div>
                                
                                <div className="makeUpColors">

                                
                                <button className="colorButton" style={{background: product[0].hex}} onClick={this.props.storeColor} value={product[0].hex}>{product[0].hex}</button>
                                <button className="colorButton" style={{background: product[1].hex}} onClick={this.props.storeColor} value={product[1].hex}>{product[1].hex}</button>
                                <button className="colorButton" style={{background: product[2].hex}} onClick={this.props.storeColor} value={product[2].hex}>{product[2].hex}</button>
                                <button className="colorButton" style={{background: product[3].hex}} onClick={this.props.storeColor} value={product[3].hex}>{product[3].hex}</button>
                                <button className="colorButton" style={{background: product[4].hex}} onClick={this.props.storeColor} value={product[4].hex}>{product[4].hex}</button>
                                <button className="colorButton" style={{background: product[5].hex}} onClick={this.props.storeColor} value={product[5].hex}>{product[5].hex}</button>
                                <button className="colorButton" style={{ background: product[6].hex }} onClick={this.props.storeColor} value={product[6].hex}>{product[6].hex}</button>
                                    </div>
                            </div>
                        )
                        
                    })
                }
                
                
​
            </section>
        )
    }

}

export default SectionTwo;