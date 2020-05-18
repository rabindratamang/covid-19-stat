import React, { Component, Fragment } from "react";
import "./App.css";
import Chart from "../Components/Chart/Chart";
import Cards from "../Components/Cards/Cards.js";
import Loader from "../Components/Utils/Loader/Loader";

const PATH_BASE = "https://covid19.mathdro.id/api";


class App extends Component {
  constructor(props) {
    super(props);

    //binding list to App class local state
    this.state = {
      stats: null,
    };

    this.setCovidStats = this.setCovidStats.bind(this);
  }

  setCovidStats(stats) {
    this.setState({ stats: stats });
  }

  componentDidMount() {
    fetch(`${PATH_BASE}`)
      .then(response => response.json())
      .then(stats => this.setCovidStats(stats))
      .catch(error => error);
  }

  render() {
    let { stats } = this.state;
    if(!stats) return <Loader/>
    return (
      <Fragment>  
        <div className="container">
          <Cards stats={stats}/>
          <Chart stats={stats}/>
        </div>
      </Fragment>  
    );
  }
}

export default App;
