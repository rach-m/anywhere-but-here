import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

// INSERT INTO buildings VALUES (DEFAULT, 'Sagrada Familia', 2028, 'Barcelona', 'Antoni Gaudi', 'Art Nouveau', 'https://laninga.files.wordpress.com/2016/05/dscf4303.jpg');

class Trip extends Component {
  render() {
    return <div className="building">
        <div className="image-wrapper">
          <img src={this.props.image} />
        </div>
        <div className="building-details">
          <h3>
            <Link to={`/buildings/${this.props.id}`}>
              {this.props.name}
            </Link>
          </h3>
          <p>Style: {this.props.style}</p>
          <p>City: {this.props.city}</p>
          <p>Architect: {this.props.architect}</p>
          <p>Year Built: {this.props.yearBuilt}</p>
        </div>
      </div>;
  }
}

export default Trip;
