import React, { useState } from "react";
import Calendar from "react-calendar";
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
  Alert,
} from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import "react-calendar/dist/Calendar.css";
import "../components/CSS/VizitoKalendorius.scss";
import DatePicker from "react-datepicker";
import usePostVizitas from "../hooks/postVizita";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import Header from "../components/Header";
import { Link, NavLink, useHistory } from "react-router-dom";

import BottomInfo from "../components/BottomInfo";
const Vizitas = () => {
  const { mutate } = usePostVizitas();
  const defaultValues = {
    DatePicker: new Date(),
  };
  const history = useHistory()
  const { register, handleSubmit, watch, errors, control } = useForm({
    defaultValues,
  });

  const [isGood, setGood] = useState();

  const [value, onChange] = useState(new Date());
  const asd = [value];

  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };
  const sub = async (data) => {
    try {
      await mutate(data);
      setGood(true);
      setTimeout(() => {
        setGood();
      history.push("/")
      }, 2000);
    } catch (error) {
      setGood(false);
      setTimeout(() => {
        setGood();
      }, 2000);
    }
  };
  let handleColor = (time) => {
    return time.getHours() > 8 && time.getHours() < 18
      ? "text-success"
      : "text-error";
  };
  return (
    <div>
       <Header/>
      <h2 className="text-center mb-4 mt-4">Vizito registravimas</h2>
      <Container>
        {isGood === true ? (
          <Alert text-align="center" variant="success">
            Vizito registravimo forma išsiųsta
          </Alert>
        ) : isGood === false ? (
          <Alert variant="danger">Oops! Įvyko klaida</Alert>
        ) : (
          <></>
        )}
        <Form onSubmit={handleSubmit(sub)}>
          <Form.Label>Įveskite savo vardą: </Form.Label>

          <Form.Group controlid="formVardas">
            <Form.Control
              type="name"
              name="Vardas"
              placeholder="Vardas"
              ref={register}
              required
            />
          </Form.Group>
          <Form.Label>Įveskite savo pavardę: </Form.Label>
          <Form.Group controlid="formPavarde">
            <Form.Control
              type="surname"
              name="Pavarde"
              placeholder="Pavardė"
              ref={register}
              required
            />
          </Form.Group>
          <Form.Group controlid="formEmail">
            <Form.Label>El. pašto adresas: </Form.Label>
            <Form.Control
              type="email"
              name="ElPastas"
              className="form-control"
              placeholder="pastas@gmail.com"
              ref={register}
              // defaultValue={currentUser.email}
              required
            />
          </Form.Group>
          <Form.Row>
          <Col lg={4}><Form.Label>Pasirinkite datą:</Form.Label>
            
            <Form.Group controlid="formData">
              <Controller
                control={control}
                name="DatePicker"
                render={(props) => (
                  <DatePicker
                    defaultValue={props.DatePicker}
                    className="input"
                    placeholderText="Pasirinkite datą"
                    onChange={(e) => props.onChange(e)}
                    selected={props.value}
                    timeFormat="HH:mm"
                    filterDate={isWeekday}
                    showTimeSelect
                    timeIntervals={30}
                    timeClassName={handleColor}
                    className="form-control"
                  />
                )}
              />
            </Form.Group></Col>
            <Col lg={8}><Form.Group controlid="formPhoneNum">
              <Form.Label>Kontaktinis telefonas: </Form.Label>
              <Form.Control
                type="tel"
                name="TelefonoNr"
                pattern="[8]{1}[0-9]{8}"
                className="form-control"
                placeholder="865111111"
                ref={register({ valueAsNumber: true })}
                required
              />
            </Form.Group></Col>
            
          </Form.Row>
          <Form.Group controlid="formVaikoDuom">
            <Form.Label>Duomenys apie vaiką(-us): </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              type="VaikoDuom"
              name="VaikoDuom"
              ref={register()}
              required
            />
          </Form.Group>
          <Button className="mb-4 " type="submit">Registruoti vizitą</Button>
        </Form>
      </Container>
      <BottomInfo />
    </div>
  );
};

export default Vizitas;
