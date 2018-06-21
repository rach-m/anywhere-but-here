import React, { Component } from "react";
import "./style.css";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class CreateTripPage extends Component {
  


  render() {
    return (
    <div className='CreateTrip'>
    <h1>Trip</h1>
    <form>
        
          <label for="budget">Budget</label>
          <input type="number" name="budget" placeholder="$"/>

          <label for="departure_date">Departing</label>
          <input type="date" name="Depart" placeholder=""/>

          <label for="duration">Duration</label>
          <input type="number" name="duration" placeholder="3" />

          <label for="origin">Origin</label>
          <input type="text" name="origin" placeholder="JFK" />
          
        <p>
          <input type="submit" value="submit"/>
        </p>

    </form>
    </div>
    )
  }
}
export default CreateTripPage;
