import React from 'react'
import {
    CardGroup,
    Card,
    InputGroup,
    FormControl,
    Form,
    Button,
    Col,
    Container,
    Row,
    Image,
    Nav,
  } from "react-bootstrap";
  import { NavLink } from "react-router-dom";

const BottomInfo = () => {

    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    return (
        <div>
            <Container fluid>
        <Row className="InfoTab">
          <Col className="AddresLink" md={4}>
            <h3>Adresas</h3>
            <em>Šermukšnių g. 28, Klaipėda</em>
            <h3>Telefono numeris</h3>
            <a href="tel:+37011111111">
              <ins>+370 11 11 11 11</ins>
            </a>
            <h3>Darbo laikas</h3>
            <em>Pirmadienis - Penktadienis (8:00val-18:00val)</em>
            <h3>Elektroninis paštas</h3>
            <a href = "mailto:jolantasal76@gmail.com?subject=Zinute is puslapio"><i>jolantasal76@gmail.com</i></a>
          </Col>
          <Col className="AddresLink" md={4}>
          <h3 className="pb-2">Lokacija</h3>
            <iframe
              className="Map"
              loading="lazy"
              src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}
              &q=Mazieji+Lazeriukai&center=55.6969704,21.1394681&zoom=18`}
            ></iframe>
          </Col>
          <Col className="AddresLink" md={4}>
            <h3>Naudingos nuorodos:</h3>
            <Col>
              <NavLink
                exact
                activeClassName="isActive"
                className="navbar-brand nav-link"
                to="/"
              >
                Pradinis
              </NavLink>
            </Col>
            <Col>
              <NavLink
                exact
                activeClassName="isActive"
                className="navbar-brand nav-link"
                to="/Apiemus"
              >
                Apie mus
              </NavLink>
            </Col>
            <Col>
              <NavLink
                exact
                activeClassName="isActive"
                className="navbar-brand nav-link"
                to="/Priemimas"
              >
                Priėmimas
              </NavLink>
            </Col>
            <Col>
              <NavLink
                exact
                activeClassName="isActive"
                className="navbar-brand nav-link"
                to="/paskyra"
              >
                Paskyra
              </NavLink>
            </Col>
          </Col>
        </Row>
      </Container>
        </div>
    )
}

export default BottomInfo
