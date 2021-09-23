import React, { createRef, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import { useForm } from "react-hook-form";
import "./CSS/Login.scss";

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
  NavLink,
  Image,
  Nav,
  Alert,
} from "react-bootstrap";
import ResetPassword from "./ResetPassword";
import Register from "./Register";

import firebase from "firebase/app";
const auth = firebase.auth();

const Login = () => {
  const [error, setError] = useState(null);
  const { login, sendPasswordReset, currentUser } = useAuth();
  const { register, handleSubmit, watch, errors } = useForm();
  const history = useHistory();

  // const { signInWithGoogle } = useAuth();

  const loginUser = async (data) => {
    try {
      await login(data.email, data.password);
    } catch (e) {
      setError("Nepavyko prisijungti");
      setTimeout(() => {
        setError()
      }, 3500);
     
    }

    // console.log(data);
    console.log(errors);
  };
  const signInWithGoogle = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  const signInWithFacebook = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(provider);
    // provider.setCustomParameters({
    //   'display': 'popup'
    // });
  };

  const ErrorMessage = ({ message }) => <p className="Error">{message}</p>;

  useEffect(() => {
    if (currentUser) {
      history.push("/");
    }
  }, [currentUser]);

  return (
    <Container id="kontikas">
      <Row className="RowTop">
        <Col md={6} className="Head">
          <h1 className="LogoName">
            <a href="/">Mazieji lazeriukai</a>
          </h1>
          <h5>Prisijunkite, kad galetumėte naudotis visomis galimybėmis</h5>
        </Col>
        <Col md={6}>
          <Card>
            {error && <Alert controlid="Klaidos pranesimas" variant="danger">{error}</Alert>}
            <Card.Body>
              <Form onSubmit={handleSubmit(loginUser)}>
                <Form.Group controlid="formEmail">
                  <Form.Control
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Elektroninis paštas"
                    ref={register({
                      required: "Būtinas el. Pašto adresas",
                      pattern: {
                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                        message: "Įveskite galiojantį el. Pašto adresą",
                      },
                    })}
                  />
                  {errors?.email && (
                    <ErrorMessage message={errors.email.message} />
                  )}
                </Form.Group>
                <Form.Group controlid="formPassword">
                  <Form.Control
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Slaptažodis "
                    ref={register({
                      required: "Reikalingas slaptažodis",
                      pattern: {
                        // value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,10}$/,
                        message:
                          "Įveskite teisingą slaptažodį, kuris būtų ilgesnis už 7 simbolius, turėtų vieną didžiąją ir mažąją raide",
                      },
                    })}
                  />
                  {errors?.password && (
                    <ErrorMessage message={errors.password.message} />
                  )}
                </Form.Group>
                <Form.Group className="text-center">
                  <Button
                    className="LogIN"
                    name="login"
                    id="login"
                    type="submit"
                    block
                  >
                    Prisijungti
                  </Button>
                </Form.Group>
              </Form>
              <Row className="text-center">
                <ResetPassword />
              </Row>
              <Card.Text className="text-center">
                <Button className="Google" onClick={signInWithGoogle}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-google"
                    viewBox="20 20"
                  >
                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                  </svg>
                  Prisijungti su Google
                </Button>
                {/* <Button onClick={signInWithFacebook}>Facebook</Button> */}
                <hr />
                <Register />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
