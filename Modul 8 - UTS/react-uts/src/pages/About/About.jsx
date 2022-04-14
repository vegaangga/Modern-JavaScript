import React, { Component } from "react";
import { Col, Image, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import profile from "../../assets/profile.png";

const About = () => {
  return (
    <>
      <Row>
        <Col>
          <h1>My Profile</h1>
          <Row>
            <Col md={6} className="text-start">
              <ListGroup>
                <ListGroupItem>
                  <p className="fw-bold m-0">NIM</p>
                  <p className="m-0">2041723013</p>
                </ListGroupItem>
                <ListGroupItem>
                  <p className="fw-bold m-0">Name</p>
                  <p className="m-0">Vega Anggaresta</p>
                </ListGroupItem>
                <ListGroupItem>
                  <p className="fw-bold m-0">Class</p>
                  <p className="m-0">TI-3C</p>
                </ListGroupItem>
                <ListGroupItem>
                  <p className="fw-bold m-0">Study Program</p>
                  <p className="m-0">D-IV Informatic Engineering</p>
                </ListGroupItem>
                <ListGroupItem>
                  <p className="fw-bold m-0">Email</p>
                  <p className="m-0">2041723013@student.polinema.ac.id</p>
                </ListGroupItem>
                <ListGroupItem>
                  <p className="fw-bold m-0">Social Media</p>
                  <p className="m-0">Instagram: @ve.gaa</p>
                  <p className="m-0">Twitetr: @iamvenope</p>
                </ListGroupItem>
              </ListGroup>
            </Col>
            <Col md={4}>
              <Image src={profile} className="img-thumbnail w-100" />
        </Col>
          </Row>
        </Col>

      </Row>
    </>
  );
};

export default About;
