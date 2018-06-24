import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./style.css";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Summarypage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city_code: "",
      departure_date: "",
      duration: "",
      budget: "",
      trip_id: ""
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    fetch(`/trips/${id}.json`).then(json =>
      json.json().then(data => {
        console.log(data);
        let date = data.departure_date.substring(0, 10);
        fetch(
          `https://api.sandbox.amadeus.com/v1.2/flights/inspiration-search?apikey=wuSjsq5981Vet1MPJkhu3FB4HxAABw1U&origin=${
            data.city_code
          }&departure_date=${date}&duration=${data.duration}&max_price=${
            data.budget
          }`
        ).then(response =>
          response.json().then(apiData => {
            console.log(apiData);
            let randomNumber = Math.floor(
              Math.random() * apiData.results.length
            );
            let destination = apiData.results[randomNumber].destination;
            let departure_date = apiData.results[randomNumber].departure_date;
            let return_date = apiData.results[randomNumber].return_date;
            let price = Math.ceil(apiData.results[randomNumber].price);
            // console.log(destination);
            // console.log(departure_date);
            // console.log(return_date);
            // console.log(Math.ceil(price));
            this.setState({
              randomNumber,
              destination,
              departure_date,
              return_date,
              price
            });
            let code = this.state.destination;
            fetch(`/cities.json`).then(response =>
              response.json().then(cities => {
                this.setState({
                  cities : cities
                })
                cities.map(city =>{ if(city.city_code === this.state.destination){
                  this.setState({destination: city.city_name})
                }})
              })
            );
          })
        );
      })
    );
  }

  render() {
    return (
      <div className="Summarypage">
        <div className="info-box">
          <div className="info">
            <h2>Your Trip:</h2>
            <img
              className="destination"
              src="https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1508524504/paris-ROOFTOP1017.jpg?itok=arOAqg7r"
            />
            <p className="label">
              {" "}
              Destination: <span>{this.state.destination}</span>
            </p>
            <p className="label">
              {" "}
              Departure Date: <span>{this.state.departure_date}</span>
            </p>
            <p className="label">
              {" "}
              Return Date: <span>{this.state.return_date}</span>
            </p>
            <p className="label">
              {" "}
              Price: <span>${this.state.price}</span>
            </p>
            <div className="buttons">
              <button>
                <Link to="/trips/edit">Edit</Link>
              </button>
              <button>
                <Link to="/trip/delete">Delete</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Summarypage;
