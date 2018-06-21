import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import "./style.css";
import Trip from '../Trip'

class FinalPage extends Component {

constructor(props) {
  super(props)

  this.state = {
    trip_id : 0,
    budget : "",
    departure_date : "",
    duration : "",
    airport_id: ""
    //can be any names
  }
}

  componentDidMount() {
    console.log("mounted")
    let id = this.props.match.params.id;
    fetch(`/trips/${id}.json`)
      .then(response => response.json())
      .then(trip => {
        this.setState({
    trip_id : trip.trip_id,
    budget : trip.budget,
    departure_date : trip.departure_date,
    duration : trip.duration,
    airport_id: trip.airport_id
          //setting column names from database
        });
      });
  }

  render() {
    return (
      <div className="FinalPage">
        <Building
          trip_id={this.state.trip_id}
          budget={this.state.budget}
          departure_date={this.state.departure_date}
          duration={this.state.duration}
          airport_id={this.state.airport_id}/>
      </div>
      //first part should match with Building and second part match with this.state names
    );
  }
}

export default FinalPage;










