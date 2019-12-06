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
      userInput: "",
      showSectionOne: true,
      showSectionTwo : true,
      showSectionThree : true,
      paintingColor: '',
      chosenBrand: "orly",
      // hold the 28 colors
      finalPainting: {},
      chosenColor : "",
      top3Products: ['product1', 'product2', 'product3'].join(", "),
      colorsArray: [],
      colorsArray2  : {
        1: "#737C84",
        2: "#FBF6E1",
        darkTeal: "#2F4F4F",
        4: "#E0CC91",
        black: "#000000",
        6: "#43C6F8",
        grey: "#B5BFCC",
        skyBlue: "#C7F2F4",
        brown: "#B35A1F",
        lightTeal: "#72E6BF",
        allBrands: [
          "almay",
          "alva",
          "anna sui",
          "annabelle",
          "benefit",
          "boosh",
          "burt's bees",
          "butter london",
          "c'est moi",
          "cargo cosmetics",
          "china glaze",
          "clinique",
          "coastal classic creation",
          "colourpop",
          "covergirl",
          "dalish",
          "deciem",
          "dior",
          "dr. hauschka",
          "e.l.f.",
          "essie",
          "fenty",
          "glossier",
          "green people",
          "iman",
          "l'oreal",
          "lotus cosmetics usa",
          "maia's mineral galaxy",
          "marcelle",
          "marienatie",
          "maybelline",
          "milani",
          "mineral fusion",
          "misa",
          "mistura",
          "moov",
          "nudus",
          "nyx",
          "orly",
          "pacifica",
          "penny lane organics",
          "physicians formula",
          "piggy paint",
          "pure anada",
          "rejuva minerals",
          "revlon",
          "sally b's skin yummies",
          "salon perfect",
          "sante",
          "sinful colours",
          "smashbox",
          "stila",
          "suncoat",
          "w3llpeople",
          "wet n wild",
          "zorah",
          "zorah biocosmetiques",
        ],
        brandObject: {

        }
      
      }
      

    }
  }



  componentDidMount() {
    
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


  makeUpCall = () => {
    axios({
        method: 'GET',
        url: `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${this.state.chosenBrand}`,
        dataResponse: 'json'
      })
      .then((makeUpData) => {
        
        const arrayOfProducts = []
        const loopedColors = []
        const brandInfo = {
          product1: {
            
          },
          product2: {},
          product3: {},
            // // productDetails : {
            // productName: '',
            // color1: {
            //   colorName: '',
            //   hexValue: '',
            // },
            // color2: {
            //   colorName: '',
            //   hexValue: '',
            // }
          
        }
        
        makeUpData.data.map((products) => {

        // const productColor = '',

        if (products.product_colors.length >= 7) {
            // arrayOfProducts.push(products.name);
            // loopedColors.push(products.product_colors)
            const colorObject = {
              hex: '',
              nameColor: '',
            }
            products.product_colors.map((color) => {
              colorObject.hex = color.hex_value;
              colorObject.nameColor = color.colour_name;
            })
          brandInfo.product1.productName = products.name;
          brandInfo.product1.color1 = colorObject;

          }       
          // this.setState({
          //   brandObject = brandInfo
          //   // }
          // })

        // loopedColors.push(products.prod)
        // products.product_colors.map((colorMap) => {
        //     loopedColors.push(colorMap.hex_value)
        //   })


        })
        console.log(brandInfo)

        // loopedColors.map((color) => {
        //   if ()
        // })
        
        this.setState({
          top3Products: arrayOfProducts.join(", ")
        })


      })
  }

      // nearestColorFunction = () => {        
      //   const nearestColor = require('nearest-color').from(this.state.colorsArray);
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

              <SectionTwo makeUpCallProp={this.makeUpCall} chosenBrandProp={this.state.chosenBrand} top3ProductsProp={this.state.top3Products} colorsArrayProp={this.state.colorsArray}/>
              
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