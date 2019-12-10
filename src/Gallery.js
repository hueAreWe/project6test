import React, { Component } from 'react';
// import { Route } from 'react-router-dom'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import firebase from './firebase';



class Gallery extends Component {
    constructor() {
        super()
        this.state = {
            paintings: [],
        }
    }

    componentDidMount() {
        const dbRef = firebase.database().ref();
        
        dbRef.on('value', (gallery) => {
            let paintingsArray = []
            const gallery2 = gallery.val();
            for (let painting in gallery2) {
                for (let i in gallery2[painting]) {
                    paintingsArray.push(gallery2[painting][i])
                }

            }
            console.log(paintingsArray)
            this.setState({
                paintings: paintingsArray,
            })

        }) 
        
    }
    
    render() {
        // console.log(this.state.paintings)
        return (
            <div>
                <h2>Gallery</h2>
                <Link to='/'>Go back to Home</Link>
                
                {
                this.state.paintings.map((art) => {
                    return (
                        <div>
                            <h3>{art.paintingTitle}</h3>
                            <h3>{art.paintingArtist}</h3>
                            <img src= {art.paintingImage} alt={`image of ${this.paintingTitle}`}/>
                                
                        </div>       
                    
                    )
                })
            
                }
            </div>
        )
    }
}

export default Gallery;
