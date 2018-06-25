import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";

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
      trip_id: "",
      image: [],
      delete: false
    };
     this.onButtonClick = this.onButtonClick.bind(this);
  }

  //This component did mount first fetches from the database then
  //from the armadeus API then from the database again to translate the
  //city codes into actual city names

  componentDidMount() {
    let id = this.props.match.params.id;
    fetch(`/trips/${id}.json`).then(json =>
      json.json().then(data => {
        console.log(data);
        let date = data.departure_date.substring(0, 10);
        let trip_id = data.trip_id;
        fetch(
          `https://api.sandbox.amadeus.com/v1.2/flights/inspiration-search?apikey=LdX2udJVoFLSeSuZ04CLNkQMDICdUAvW&origin=${
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
              price,
              trip_id
            });
            console.log(this.state.trip_id)
            // let code = this.state.destination;
            fetch(`/cities.json`).then(response =>
              response.json().then(cities => {
                this.setState({
                  cities: cities
                });
                cities.map(city => {
                  if (city.city_code === this.state.destination) {
                    return this.setState({ destination: city.city_name });
                  }
                });
              })
            );
          })
        );
      })
    );
  }

  onButtonClick(evt) {
    evt.preventDefault();
    let id = this.state.trip_id;
    fetch(`${id}/delete`,{
      method: "POST",
      body: JSON.stringify(),
      headers: {
        "Content-type": "application/json"
      }}).then(()=>{
      this.setState({
        delete:true
      })
     if(this.state.delete){<Redirect to="/" />;}
    })
  }

  render() {
    return <div className="Summarypage">
        <div className="info-box">
          <div className="info">
            <h2>Your Trip:</h2>
            <img className="destination" src="https://travel.state.gov/content/dam/passports/passport-images/passport%20book.png" />
            <p className="labels">
              Destination: <span className = 'span'>{this.state.destination}</span>
            </p>
            <p className="labels">
              Departure Date: <span className = 'span'>{this.state.departure_date}</span>
            </p>
            <p className="labels">
              Return Date: <span className = 'span'>{this.state.return_date}</span>
            </p>
            <p className="labels">
              Price: <span className = 'span'>${this.state.price}</span>
            </p>
            <div className="buttons">
              <Link to={`/trips/${this.state.trip_id}/edit`}>
                <button type="button" value="EDIT" placeholder="EDIT">
                  Edit
                </button>
              </Link>

                <button type="button" onClick={this.onButtonClick}>
                  Delete
                </button>

              <Link to={`/trips`}>
                <button type="button" value="All-Trips">
                  All Trips
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>;
  }
}

export default Summarypage;
