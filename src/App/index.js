import React, { Component } from "react";
import Homepage from '../Homepage';
import "./style.css";
import CreateTripPage from "../CreateTripPage";
import { BrowserRouter as Router, Route } from "react-router-dom";




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: []
    };
  }

  componentDidMount() {
    fetch(
      `https://api.sandbox.amadeus.com/v1.2/flights/inspiration-search?apikey=wuSjsq5981Vet1MPJkhu3FB4HxAABw1U&origin=NYC&departure_date=2018-06-29&duration=5&max_price=500`
    )
      .then(response => response.json())
      .then(trips => {
        this.setState({
          trips
        });
        console.log(trips);
        let randomTrip = Math.floor(Math.random() * trips.results.length)
        console.log(trips.origin);
        console.log(trips.results[randomTrip]);
        console.log(trips.results[randomTrip].destination);
        console.log(trips.results[randomTrip].departure_date);
        console.log(trips.results[randomTrip].return_date);
        console.log(`$${trips.results[randomTrip].price}`);
      });
  }

  render() {
    return <div>
        <Router>
          <div>
            <Route path="/" exact component={Homepage} />
            <Route path="/trips/create" exact component={CreateTripPage} />
          </div>
        </Router>;
        <Homepage />

      </div>;
  }
}

export default App;
