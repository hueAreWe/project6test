import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';

class App extends Component{
  constructor() {
    super()
    this.state = {
      userInput: '',
      showSectionOne: true,
      showSectionTwo : true,
      showSectionThree : true,
      chosenBrand: '',
      // hold the 28 colours
      finalPainting: {},
      chosenColour : '',
      top3Products : [],
      coloursArray  : {
        1: '#737C84',
        2: '#FBF6E1',
        darkTeal: '#2F4F4F',
        4: '#E0CC91',
        black: '#000000',
        6: '#43C6F8',
        grey: '#B5BFCC',
        skyBlue: '#C7F2F4',
        brown: '#B35A1F',
        lightTeal: '#72E6BF',
      }
      

    }
  }



  componentDidMount() {
    axios({
      method: 'GET',
      url: 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline',
      dataResponse: 'json'
    })
      .then((makeupData) => {
        // console.log('makeup api results', makeupData.data.map((peepee) => {
        // return peepee.product_colors
        //         })
        // )
        const colorFinal = makeupData.data[12].product_colors[11].hex_value;


        const colors = {}
        console.log(colors);
        console.log(colorFinal);
      })

      






        // axios({
        //   method: 'GET',
        //   url: `https://www.rijksmuseum.nl/api/en/collection?key=kwQgDPpO&f.normalized32Colors.hex=${matchedColor.value}`,
        //   dataResponse: 'json',
        //   params: {
        //     // key: 'e2KwL8qU',
        //     // normalized32Colors: '%23FF0000'

        //   }
        // })
        //   .then((data) => {
        //     // this.setState({ arts: data.data.artObjects[0]})
        //     // console.log(this.state.arts);
        //     console.log('museum', data)

        //   })


  }
      // nearestColorFunction = () => {        
      //   const nearestColor = require('nearest-color').from(this.state.coloursArray);
      //   // (console.log(nearestColor('#f01')))
      //   // console.log('this is the nearest color', nearestColor)
      //   let matchedColor = nearestColor(colorFinal);
      //   console.log(matchedColor.value)
      // }


  render() {
    return (
      <div className="App">
        <SectionOne />
        { 
          this.state.showSectionTwo === true
          ?( 

            <SectionTwo />
            )
          :null
        }
        {
          (
            this.state.showSectionThree === true
              ?

              (<SectionThree />)
            :
              (null)
          )
          
        }
      </div>
    );
    
  }
}

export default App;
