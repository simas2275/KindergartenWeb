import React, { useState } from "react";
import "./CSS/Admission.scss";
import { Form, Button, Col, Container, Row, Alert } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import AdmissionQuestion from "../components/AdmissionQuestion";
import VizitoKalendorius from "../components/VizitoKalendorius";
import { useAuth } from "../contexts/authContext";
import useAddVaikoData from "../hooks/addVaikoRez";
import Header from "../components/Header";
import BottomInfo from "../components/BottomInfo";

const Admission = () => {
  const { register, handleSubmit, watch, errors, getValues } = useForm();
  const { currentUser } = useAuth();
  const [isGood, setGood] = useState();
  const { mutate, data } = useAddVaikoData();

  const registruotiVaika = async (data) => {
    try {
      await mutate(data);
      setGood(true);
      setTimeout(() => {
        setGood();
      }, 2000);
    } catch (error) {
      setGood(false);
      setTimeout(() => {
        setGood();
      }, 2000);
    }
  };
  const showSecondForm = watch("AntrasVaikas");

  return (
    <div>
      <Header />
      <Container className="PriemimoCon1">
        <h1>Priėmimas</h1>
      </Container>
      <Container fluid className="RegistracijosCon">
        <Row >
          <Col  md={5}>
            <h2 className="PriemimoPav">Bendroji informacija</h2>
            <ul className="BendraInfo">
              <li>Priimame vaikučius nuo 1 iki 3 metukų</li>
              <br/>
              <li>
                Patvirtinus vaiko rezervaciją, yra galima koreguoti vaiko maisto
                racioną
              </li>
              <br/>
              <li>
                Prieš pradedant lankyti darželį, reikia pateikti gydytojo pažymą
              </li>
              <br/>
              <li>
                Internetu užpildžius vizito forma, galima atvykti į darželį ir
                susipažinti su darželio aplinka, aukletojais bei ugdymo programa
              </li>
              <br/>
            </ul>
          </Col>

          {currentUser && (
            <Col md={7}>
              <h2 className="PriemimoPav">Vaiko vietos rezervacijos forma</h2>
              <Form onSubmit={handleSubmit(registruotiVaika)}>
                <Form.Group>
                  {isGood === true ? (
                    <Alert text-align="center" variant="success">
                      Rezervacija išsiūsta patvirtinti{" "}
                    </Alert>
                  ) : isGood === false ? (
                    <Alert variant="danger">Oops! Kažkur įsivėlė klaida</Alert>
                  ) : (
                    <></>
                  )}
                  <Form.Label>Tėčio arba mamos vardas ir pavardė</Form.Label>
                  <Form.Row>
                    <Col>
                      <Form.Group controlid="formVardas">
                        <Form.Control
                          type="name"
                          name="TevuVardas"
                          placeholder="Vardas"
                          ref={register}
                          required
                          // defaultValue={currentUser.displayName}
                        />
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group controlid="formPavarde">
                        <Form.Control
                          type="surname"
                          name="TevuPavarde"
                          placeholder="Pavardė"
                          ref={register}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Form.Row>
                </Form.Group>
                <Form.Group controlid="formEmail">
                  <Form.Label>El. pašto adresas</Form.Label>
                  <Form.Control
                    type="email"
                    name="TevuEmail"
                    className="form-control"
                    placeholder="pastas@gmail.com"
                    ref={register}
                    defaultValue={currentUser.email}
                    required
                  />
                </Form.Group>
                <Form.Group controlid="formPhoneNum">
                  <Form.Label>Kontaktinis telefonas</Form.Label>
                  <Form.Control
                    type="tel"
                    name="TevuTelNum"
                    pattern="[8]{1}[0-9]{8}"
                    className="form-control"
                    placeholder="812345678"
                    ref={register({ valueAsNumber: true })}
                    required
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Vaiko vardas ir amžius</Form.Label>
                  <Form.Row>
                    <Col sm={6}>
                      <Form.Group controlid="formVaikoVardas">
                        <Form.Control
                          type="VaikoVardas"
                          name="VaikoVardas"
                          placeholder="Vaiko vardas"
                          ref={register}
                        />
                      </Form.Group>
                    </Col>

                    <Col sm={3}>
                      <Form.Group controlid="formVaikoAmzius">
                        <Form.Control
                          type="number"
                          max={3}
                          min={1}
                          name="VaikoAmzius"
                          placeholder="Vaiko amzius"
                          ref={register({ valueAsNumber: true })}
                        />
                      </Form.Group>
                    </Col>
                    <Col sm={2}>
                      <Form.Check
                        inline
                        name="AntrasVaikas"
                        label="Antras vaikas"
                        id="AntrasVaikas"
                        ref={register}
                      />
                    </Col>
                  </Form.Row>
                  {showSecondForm && (
                    <Form.Group>
                      <Form.Label>Antro vaiko vardas ir amžius</Form.Label>
                      <Form.Row>
                        <Col sm={6}>
                          <Form.Group controlid="formVaikoVardas2">
                            <Form.Control
                              type="name"
                              name="AntroVaikoVardas"
                              placeholder="Antro vaiko vardas"
                              ref={register}
                            />
                          </Form.Group>
                        </Col>

                        <Col sm={3}>
                          <Form.Group controlid="formVaikoAmzius2">
                            <Form.Control
                              type="number"
                              max={3}
                              min={1}
                              name="AntroVaikoAmzius"
                              placeholder="Antro vaiko amzius"
                              ref={register({ valueAsNumber: true })}
                            />
                          </Form.Group>
                        </Col>
                      </Form.Row>
                    </Form.Group>
                  )}
                </Form.Group>
                <Button
                  className="LogIN"
                  name="reg"
                  id="reg"
                  type="submit"
                  block
                >
                  Registruoti
                </Button>
              </Form>
            </Col>
          )}
          {!currentUser && (
            <Col>
              <h4>
                Jeigu norite užregistruoti vaiką, pirmiausia reikia {""}
                <NavLink
                  exact
                  activeClassName="isActive"
                  className="navbar-brand"
                  to="/login"
                >
                   prisijungti/užsiregistruoti
                </NavLink>
              </h4>
            </Col>
          )}
        </Row>
      </Container>
      <Container className="VizitoCon">
        <Col className="AplankymoColum" md={{ span: 4, offset: 6 }}>
          Darželio aplankymas
          <h2>Visada laukiame jūsų</h2>
          <p>Norite aplankyti mūsų darzželį?</p>
          <NavLink to="/VizitoRegistravimas">
            <Button variant="light">Registruotis vizitui </Button>
          </NavLink>
        </Col>
      </Container>

      <Container fluid>
        <Row>
          <Col md={4}>
            <div className="KainuCont">
              <h2>Darželio kainoraštis</h2>
              <p>Kainos yra keliu tipų, priklausomai nuo tėvų pasirinkimo</p>
              <NavLink className="ReadMore" to="/Kainos">
                <h6>Skaityti daugiau</h6>
              </NavLink>
            </div>
          </Col>
          <Col md={8}>
            <AdmissionQuestion />
          </Col>
        </Row>
      </Container>
      <BottomInfo />
    </div>
  );
};

export default Admission;
