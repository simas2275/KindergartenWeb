import React, { useState } from "react";
import { useAuth } from "../contexts/authContext";
import { useForm } from "react-hook-form";
import "./CSS/Login.scss";
import "./CSS/ResetPassword.scss";
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
  Modal,
  Alert,
} from "react-bootstrap";

const ResetPassword = () => {
  const [error, setError] = useState(null);
  const { sendPasswordReset } = useAuth();
  const { register, handleSubmit } = useForm();
  const [isGood, setGood] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const resetPassword = (data) => {
    try {
      sendPasswordReset(data.email);
    } catch (e) {
      setError("Vartotojas tokių el. paštu neegzsistuoja");
    }
  };

  return (
    <Container>
      <Nav.Link onClick={handleShow}>Pamiršote slaptažodį?</Nav.Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <h5>Atstatyti slaptažodį</h5>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(resetPassword)}>
            <Form.Group controlid="formReset">
              <Form.Label>Žemiau įveskite savo el. Pašto adresą :</Form.Label>
              <Form.Control
                type="email"
                name="email"
                ref={register}
                required
                className="form-control"
                placeholder="pavyzdis@gmail.com"
              />
            </Form.Group>
            <Button className="SendButton" type="submit">
              Siūsti
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="CloseButton"
            variant="secondary"
            onClick={handleClose}
          >
            Uždaryti
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ResetPassword;
