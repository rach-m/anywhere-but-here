import React, { Component } from "react";
import "./style.css";
import { Redirect } from "react-router-dom";
import moment from "moment";

class EditPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trip_id: 0,
      budget: "",
      departure_date: "",
      duration: "",
      city_id: "",
      updated: false,
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
    const updatedTrip = {
      trip_id: this.state.trip_id,
      budget: this.state.budget,
      departure_date: this.state.departure_date,
      duration: this.state.duration,
      city_id: this.state.city_id
    };

    fetch(`/trips/${this.state.trip_id}/edit.json`, {
      method: "PUT",
      body: JSON.stringify(updatedTrip),
      headers: {
        "Content-type": "application/json"
      }
    }).then(
      this.setState({
        updated: true,
        redirectToNewPage: true
        //Redirect to new page reset to true so code know the form submit has run
      })
    );
  }

  //Grabs all the cities for the dropdown cities list
  componentDidMount() {
    fetch("/cities.json")
      .then(response => response.json())
      .then(cities => {
        this.setState({
          cities: cities
        });
        let id = this.props.match.params.id;
        fetch(`/trips/${id}.json`).then(response =>
          response.json().then(trip => {
            this.setState({
              trip_id: trip.trip_id,
              budget: trip.budget,
              departure_date: moment(trip.departure_date).format("YYYY-MM-DD"),
              duration: trip.duration,
              city_id: trip.city_id,
              city_name: trip.city_name
            });
          })
        );
      });
  }

  render() {
    if (this.state.redirectToNewPage) {
      let id = this.state.trip_id;
      return <Redirect to={`/trips/${id}.json`} />;
    }
    return (
      <div className="CreateTrip">
        
        <div className="formBox">
          <h1>Edit Trip</h1>
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
              <input
                type="date"
                name="departure_date"
                value={this.state.departure_date}
              />
            </p>
            <p>
              <label for="duration">Duration:</label>
              <input
                type="number"
                name="duration"
                placeholder="3 days"
                value={this.state.duration}
              />
            </p>
            <p>
              <label for="name">Origin:</label>
            </p>
            {/* Grabs all the cities and maps over them to create the options for the dropdown */}
            <select name="city_id">
              {this.state.cities.map((city, index) => {
                if (this.state.city_name === city.city_name) {
                  return (
                    <option
                      key={index}
                      value={city.city_id}
                      name="city_id"
                      placeholder={this.state.city_name}
                      selected
                    >
                      {city.city_name}
                    </option>
                  );
                }
                return (
                  <option
                    key={index}
                    value={city.city_id}
                    name="city_id"
                    placeholder={this.state.city_name}
                  >
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
      
    );
  }
}
export default EditPage;
