import React, { Component } from "react";
import "./style.css";
import { Redirect } from "react-router-dom";

class CreateTripPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      budget: "",
      departure_date: "",
      duration: "",
      city_id: "",
      created: false,
      cities: [],
      redirectToNewPage: false
    };

    this.onFormChange = this.onFormChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  //Allows the form to change when the user types in it
  onFormChange(evt) {
    const element = evt.target;
    const name = element.name;
    const value = element.value;
    const newState = {};
    newState[name] = value;
    this.setState(newState);
  }

  //Handles the form when it is submitted and grabs the trip id for the redirect to single view page
  onFormSubmit(evt) {
    evt.preventDefault();
    const newTrip = {
      budget: this.state.budget,
      departure_date: this.state.departure_date,
      duration: this.state.duration,
      city_id: this.state.city_id
    };
    fetch(`/trips`, {
      method: "POST",
      body: JSON.stringify(newTrip),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      }
    })
      .then(trip => trip.json())
      .then(json => {
        console.log(json.trip_id);
        this.setState({
          created: true,
          redirectToNewPage: true,
          //Redirect to new page reset to true so code know the form submit has run
          trip_id: json.trip_id
        });
      });
  }

  //Grabs all the cities for the dropdown cities list
  componentDidMount() {
    fetch("/cities.json")
      .then(response => response.json())
      .then(cities => {
        this.setState({
          cities: cities
        });
      });
  }

  render() {
    if (this.state.redirectToNewPage) {
      let id = this.state.trip_id;
      return <Redirect to={`/trips/${id}.json`} />;
    }
    return (
      <div className="navBar">
        <ul>
          <li><a href="http://localhost:3000/">Home</a></li>
          <li><a href="http://localhost:3000/trips/create">New</a></li>
          <li><a href="contact.asp">Contact</a></li>
          <li><a href="http://localhost:3000/trips">Trips</a></li>
          <a href="https://www.facebook.com/groups/538776059826617/about/" className="fa fa-facebook"></a>
          <a href="https://www.instagram.com/generalassembly/" className="fa fa-instagram"></a>
        </ul>
      <div className="CreateTrip">
        <div className="formBox">
          <h1>New Trip</h1>
          <form onChange={this.onFormChange} onSubmit={this.onFormSubmit}>
            <p>
              <label for="budget">Budget:</label> 
              <input
                type="number"
                name="budget"
                placeholder="$500"
                value={this.state.budget}
              />

            </p>
            <p>
              <label for="departure_date">Departing:</label>
              <input type="date" name="departure_date" />
            </p>
            <p>
              <label for="duration">Duration:</label>
              <input type="number" name="duration" placeholder="3 days" />
            </p>
            <p>
              <label for="name">Origin:</label>
            </p>
            {/* Grabs all the cities and maps over them to create the options for the dropdown */}
            <select name="city_id">
              {this.state.cities.map((city, index) => {
                return (
                  <option key={index} value={city.city_id} name="city_id">
                    {city.city_name}
                  </option>
                );
              })}
            </select>

            <p>
              <input type="submit" value="SUBMIT" class="submit" />
            </p>
          </form>
        </div>
      </div>
      </div>
    );
  }
}
export default CreateTripPage;
