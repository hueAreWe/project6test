import React, { Component } from 'react';
import axios from 'axios';
import Tilt from 'react-parallax-tilt';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';

class SectionGallery extends Component {
    constructor(){
        super()
        this.state = {
            paintingArray: []
        }
    }

    componentDidMount(){
        console.log(this.props.paintingColorProp);
        axios({
            method: 'GET',
            url: `https://www.rijksmuseum.nl/api/en/collection?`,
            dataResponse: 'json',
            params: {
                key: 'e2KwL8qU',
                "f.normalized32Colors.hex": this.props.paintingColorProp,
                type: 'painting',
                imgonly: true,
                ps: 100

            }
        })
            .then((data) => {

                const shuffled = data.data.artObjects;

                    this.setState({
                        paintingArray: shuffled.sort(() => 0.5 - Math.random())
                    })



            })
        
    }

 

    render() {

        return (
            <div className='sectionGallery'>
   
                        <ParallaxProvider>
                            
                    <ul className="paintingGallery">              
                                <div className="galleryBackground">  

              
                                
                                {this.state.paintingArray.map((i) => {
                                    return (
                                    <Parallax className="parallax" 
                                          
                                    >
                                    <li className="artworkGallery" id="test">
                                            <Tilt tiltMaxAngleX="5" tiltMaxAngleY="5">
                                        <div className="frame">
                                    <div key={i.id}></div>
                                        <div className="galleryImage">
                                            <img src={i.webImage.url} alt={i.title} />                                        
                                        </div>
                                        </div>
                                        </Tilt>
                                        <div className="infoGallery">
                                            <h2>{i.title}</h2>
                                            <h3>{i.principalOrFirstMaker}</h3>
                                        </div>
                                    </li> 
                                    </Parallax>
                                    )
                                })}
                             
                            
                            </div>  
                                <div style={{ float: "left", clear: "both" }}
                                    ref={(el) => { this.toTheBottom = el; }}>
                                </div>
                            </ul>
                         </ParallaxProvider>    


            </div>
        )
    }

}

export default SectionGallery;