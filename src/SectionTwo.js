import React, { Component } from 'react';
import axios from 'axios';

class SectionTwo extends Component {
    constructor() {
        super();
        this.state = {
            color: '',
            counter: 0
        }
    } 

    componentDidMount () {
        this.scrollToBottom();
    }

    scrollToBottom = () => {
        this.toTheBottom.scrollIntoView({ behavior: "smooth" });
    }

    counterClickAdd = () => {
        this.setState({
            counter: this.state.counter + 1
        })
        if (this.state.counter === this.props.brandArray.length) {
            console.log('the lengths are now the same!!!')
            this.setState({
                counter: 0
            })
        }
        console.log('this is the counter now after i click the arrow',this.state.counter)
    }

    // counterClickSub = () => {
    //     this.setState({
    //         counter: this.state.counter - 1
    //     })
    //     if (this.state.counter === this.props.brandArray.length) {
            
    //         this.setState({
    //             counter: 0
    //         })
    //     }
    //     console.log('this is the counter now after i click the arrow', this.state.counter)
    // }

    
    render() {
        console.log(this.props.brandArray)
        return (
            
            <section className="sectionTwo">
                <h1>You chose the brand: {this.props.chosenBrandProp}</h1>

                {
                    this.props.brandArray.map((product, index) => {
                        // console.log('this is the brand array thingy', this.props.brandArray);
                        console.log('indexy', index)
                        //make a function that calls upon index in the array. have the onclick function in our arrows below call upon the counterClick above, enabling counter to increase by 1 (if right arrow) or decrease by 1 (if left arrow). once done, this will increase our counter and we will compare our index to the number on the counter. if the index number is = to counter, then we will only show what is equal to counter and visually hide everything else (take that from the setup snippet)
                        
                        
                        const productName = product.slice(-1)[0]
                        if (this.state.counter === index) {
                                return (
                                
                            
                                <div>
                                    <div value={productName} className="arrowButton arrowLeft"
                                    onClick={this.counterClickSub}>
                                        <img src={require('./image/arrow.png')} alt="" />
                                    </div>

                                    <div value={productName} className="arrowButton arrowRight" onClick={this.counterClickAdd}
                                    >
                                        <img src={require('./image/arrow.png')} alt="" />
                                    </div>
                                
                                    <div className="productInfo sectionTwoWrapper">
                                        <div className="makeUpInfo">
                                            <div className="makeUpDetails">
                                                <h3>{productName}</h3>
                                                
                                            </div>
                                            <div className="makeUpImg">
                                                <img src={this.props.productImageProp} alt={`${this.props.chosenBrandProp}'s ${productName}`} />
                                            </div>
                                    
                                        </div>
                                
                                        <div className="makeUpColors">
                                            <button className="colorButton" style={{ background: product[0].hex }} onClick={this.props.storeColor} value={product[0].hex}></button>
                                            <button className="colorButton" style={{ background: product[1].hex }} onClick={this.props.storeColor} value={product[1].hex}></button>
                                            <button className="colorButton" style={{ background: product[2].hex }} onClick={this.props.storeColor} value={product[2].hex}></button>
                                            <button className="colorButton" style={{ background: product[3].hex }} onClick={this.props.storeColor} value={product[3].hex}></button>
                                            <button className="colorButton" style={{ background: product[4].hex }} onClick={this.props.storeColor} value={product[4].hex}></button>
                                            <button className="colorButton" style={{ background: product[5].hex }} onClick={this.props.storeColor} value={product[5].hex}></button>
                                            <button className="colorButton" style={{ background: product[6].hex }} onClick={this.props.storeColor} value={product[6].hex}></button>
                                        </div>
                                    </div>
                            </div>)}
                        else {
                            return(
                                <div className="visuallyHidden">
                                
                                    <div value={productName} className="arrowButton arrowLeft" onClick={this.counterClickSub}>
                                        <img src={require('./image/arrow.png')} alt="" />
                                    </div>

                                    <div value={productName} className="arrowButton arrowRight" onClick={this.counterClickAdd}
                                    >
                                        <img src={require('./image/arrow.png')} alt="" />
                                    </div>
                                
                                    <div className="productInfo sectionTwoWrapper">
                                        <div className="makeUpInfo">
                                            <div className="makeUpDetails">
                                                <h3>{productName}</h3>
                                                
                                            </div>
                                            <div className="makeUpImg">
                                                <img src={this.props.productImageProp} alt={`${this.props.chosenBrandProp}'s ${productName}`} />
                                            </div>
                                    
                                        </div>
                                
                                        <div className="makeUpColors">
                                            <button className="colorButton" style={{ background: product[0].hex }} onClick={this.props.storeColor} value={product[0].hex}></button>
                                            <button className="colorButton" style={{ background: product[1].hex }} onClick={this.props.storeColor} value={product[1].hex}></button>
                                            <button className="colorButton" style={{ background: product[2].hex }} onClick={this.props.storeColor} value={product[2].hex}></button>
                                            <button className="colorButton" style={{ background: product[3].hex }} onClick={this.props.storeColor} value={product[3].hex}></button>
                                            <button className="colorButton" style={{ background: product[4].hex }} onClick={this.props.storeColor} value={product[4].hex}></button>
                                            <button className="colorButton" style={{ background: product[5].hex }} onClick={this.props.storeColor} value={product[5].hex}></button>
                                            <button className="colorButton" style={{ background: product[6].hex }} onClick={this.props.storeColor} value={product[6].hex}></button>
                                        </div>
                                    </div>
                                </div>)
                                }
                    })
                }

            <div style={{ float: "left", clear: "both" }}
                ref={(el) => { this.toTheBottom = el; }}>
            </div>

            </section>
        )
    }

}

export default SectionTwo;