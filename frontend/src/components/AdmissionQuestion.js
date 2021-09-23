import React, { useState } from "react";
import { useForm } from "react-hook-form";
import addKomentaras from "../hooks/addKomentaras";
import "../views/CSS/Admission.scss";
import { Form, Button, Col, Row, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/authContext";

const AdmissionQuestion = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const { mutate } = addKomentaras();
  const [isGood, setGood] = useState();
  const { currentUser } = useAuth();

  const rasytiKomentara = async (data, res) => {
    try {
      await mutate(data);
      setGood(true);
      setTimeout(() => {
        setGood();
      }, 4000);
    } catch (error) {
      setGood(false);
      setTimeout(() => {
        setGood();
      }, 4000);
    }
  };
  return (
    <Row className="pb-4">
      <Col md={{ span: 8 }}>
        <h2 className="KlausimuPav">Klausimai</h2>
        <h6 className="KlausimoInformacija">Jei kyla daugiau klausimų, galite žemiau pateiktoje formoje juos užduoti mūsų personalui</h6>
        {isGood === true ? (
          <Alert controlid="Sekmingas pranesimas" text-align="center" variant="success">
            Klausimas išsiūstas ir bus atsakytas į nurodytą elektroninį paštą per įprastai 1 valandą
          </Alert>
        ) : isGood === false ? (
          <Alert controlid="Klaidos pranesimas" variant="danger">Oops! Kažkur įsivėle klaida</Alert>
        ) : (
          <></>
        )}
        <Form
          onSubmit={handleSubmit(rasytiKomentara)}
          controlid="KlausimoField"
        >
          <Form.Label>Užduokite klausimą:</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            type="klausimas"
            name="klausimas"
            ref={register()}
            required
          />

          <Form.Label>El. pašto adresas:</Form.Label>

          {!currentUser && (
            <Form.Control
              type="email"
              name="anonymousEmail"
              placeholder="Įveskite el. paštą"
              ref={register()}
              required
            />
          )}
          {currentUser && (
            <Form.Control
              type="email"
              name="anonymousEmail"
              placeholder="Įveskite el. paštą"
              ref={register()}
              defaultValue={currentUser.email}
              required
            />
          )}

          <Button className="mt-2" type="submit">Išsiųsti</Button>
        </Form>
      </Col>
    </Row>
  );
};

export default AdmissionQuestion;
