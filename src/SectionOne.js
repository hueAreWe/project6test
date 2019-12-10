import React, { Component } from 'react';

class SectionOne extends Component {
    constructor() {
        super()
        this.state = {
            searchValue: "",
            // selectedBrand: "",
            filterBrand: [],

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
                "deciem",
                "dior",
                "dr. hauschka",
                "e.l.f.",
                "essie",
                "fenty",
                "iman",
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

    componentDidMount() {
        this.setFilteredBrandsArray()
    }
    
    setFilteredBrandsArray = () => {
        this.setState({
            filterBrand: [...this.state.allBrands]
        })
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
            searchValue: e.target.value.toLowerCase(),
            
        })
        
        setTimeout(() => {
            this.setState({
    
                filterBrand: [...this.state.allBrands].filter(item => item.includes(this.state.searchValue))
            })            
        }, 200);


    }

    handleSubmit = e => {
        e.preventDefault()

        console.log(this.state.searchValue)
            
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
    }

    brandButtonSubmit = e => {
        e.preventDefault()
        this.props.chosenBrandHandler(e.target.id)
    }


render() {
    return (
        <div className="sectionOne">
            <div className="title">
                <div className="titleText">
                	<h1>Hue <span className="h1">Are You</span></h1>
                </div>
            </div>
            <form action="">
                <label htmlFor="searchBar" className="visuallyHidden">Enter your favourite brand</label>
                    {this.state.errorMessage !== "" ? <div>{this.state.errorMessage}</div> : ""}
                <input 
                    type="search" 
                    placeholder="ex: L'Oreal" 
                    id="searchBar" 
                    onChange={this.handleChange}
                    value={this.state.searchValue}
                >
                </input>
                <button onClick={this.handleSubmit} className="visuallyHidden">
                    Submit
                </button>
            </form>

            <div className="brandsContainer">
                {this.state.filterBrand.map((i)=>{
                    return <button key={i} id={i} onClick={this.brandButtonSubmit}> {i} </button>
                })}
            </div>
            
        </div>
        )
    }

}

export default SectionOne;