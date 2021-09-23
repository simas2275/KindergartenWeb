import React, { createRef, useState } from "react";

import { Link, NavLink, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import {
  Form,
  Button,
  Container,
  Modal,
  Alert,
} from "react-bootstrap";
import "./CSS/Register.scss";
import useUpdateUserName from "../hooks/updateUserData";
import {useForm} from "react-hook-form";
const Register = () => {
  const {errors} = useForm();
  const [error, setError] = useState(null);
  
  const [emailError, setEmailError] = useState(null);
  const [vardoError, setVardoError] = useState(null);

  const [pwError, setPwError] = useState(null);



  const { register } = useAuth();
  let emailInput = createRef();
  let nameInput = createRef();
  let passwordInput = createRef();
  let password2Input = createRef();
  const history = useHistory()
  const { mutate } = useUpdateUserName();

  

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const registerUser = async (event) => {
    event.preventDefault();
    const email = emailInput.value;
    const name = nameInput.value;
    const password = passwordInput.value;
    const password2 = password2Input.value;
    if ( password === "" && password2 === "" && email === "" && name === "") {
      setPwError("Privaloma įvesti slaptažodį");
      setEmailError("Elektroninis paštas tuščias");
      setVardoError("Elektroninis paštas tuščias");
      // setPwError("Slaptažodžiai nesutampa")
      setTimeout(() => {
        setPwError()
        setEmailError()
        setVardoError()
      }, 5000);
    } else if ( password === "" && password2 === ""  && name === "") {
      setPwError("Privaloma įvesti slaptažodį");
      setVardoError("Elektroninis paštas tuščias");
      // setPwError("Slaptažodžiai nesutampa")
      setTimeout(() => {
        setPwError()
        setVardoError()
      }, 5000);
    }else if (password === "" && password2 === "") {
      setPwError("Privaloma įvesti slaptažodį");
      // setPwError("Slaptažodžiai nesutampa")
      setTimeout(() => {
        setPwError()
        setVardoError()
      }, 5000);
    }else if (password.length < 6) {
      setPwError("Slaptažodis turi būti ilgesnis nei 6 simboliai");
      // setPwError("Slaptažodžiai nesutampa")
      setTimeout(() => {
        setPwError()
        setVardoError()
      }, 5000);
    }else if (password != password2) {
      setPwError("Slaptažodžiai nesutapa");
      // setPwError("Slaptažodžiai nesutampa")
      setTimeout(() => {
        setPwError()
      }, 5000);
    } else {
      try {
        await register(email, password, name);
        handleClose()
        history.push("/")
      } catch (e) {
        setError("Nepavyko sukurti paskyros");
      }
    }
  };

  const ErrorMessage = ({ message }) => <p className="Error">{message}</p>;

  
  return (
    <Container>
      <Button className="Registracija" onClick={handleShow}>
      Sukurti naują paskyrą
      </Button>

      <Modal  show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registracija</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={registerUser}>
            <Form.Group controlid="formEmail">
              <Form.Label>Elektroninio pašto adresas:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                className="form-control"
                placeholder="Elektroninis paštas"
                ref={(input) => (emailInput = input)}
                required
              />
              {emailError && <p className="Error">{emailError}</p>}
            </Form.Group>
            <Form.Group controlid="formName">
              <Form.Label>Vardas:</Form.Label>
              <Form.Control
                type="name"
                name="name"
                className="form-control"
                placeholder="Vardas"
                ref={(input) => (nameInput = input)}
                required
              />
              {vardoError && <p className="Error">{vardoError}</p>}
            </Form.Group>

            <Form.Group controlid="formPassword1">
              <Form.Label>Slaptažodis:</Form.Label>
              <Form.Control
                type="password"
                name="password"
                className="form-control"
                placeholder="Slaptažodis"
                ref={(input) => (passwordInput = input)}
                required
              />
              {pwError && <p className="Error">{pwError}</p>}
            </Form.Group>
            <Form.Group controlid="formPassword2">
              <Form.Label>Pakartokite slaptažodį:</Form.Label>
              <Form.Control
                type="password"
                name="password2"
                className="form-control"
                placeholder="Slaptažodis"
                ref={(input) => (password2Input = input)}
                required
              />
              {pwError && <p className="Error">{pwError}</p>}
            </Form.Group>
            <Button id="regis" className="Regis" type="submit" onClick={registerUser}>
              Registruotis
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="CloseButton" onClick={handleClose}>
            Uždaryti
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
    
  );
};

export default Register;
