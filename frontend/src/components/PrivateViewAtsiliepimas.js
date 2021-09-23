import React from "react";
import { useForm } from "react-hook-form";
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
import { useAuth } from "../contexts/authContext";
import usePostAtsiliepimas from "../hooks/postAtsiliepima";
import PrivateViewUserAtsiliepimai from "./PrivateViewUserAtsiliepimai";
const PrivateViewAtsiliepimas = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  // console.log(errors)
  const { mutate } = usePostAtsiliepimas();
  const {
    currentUser,
    logout,
    updateProfile,
    updateEmail,
    updatePassword,
    isAdmin,
  } = useAuth();

  const paliktiAtsiliepima = async (data) => {
    try {
      await mutate(data);
    } catch (e) {
      console.log(e);
    }
  };

  const ErrorMessage = ({ message }) => <p className="Error">{message}</p>;
  // console.log(data);
  return (
    <Card className="pb-4 pt-4 mt-4">
      <h2 className="text-center pb-4">Atsiliepimų skiltis</h2>
      <Row>
        <Col>
          
          <h4 className="text-center">Parašyti atsiliepimai</h4>
          <PrivateViewUserAtsiliepimai />
        </Col>
        <Col>
          <Form  className="mr-3" onSubmit={handleSubmit(paliktiAtsiliepima)}>
            <h4 className="text-center">Rašyti atsiliepimą</h4>
            <Form.Group controlid="AtsiliepimoTekstas">
              <Form.Label>Palikite atsiliepimą:</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                type="atsiliepimas"
                name="atsiliepimas"
                ref={register({
                  required: "Tuščias laukas negali būti",
                  pattern: {
                    message: "Tuščias laukas negali būti",
                  }
                })}
              />
              {errors?.atsiliepimas && (
                    <ErrorMessage message={errors.atsiliepimas.message} />
                  )}
            </Form.Group>
            <Form.Group controlid="AtsiliepimoVardas">
              <Form.Label>Vardas:</Form.Label>
              <Form.Control
                defaultValue={currentUser.displayName}
                type="name"
                name="name"
                ref={register({
                  required: "Būtinas jūsų vardas",
                  pattern: {
                    message: "Būtinas jūsų vardas",
                  }
                })}
              />
              {errors?.name && (
                    <ErrorMessage message={errors.name.message} />
                  )}
            </Form.Group>
            <Button type="submit">Išsiųsti</Button>
          </Form>
        </Col>
      </Row>
    </Card>
  );
};

export default PrivateViewAtsiliepimas;
