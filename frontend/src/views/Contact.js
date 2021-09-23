import React from "react";
import { Form, Button, Col, Container, Row, Alert } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "./CSS/Contact.scss";
import Header from "../components/Header";
import BottomInfo from "../components/BottomInfo";
const Contact = () => {
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  return (
    <div>
      <Header />
      <h1 className="ContactHead text-center pt-4 pb-4">
        <b>Kontaktai</b>
        <Container>
          <Row className="pt-4 pb-4">
            <h5 className="pb-4">
              Mūsų privatus darželis visada laukia naujų vaikučių. Priėmimus darome
              visus metus, tiek nuotoliniu būdų, tiek gyvai. Norėdami pradėti
              bendrauti su mumis, pasirinkite viena iš jums reikiamų paslaugų
            </h5>

            <Col sm={4}>
              <NavLink
                exact
                activeClassName="isActive"
                className="navbar-brand"
                to="/Priemimas"
              >
                <Button variant="light">Teirautis</Button>
              </NavLink>
            </Col>
            <Col sm={4}>
              <NavLink
                exact
                activeClassName="isActive"
                className="navbar-brand"
                to="/VizitoRegistravimas"
              >
                <Button variant="light">Vizitas</Button>
              </NavLink>
            </Col>
            <Col sm={4}>
              <NavLink
                exact
                activeClassName="isActive"
                className="navbar-brand"
                to="/Priemimas"
              >
                <Button variant="light">Priėmimas</Button>
              </NavLink>
            </Col>
          </Row>
        </Container>
      </h1>
      <Container className="ContactTab">
        <Row className="text-center  pt-4 pb-4">
          <Col>
            {" "}
            <h2 className="mb-4">KONTAKTINIAI DUOMENYS</h2>
            <h3>Mažieji lazeriukai</h3>
            <i>Šermukšnių g. 28, Klaipėda, Lietuva</i>
            <h3>Darbo valandos</h3>
            <i>Pirmadienis - Penktadienis (8:00val - 18:00val)</i>
            <h3>Telefono numeris</h3>
            <a href="tel:+37011111111">
              <i>+370 11 11 11 11</i>
            </a>
            <h3>Elektroninis paštas</h3>
            <a href="mailto:jolantasal76@gmail.com?subject=Zinute is puslapio">
              <i>jolantasal76@gmail.com</i>
            </a>
          </Col>
        </Row>
        <Row>
          <iframe
            className="Map"
            loading="lazy"
            src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}
              &q=Mazieji+Lazeriukai&maptype=satellite&center=55.6969704,21.1394681&zoom=17`}
          ></iframe>
        </Row>
      </Container>
      <BottomInfo />
    </div>
  );
};

export default Contact;
