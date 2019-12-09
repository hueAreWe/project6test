import React, { Component } from 'react';
import axios from 'axios';

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

    // const shuffled = this.state.whatever.sort(() => 0.5 - Math.random());

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
                
                const shuffled = data.data.artObjects
                
                this.setState({
                    paintingArray: shuffled.sort(() => 0.5 - Math.random())
                })


            })
    }

    render() {

        return (
            <div>
                <h1>Section Three</h1>
                <button onClick={this.getArt}>Generate</button>
                {
                    (
                        this.state.paintingArray !== undefined
                            ?
                            ///////////////////////////////////////////////////////////////////////////////////////
                            <div className="individualPainting">
                                {this.state.paintingArray.map((i) => {
                                    return (
                                    <div key={i.id}>
                                        <div className="image">
                                            <img src={i.webImage.url} alt={i.title} />
                                        </div>
                                        <div>
                                            <h2>{i.title}</h2>
                                            <h3>{i.principalOrFirstMaker}</h3>
                                        </div>
                                    </div>
                                    )
                                })}
                            </div>


                            :
                            (null)
                    )

                }
                

            </div>
        )
    }

}

export default SectionThree;