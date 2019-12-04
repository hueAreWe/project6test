import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component{
  componentDidMount() {
    axios({
      method:'GET',
      url: 'https://www.rijksmuseum.nl/api/nl/collection/SK-C-5',
      dataResponse: 'json',
      params: {
        key: 'e2KwL8qU',
        normalized32Colors: '%23FF0000'
        
      }
    })
    .then((museumData)=> {
              console.log('museum',museumData)
              axios({
                method:'GET',
                url: 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline',
                dataResponse: 'json'
              })
              .then((makeupData)=> {
                // console.log('makeup api results', makeupData.data.map((peepee) => {
                //           return peepee.product_colors
                //         })
                // )
                const colorFinal = makeupData.data[12].product_colors[11].hex_value;
                
                
                var colors = {
                  red: '#f00',
                  yellow: '#ff0',
                  blue: '#00f'
                };

                console.log(colors);
                console.log(colorFinal);

                var nearestColor = require('nearest-color').from(colors);
                // (console.log(nearestColor('#f01')))
                // console.log('this is the nearest color', nearestColor)
                console.log(nearestColor(colorFinal))


              }).catch((failboi)=>{
                console.log('you have failed baby', failboi)
                

              });
            })
            
    
    
        
            
    
    };


  render() {
    return (
      <div className="App">
        
      </div>
    );
    
  }
}

export default App;
