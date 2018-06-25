import React, { Component } from "react";
import "./style.css";
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";


class Contact extends Component {
  render() {
    return <div className="navBar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/trips/create">New</Link>
          </li>
          <li>
            {" "}
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            {" "}
            <Link to="/trips">Trips</Link>
          </li>
          <a href="https://www.facebook.com/groups/538776059826617/about/" className="fa fa-facebook" />
          <a href="https://www.instagram.com/generalassembly/" className="fa fa-instagram" />
        </ul>

        <h1 className="travel"> Meet The Team</h1>
        <h2>We're Ready to Take You Anywhere... </h2>

        <div className="container">
          <div className="grid">
            <img className="rachel" src="https://lh3.googleusercontent.com/1iLdPRogPNRH-vBrYA8fY2pv-D-ZbE1kiGxX9UARCnhMDOupW8-FM2EFhx3tmcZnR2Pz908DCgBlmQ2RBXWl7JD2NWTo197z9NBldiDL2ba3yDWmgnS9V9put_PZSDDUlsa3TWwkT8KUnICOCpPRFrvMePI3zt8QqxE1OQAtR9cVzDMv2fRZ1S7X50WDZtd5oKDFNhc04rYmtv6uiNQexEW8W6N27zWcrsTMK9ZkPzXlrTY1pAfGbBf3AA1vkir-khX-VIDzBY1JIFK6zx-871lapGp2gqfdFPQPiQcZ40sWrvNLqyCrpYE4Yi6i9p8CRaexfGi4Qh44NSd4r3bMyvi0SvN3kbcbCRgL8y-RXaB5WRGgRpbMbgs2V9SqTV-tCyBCdVtvgYM0NX6w6Y8ENnyOtcThhuayfxWItFJJ6GrxjLi6yxudfpCc9PoOnKMBfkAYfLo6GhhUFmzDIAdlVxf6tvEcqZ-RX_Jb6341B-vnkSEAOwT6Vh9lzjVHJA_5aC4pfBpD5oRabEZV5BtIBN03CWmoTvsWpD6qnoyW2IleW1gvhdr54Nme4uRb1YSTuBix103dObVe4-XO8pcd5YnMtyOwCN9trbEgqAlXif1fXqrR582U3VFGMTKgcYysTNpWpSwtcGH2McQF1fjF7-sbQ-eyqgETMg=w560-h745-no" />
            <img className="john" src="https://media.licdn.com/dms/image/C4D03AQHzgPLkfHPxaA/profile-displayphoto-shrink_200_200/0?e=1535587200&v=beta&t=MJZi8ntkIb8NH4LKfDM_vSnZSfzb62eOSzPaFuUkEjA" alt="face" />
            <img className="alvin" src="https://avatars.git.generalassemb.ly/u/10593?s=460" />

            <div className="box1">
              <a href="https://www.linkedin.com/in/rachm/">
                Rachel Moskowitz
              </a>
              <p>Senior Web Developer</p>
            </div>

            <div className="box4">
              <p>
                I am an analog and digital artist with a background in
                graphic design. My passion for the intersection between
                composition and web development, helps me to create exciting
                and interactive designs using the latest technologies. I
                enjoy solving problems in a logical and structured manner,
                marrying together clean layouts with dry code. I see myself
                utilizing my talents in a position where I can work with
                both designers and developers to create incredible
                functional designs.
              </p>
            </div>

            <div className="box2">
              <a href="https://www.linkedin.com/in/john-venezia1">
                John Venezia
              </a>
              <p>Senior Web Developer</p>
            </div>
            <div className="box5">
              <p>
                Creative, visionary, and dynamic professional, poised to
                enter the Web Development industry to employ strong skills
                and knowledge in creativity. Well-organized and
                detail-focused individual with natural leadership to take on
                challenges and initiatives.
              </p>
            </div>

            <div className="box3">
              <a href = 'https://www.linkedin.com/in/alvinchun911/'>Alvin Chun</a>
              <p>Senior Web Developer</p>
            </div>
            <div className="box6">
              <p>
                Innovative, creative and a proven team
                player, passionate about using the latest technology skills
                such as Javascript, Node.js, React to create responsive and
                detail-oriented applications.
              </p>
            </div>
          </div>
        </div>
      </div>;
  }
}


export default Contact;

