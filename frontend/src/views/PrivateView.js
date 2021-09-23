import React, { createRef, useState } from "react";
import Posts from "../components/Posts";
import useUpdateUserName from "../hooks/updateUserData";
import PrivateViewVaikoDuom from "../components/PrivateViewVaikoDuom";
import { Link, NavLink, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import BottomInfo from "../components/BottomInfo";

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
import useGetVaikoDuom from "../hooks/getVaikoRezDuom";
import PrivateViewAtsiliepimas from "../components/PrivateViewAtsiliepimas";
import { useForm } from "react-hook-form";
import "./CSS/PrivateView.scss";
import Header from "../components/Header";
const PrivateView = () => {
  // const { status, data, isFetching } = usePosts();

  const {
    currentUser,
    logout,
    updateProfile,
    updateEmail,
    updatePassword,
    isAdmin,
  } = useAuth();
  const { status, data, isFetching } = useGetVaikoDuom();
  const { register, handleSubmit, watch, errors } = useForm();
  const [isAlert, setAlert] = useState();
  // console.log(currentUser);
  let emailInput = createRef();
  let passwordInput = createRef();
  let password2Input = createRef();
  let userNameInput = createRef();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // console.log(currentUser);

  const { mutate } = useUpdateUserName();

  const updateNewEmail = async (event) => {
    event.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;
    const password2 = password2Input.value;
    const userName = userNameInput.value;

    if (password !== password2) {
      return setError("Slaptažodžiai nesutampa");
    }

    const promises = [];
    setLoading(true);
    setError("");

    console.log(userName);
    if (email !== currentUser.email) {
      promises.push(updateEmail(email));
    }
    if (password) {
      promises.push(updatePassword(password));
    }
    if (userName) {
    }

    Promise.all(promises)
      .then(() => {
        history.push("/paskyra");
      })
      .catch(() => {
        setError("Neišėjo atnaujinti paskyros");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const userName = userNameInput.value;
  const updateName = async (data) => {
    if (data.userName) {
      updateProfile(data.userName);

      console.log(data);
      try {
        await mutate(data);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Būtina įvesti duomenis");
    }
  };
  return (
    <div> 
       <Header />
      <PrivateViewVaikoDuom />
      <Card>
        {currentUser.displayName === null ? (
          <div>
            {!!isAdmin ? (
              <></>
            ) : (
              <Col className="mt-4">
                <Form onSubmit={handleSubmit(updateName)}>
                  <Form.Group id="userName">
                    <Alert variant="warning">
                      Atnaujinkite savo duomenis įvesdami savo vardą
                    </Alert>
                    <Form.Label className="VaroFormosLabel">Vardas</Form.Label>

                    <Form.Control
                      className="VardoForma"
                      type="userName"
                      name="userName"
                      ref={register()}
                    />
                  </Form.Group>
                  <Button type="submit">Siųsti</Button>
                </Form>
              </Col>
            )}
          </div>
        ) : (
          <></>
        )}

        <Card.Body >
          <h2 className="text-center ">Atnaujinti duomenis</h2>
          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={updateNewEmail}>
            <Form.Group id="email">
              <Form.Label><strong>El. pašto adresas</strong></Form.Label>
              <Form.Control
                type="email"
                ref={(input) => (emailInput = input)}
                required
                defaultValue={currentUser.email}
              />
            </Form.Group>
            {currentUser.displayName === null ? (
              <div>
                {!!isAdmin ? (
                  <></>
                ) : (
                  <></>
                )}
              </div>
            ) : (
              <></>
            )}

            <Form.Group id="password">
              <Form.Label><strong>Slaptažodis</strong></Form.Label>
              <Form.Control
                type="password"
                name="password"
                ref={(input) => (passwordInput = input)}
                placeholder="Palikite tuščią langą, jeigu nenorite keisti slaptažodžio"
              />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label><strong>Pakartoti slaptažodį</strong></Form.Label>
              <Form.Control
                type="password"
                name="password2"
                ref={(input) => (password2Input = input)}
                placeholder="Palikite tuščią langą, jeigu nenorite keisti slaptažodžio"
              />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Atnaujinti
            </Button>
          </Form>
        </Card.Body>
      </Card>
       {!isAdmin && (<PrivateViewAtsiliepimas />)}       
      

      {/* <AddPost /> */}
      <BottomInfo/>
    </div>
  );
};

export default PrivateView;
