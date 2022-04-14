import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from "react-router-dom";
// import { IconName } from "react-icons/ai";

const Footercomponent = () => {
  return (
    <MDBFooter color="green" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="4">
            <h5 className="title" >ABOUT</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!"> About Us</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Store Location</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Contact</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="4">
            <h5 className="title" >Follow Us ON</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Twitetr</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Facebook</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Instagram</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Youtube</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footercomponent;