import React, { Component } from 'react';

class SectionOne extends Component {
    constructor() {
        super()
        this.state = {
            searchValue: "",
            // selectedBrand: "",
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
        }
    }

    //pesudo steps
    // create a search input
    // get value from an search input, return an array of search results
    // once a brand being picked, save it in the state
    // Go to section two

    handleChange = e => {
        this.setState({
            //reset error message
            errorMessage: "",
            // recording the user input
            searchValue: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
            
        if (this.state.searchValue !== "") {
        
            this.setState({
                errorMessage: "Sorry, we cann't find your brand🤪"
            })

            this.state.allBrands.forEach((i)=>{
                if (i === this.state.searchValue) {
                    this.setState({
                        // selectedBrand: i, ======> we don't need to set state in section one, we just need to pass it to the app.js
                        errorMessage: "",
                        // chosenBrandHandler
                    })
                    this.props.chosenBrandHandler(this.state.searchValue)
                }
            })

        } else {
            this.setState({
                errorMessage: "Please give us something!🤬"
            })
        }



        // console.log(this.state.selectedBrand)
        // if (this.state.selectedBrand === "") {
        //     this.setState({
        //     errorMessage: "Sorry, we cann't find your brand🤪"
        // })
        // }
        
    }


render() {

    return (
        <div className="sectionOne">
            <h1>Hue Are You?</h1>
            <form action="">
                <label htmlFor="searchBar">Enter your favourite brand</label>
                    {this.state.errorMessage !== "" ? <div>{this.state.errorMessage}</div> : ""}
                <input 
                    type="search" 
                    placeholder="ex: L'Oreal" 
                    id="searchBar" 
                    onChange={this.handleChange}
                    value={this.state.searchValue}
                >
                </input>
                <button onClick={this.handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
        )
    }

}

export default SectionOne;