import React, { Component, Fragment } from "react";
import "./App.css";
import Chart from "../Components/Chart/Chart";
import Cards from "../Components/Cards/Cards.js";
import Loader from "../Components/Utils/Loader/Loader";
import Countries from "../Components/Countries/Countries";
import {PATH_BASE, COUNTRIES_PATH} from "../Components/Utils/Url/Url"
import Flag from "../Components/Countries/Flag/Flag";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: null,
      countries: [],
      selectedCountry: null
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

  countrySelectHandler = (event) => {
    const iso2 = event.target.value;
    const isAll = iso2 === 'all';
    const path =   isAll ? PATH_BASE : `${COUNTRIES_PATH}/${iso2}`; 

    this.setState({stats:null})
    fetch(path)
    .then(response => response.json())
    .then(country => {
      if(isAll){
        this.setState({stats: country, selectedCountry: null})
      } else {
        this.setState({stats: country, selectedCountry: iso2})
      }
    })
    .catch(error => error)
  }

  render() {
    const { stats, countries, selectedCountry} = this.state;
    let flag = null;

    if(!stats) return <Loader/>
    if(selectedCountry) flag = <Flag country={selectedCountry}/>

    return (
      <Fragment>  
        <div className="container">
          {flag}
          <Cards stats={stats}/>
          <Countries selectedCountry={selectedCountry} countries={countries} onCountrySelect={this.countrySelectHandler}/>
          <Chart stats={stats}/>
        </div>
      </Fragment>  
    );
  }
}

export default App;
