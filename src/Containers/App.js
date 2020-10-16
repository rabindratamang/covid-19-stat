import React, { Component, Fragment } from "react";
import "./App.css";
import Cards from "../Components/Cards/Cards.js";
import Loader from "../Components/Utils/Loader/Loader";
import Countries from "../Components/Countries/Countries";
import {PATH_BASE, COUNTRIES_PATH} from "../Components/Utils/Url/Url"
import Flag from "../Components/Countries/Flag/Flag";
import StatChart from "../Components/Chart/StatChart";
import Header from "../Components/Header/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: null,
      countries: [],
      selectedCountry: 'all'
    };
  }

  componentDidMount() {
    fetch(PATH_BASE)
      .then(response => response.json())
      .then(stats => this.setState({ stats: stats }))
      .catch(error => error);
    
    fetch(COUNTRIES_PATH)
      .then(response => response.json())
      .then(resObj => this.setState({countries: resObj.countries}))
      .catch(error => error)
  }

  countrySelectHandler = (option) => {
    const iso2 = option.value;
    const path = iso2 === 'all' ? PATH_BASE : `${COUNTRIES_PATH}/${iso2}`; 
    this.setState({stats:null})
    fetch(path)
    .then(response => response.json())
    .then(country => {
        this.setState({stats: country, selectedCountry: iso2})
    })
    .catch(error => error)
  }

  render() {
    const { stats, countries, selectedCountry} = this.state;
    let flag = null;

    if(!stats) return <Loader/>
    if( selectedCountry !=='all' ) flag = <Flag country={selectedCountry}/>

    return (
      <Fragment>  
        <Header/>
        <div className="container">
          {flag}
          <Cards stats={stats}/>
          <Countries selectedCountry={selectedCountry} countries={countries} onCountrySelect={this.countrySelectHandler}/>
          <StatChart stats={stats} />
        </div>
      </Fragment>  
    );
  }
}

export default App;
