import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import "./style.css";
import Building from '../Building'

class BuildingPage extends Component {

constructor(props) {
  super(props)

  this.state = {
    id : 0,
    image : "",
    name : "",
    style : "",
    city: "",
    architect: "",
    yearBuilt: ""
    //can be any names
  }
}

  componentDidMount() {
    console.log("mounted")
    let id = this.props.match.params.id;
    fetch(`/buildings/${id}.json`)
      .then(response => response.json())
      .then(building => {
        this.setState({
          id:building.id,
          image: building.image,
          name: building.name,
          style: building.style,
          city: building.city,
          architect: building.architect,
          yearBuilt: building.year_built
          //setting column names from database
        });
      });
  }

  render() {
    return (
      <div className="BuildingPage">
        <Building
          id={this.state.id}
          image={this.state.image}
          name={this.state.name}
          yearBuilt={this.state.yearBuilt}
          style={this.state.style}
          city={this.state.city}
          architect={this.state.architect}/>
      </div>
      //first part should match with Building and second part match with this.state names
    );
  }
}

export default BuildingPage;










