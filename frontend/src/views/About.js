import React from "react";
import "./CSS/About.scss";
import { Col, Container, Row, Image, Figure } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import location from "../assets/images/Location.png";
import img from "../assets/images/AboutTitle.jfif";
import man from "../assets/teamPhoto/1.jfif";
import woman from "../assets/teamPhoto/2.jfif";
import woman2 from "../assets/teamPhoto/3.jfif";
import Header from "../components/Header";
import BottomInfo from "../components/BottomInfo";
const About = () => {
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  return (
    <div>
      <Header />
      <Container className="PirmasApieCon">
        <Row>
          <Col lg={6}>
            <Image src={img} fluid />
          </Col>
          <Col className="ApieApr" lg={6}>
            <h2>Plačiau apie mus</h2> <br />
            Stiprus bendruomenės jausmas mūsų darželyje yra būtinas ir svarbus
            mums visiems. Plėsdami mūsų darželis mes norime tik geriausio mūsų
            klientams
          </Col>
        </Row>
      </Container>

      <Container fluid className="LocationCon">
        <Row>
          <Col className="LocationApr" lg={6}>
            <h4>Mūsų lokacija</h4>
            <h2>Šilta, šviesi bei šiuolaikinė aplinka</h2>
            Mūsų vietovę rasite pažymėtą žemėlapyje. Taip pat atvykstantiems
            klientams visada bus vietos kur pasistatyti automobilį ir pasiimti
            saugiai vaiką
          </Col>
          <Col className="LocationPhoto" lg={6}>
            <Image src={location} width={500} fluid />
          </Col>
        </Row>
      </Container>

      <Container className="KolektyvoCon">
        <Row className="KolektyvoRow">
          <Row>
            <Col className="KolektyvoApr">
              <h2>Kolektyvas</h2>
              Mūsų kolektyvas visada laukia naujų vaikučių
            </Col>
          </Row>

          <Row className="KolektyvoRow">
            <Col className="KolektVard1" md={4}>
              <h2>Kristijonas Dargis</h2>
              "Vaikai tai pats nuostabiausias sutvėrimtas, kuris teikia tiek daug džiaugsmo, meilės ir šiltų atsiminimų"
              <Figure>
                <Figure.Image width={280} src={man} alt="man" />
              </Figure>
            </Col>

            <Col className="KolektVard2" md={4}>
              <h2>Hoebaer Sonia</h2>
              "Esu begalo laiminga, dirbdama su vaikučiais"
              <Figure>
                <Figure.Image width={280} src={woman} alt="woman" />
              </Figure>
            </Col>
            <Col md={4}>
              <Col className="KolektVard3">
                <h2>Ebele Olav</h2>
                "Būnant su vaikais sustoja laikas, ir pats nejučia šypsaisi... Ir džiugina įvairios mažos smulkmenos."
                <Figure>
                  <Figure.Image width={280} src={woman2} alt="woman2" />
                </Figure>
              </Col>
            </Col>
          </Row>
        </Row>
        {/* <Row >
          <Col className="asd" md={6}>
            <h3>Vardas Pavarde</h3>
            <h5>Pareigos</h5>
            <span>
              It is a long established fact that a reader will be distracted by
              the readable content of a page
            </span>
          </Col>
          <Col className="asd" md={6}>
            <h3>Vardas Pavarde</h3>
            <h5>Pareigos</h5>
            <span>
              It is a long established fact that a reader will be distracted by
              the readable content of a page
            </span>
          </Col>
          <Col className="asd" md={6}>
            <h3>Vardas Pavarde</h3>
            <h5>Pareigos</h5>
            <span>
              It is a long established fact that a reader will be distracted by
              the readable content of a page
            </span>
          </Col>
          <Col className="asd" md={6}>
            <h3>Vardas Pavarde</h3>
            <h5>Pareigos</h5>
            <span>
              It is a long established fact that a reader will be distracted by
              the readable content of a page
            </span>
          </Col>
        </Row> */}
      </Container>
      <BottomInfo />
    </div>
  );
};

export default About;
