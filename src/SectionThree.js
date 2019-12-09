import React, { Component } from 'react';
import axios from 'axios';
import Tilt from 'react-parallax-tilt';
// import { ParallaxProvider } from 'react-scroll-parallax';
// import { Parallax } from 'react-scroll-parallax';
import easelPainting from './image/easelPainting.gif';

class SectionThree extends Component {
    constructor(){
        super()
        this.state = {
            paintingArray: undefined
        }
    }

    componentDidMount(){
        console.log(this.props.paintingColorProp);
        // axios({
        //     method: 'GET',
        //     url: `https://www.rijksmuseum.nl/api/en/collection?`,
        //     dataResponse: 'json',
        //     params: {
        //         key: 'e2KwL8qU',
        //         "normalized32Colors.hex": this.props.paintingColorProp,
        //         type: 'painting'

        //     }
        // })
        //     .then((data) => {
        //         // this.setState({ arts: data.data.artObjects[0]})
        //         // console.log(this.state.arts);
        //         console.log('museum', data)
        //         this.setState({
        //             paintingArray: data.artObjects
        //         })


        //     })
        
    }

    scrollToBottom = () => {
        this.toTheBottom.scrollIntoView({ behavior: "smooth" });
    }

    getArt = (e) => {
        e.preventDefault()

        axios({
            method: 'GET',
            url: `https://www.rijksmuseum.nl/api/en/collection?`,
            dataResponse: 'json',
            params: {
                key: 'e2KwL8qU',
                "f.normalized32Colors.hex": this.props.paintingColorProp,
                type: 'painting',
                imgonly: true,
                // s: 'relevance',
                ps: 100

            }
        })
            .then((data) => {
                // this.setState({ arts: data.data.artObjects[0]})
                // console.log(this.state.arts);
                console.log('museum', data.data)

                this.setState({
                    paintingArray: true
                })

                const shuffled = data.data.artObjects;

                this.scrollToBottom();

                setTimeout(() => {
                    this.setState({
                        paintingArray: shuffled.sort(() => 0.5 - Math.random())
                    })
                    
                }, 1500);

                setTimeout(() => {
                    this.scrollToBottom();

                }, 1800);

            })
    }

    render() {

        return (
            <div className='sectionThree'>
                <h1>Section Three</h1>
                <button onClick={this.getArt}>Generate</button>
                {
                    (
                        this.state.paintingArray === true
                            ?
                            <div className="preloader">
                                <img src={easelPainting} alt="A girl is painting" />

                                <div style={{ float: "left", clear: "both" }}
                                    ref={(el) => { this.toTheBottom = el; }}>
                                </div>
                            </div>
                            
                            :
                            (null)
                    )

                }

                {   
                    (
                        this.state.paintingArray !== undefined && this.state.paintingArray !== true
                            ?
                            ///////////////////////////////////////////////////////////////////////////////////////
                        // <ParallaxProvider>
                            
                            <ul className="individualPainting">
                                <div className="backgroundArt">  

                                    {/* <Parallax className="parallax" y={[-20, 20]} tagOuter="figure"> */}

                                        <li className="artwork wrapper">
                                            <Tilt tiltMaxAngleX="7" tiltMaxAngleY="7">
                                                <div className="frame">
                                                    <img src={this.state.paintingArray[0].webImage.url} alt={this.state.paintingArray[0].title} />
                                                </div>
                                            </Tilt>
                                            <div className="info wrapper">
                                                <h2>{this.state.paintingArray[0].title}</h2>
                                                <h3>{this.state.paintingArray[0].principalOrFirstMaker}</h3>
                                            </div>
                                        </li>
                                
                                {/* {this.state.paintingArray.map((i) => {
                                    return (
                                    <li className="artwork wrapper">
                                            <Tilt tiltMaxAngleX="7" tiltMaxAngleY="7">
                                        <div className="frame">
                                            <img src={i.webImage.url} alt={i.title} />
                                        </div>
                                        </Tilt>
                                        <div className="info wrapper">
                                            <h2>{i.title}</h2>
                                            <h3>{i.principalOrFirstMaker}</h3>
                                        </div>
                                    </li>
                                    )
                                })} */}
                                {/* </Parallax> */}
                            
                            </div>
                                <div style={{ float: "left", clear: "both" }}
                                    ref={(el) => { this.toTheBottom = el; }}>
                                </div>
                            </ul>
                        // </ParallaxProvider>    


                            :
                            (null)
                    )

                }
                

            </div>
        )
    }

}

export default SectionThree;