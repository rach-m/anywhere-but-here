import React, { Component } from "react";
import "./style.css";
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";


class Contact extends Component {
  render() {
    return (
      <div className="navBar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li> <Link to="/trips/create">New</Link></li>
          <li> <Link to="/contact">Contact</Link></li>
          <li> <Link to="/trips">Trips</Link></li>
          <a href="https://www.facebook.com/groups/538776059826617/about/" className="fa fa-facebook"></a>
          <a href="https://www.instagram.com/generalassembly/" className="fa fa-instagram"></a>
        </ul>
        
        <h1 className="travel"> Meet The Team</h1>
     

      <div className="container">
      <div className="grid">
            <img className='rachel' src="https://lh3.googleusercontent.com/1iLdPRogPNRH-vBrYA8fY2pv-D-ZbE1kiGxX9UARCnhMDOupW8-FM2EFhx3tmcZnR2Pz908DCgBlmQ2RBXWl7JD2NWTo197z9NBldiDL2ba3yDWmgnS9V9put_PZSDDUlsa3TWwkT8KUnICOCpPRFrvMePI3zt8QqxE1OQAtR9cVzDMv2fRZ1S7X50WDZtd5oKDFNhc04rYmtv6uiNQexEW8W6N27zWcrsTMK9ZkPzXlrTY1pAfGbBf3AA1vkir-khX-VIDzBY1JIFK6zx-871lapGp2gqfdFPQPiQcZ40sWrvNLqyCrpYE4Yi6i9p8CRaexfGi4Qh44NSd4r3bMyvi0SvN3kbcbCRgL8y-RXaB5WRGgRpbMbgs2V9SqTV-tCyBCdVtvgYM0NX6w6Y8ENnyOtcThhuayfxWItFJJ6GrxjLi6yxudfpCc9PoOnKMBfkAYfLo6GhhUFmzDIAdlVxf6tvEcqZ-RX_Jb6341B-vnkSEAOwT6Vh9lzjVHJA_5aC4pfBpD5oRabEZV5BtIBN03CWmoTvsWpD6qnoyW2IleW1gvhdr54Nme4uRb1YSTuBix103dObVe4-XO8pcd5YnMtyOwCN9trbEgqAlXif1fXqrR582U3VFGMTKgcYysTNpWpSwtcGH2McQF1fjF7-sbQ-eyqgETMg=w560-h745-no" alt="face" />
            <img className='john' src="https://media.licdn.com/dms/image/C4D03AQHzgPLkfHPxaA/profile-displayphoto-shrink_200_200/0?e=1535587200&v=beta&t=MJZi8ntkIb8NH4LKfDM_vSnZSfzb62eOSzPaFuUkEjA" alt="face" />
            <img className='alvin' src="https://avatars.git.generalassemb.ly/u/10593?s=460" alt="face" />

            <div className="box1">
              <p>Rachel is the dictator of the group....</p>
            </div>

            <div className="box2">
              <p>John takes way too many photos and leaves them where Andrey can find them</p>
            </div>

            <div className="box3">
              <p>Alvin eats his pizza and plays on the phone</p>
            </div>
       
      </div>
      </div>
      </div>
    

    )
  }
}


export default Contact;

  