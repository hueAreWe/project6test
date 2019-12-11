import React, { Component } from 'react';
import axios from 'axios';
import './App.scss';
// import './App.css';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import Gallery from './Gallery';
import firebase from './firebase';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super()
    this.state = {
      userInput: "",
      showSectionOne: true,
      showSectionTwo: false,
      showSectionThree: true,
      chosenBrand: "",
      // hold the 28 colors
      finalPainting: {},
      chosenColor: false,
      topProducts: [],
      colorsArray: [],
      brandObject: {},
      brandArray: [],
      counter: 0,
      productImage: '',
      sectionTwoPageLoad: false,
      colorsArray2: {
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
          "anna sui",
          "benefit",
          "boosh",
          "burt's bees",
          "butter london",
          "cargo cosmetics",
          "clinique",
          "coastal classic creation",
          "colourpop",
          "covergirl",
          "dior",
          "dr. hauschka",
          "e.l.f.",
          "essie",
          "l'oreal",
          "marcelle",
          "marienatie",
          "maybelline",
          "milani",
          "misa",
          "nudus",
          "nyx",
          "orly",
          "penny lane organics",
          "piggy paint",
          "pure anada",
          "rejuva minerals",
          "revlon",
          "salon perfect",
          "sinful colours",
          "smashbox",
          "suncoat"
        ],
      }
    }
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();
    // this.addArtToFirebase()
    
    
  }


  // addArtToFirebase = (e) => {
  //   /// note this is a test axios call to get firebase working. @steven, remove this when you move this funciton to section 3 component
  //   axios({
  //     method: 'GET',
  //     url: `https://www.rijksmuseum.nl/api/en/collection?`,
  //     dataResponse: 'json',
  //     params: {
  //       key: 'e2KwL8qU',
  //       "f.normalized32Colors.hex": this.props.paintingColorProp,
  //       type: 'painting',
  //       imgonly: true,
  //       // s: 'relevance',
  //       ps: 100

  //     }
  //   })
      // .then((data) => {

      //   const dbRef = firebase.database().ref();

      //   console.log(data.data.artObjects[0])

      //   const paintingObject = {
      //     paintingTitle: data.data.artObjects[2].title,
      //     paintingImage: data.data.artObjects[2].webImage.url,
      //     paintingArtist: data.data.artObjects[2].principalOrFirstMaker,
      //   }

      //   dbRef.child('publicGallery').push(paintingObject);

      // })

  // }

  // changeGallery = (e) => {
  //   console.log('gallery')
  //   this.setState({
  //     showSectionOne: false,
  //     showSectionTwo: false,
  //     showSectionThree: false,
  //     showGallery: true,
  //   })    
  // }

  

  startCarousel = (e) => {
    this.setState({
      nextProduct: e.target.value
    })
  }


  storeColor = (e) => {
    this.setState({
      chosenColor: e.target.value,
    })
  } 
  
  makeUpCall = (b) => {
    axios({
      method: 'GET',
      url: `https://makeup-api.herokuapp.com/api/v1/products.json?brand=${b}`,
      dataResponse: 'json'
    })
      .then((makeUpData) => {
        
        const arrayOfProducts = ['product1', 'product2', 'product3']
        const brandInfo = []
        
        makeUpData.data.map((products, index) => {
          if (products.product_colors.length >= 7) {
            const colorArray = products.product_colors.map((color, index) => {
              if (index < 8) {
                
                
                return {
                  hex: color.hex_value,
                  nameColor: color.colour_name,
                }
              }
            })

            colorArray.push(products.name)
            // console.log(products.image_link)
            colorArray.push(products.image_link)
            const newColorArray = colorArray.filter((colorObject) => {
              if (typeof colorObject !== undefined) {
                return colorObject
              }
            })
            // console.log(newColorArray)


            arrayOfProducts.push(products.name);            
            if (brandInfo.length > 2) {
              return
            } else {
              brandInfo.push(newColorArray);


              this.setState({
                productImage: products.image_link,
              })
            }
            
            

          }
        })
        if (typeof brandInfo !== undefined) {

          // brandInfo.length = 3
          this.setState({
            topProducts: arrayOfProducts.join("and "),
            brandArray: brandInfo,
            
          })

        }

      })
  }

  counterClickAdd = () => {
    if (this.state.counter < (this.state.brandArray.length - 1)) {
      this.setState({
        counter: this.state.counter + 1,
        sectionTwoPageLoad: false,
      })
    } else {
      this.setState({
        counter: 0,
        sectionTwoPageLoad: false,
      })
    }
  }

  counterClickSub = () => {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1,
        sectionTwoPageLoad: false,
      })
    } else {
      this.setState({
        counter: this.state.brandArray.length - 1,
        sectionTwoPageLoad: false,
      })
    }
  }

  // nearestColorFunction = () => {        
  //   const nearestColor = require('nearest-color').from(this.state.colorsArray);
  //   // (console.log(nearestColor('#f01')))
  //   // console.log('this is the nearest color', nearestColor)
  //   let matchedColor = nearestColor(colorFinal);
  //   console.log(matchedColor.value)
  // }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// the chosenbrand handler
  chosenBrandHandler = (b) => {
    this.setState({ 
      chosenBrand: b,
      showSectionTwo: true,
      sectionTwoPageLoad: true,
      counter: 0,
    });
    this.makeUpCall(b);
  }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  render() {
    return (
      <Router basename="/hueareyou">
        
      <div className="App">

        <Route exact path='/' 
            render={
              () => {
                return (
                  <div> 
                  <Link to='/gallery' className="galleryLink shimmer">Gallery</Link>
                    {
                      this.state.showSectionOne === true
                        ?
                        <SectionOne chosenBrandHandler={this.chosenBrandHandler} />
                        :
                        null
                    }
                    {
                      this.state.showSectionTwo === true
                        ? (

                          <SectionTwo counterClickAdd={this.counterClickAdd} counterClickSub={this.counterClickSub} counter={this.state.counter}sectionTwoPageLoad={this.state.sectionTwoPageLoad} storeColor={this.storeColor} brandArray={this.state.brandArray} makeUpCallProp={this.makeUpCall} chosenBrandProp={this.state.chosenBrand} topProductsProp={this.state.topProducts} colorsArrayProp={this.state.colorsArray} productColorsProp={this.appendBrandInfo} productImageProp={this.state.productImage} />
                        )
                        : null
                    }
                    {
                      (
                        this.state.showSectionThree === true
                          ?
                          ///////////////////////////////////////////////////////////////////////////////////////
                          // (<SectionThree paintingColorProp={this.state.paintingColor} />)
                          (<SectionThree paintingColorProp={this.state.chosenColor} />)
                          :
                          (null)
                      )

                    }
                  </div>
                )
              }
            }
        />
          <Route path='/gallery'
            render={
              () => {
                return (
                  <Gallery galleryItemArray='[]' />
                )
              }
            } />
        
      </div>
      </Router>
    );

  }

  
}

export default App;