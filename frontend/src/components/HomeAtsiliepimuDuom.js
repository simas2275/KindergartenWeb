import React from "react";
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
} from "react-bootstrap";
import { useAuth } from "../contexts/authContext";
import useGetAtsiliepimuData from "../hooks/getAtsiliepimuData";
const HomeAtsiliepimuDuom = () => {
  const { status, data, isFetching, error } = useGetAtsiliepimuData();
  const {
    currentUser,
    logout,
    updateProfile,
    updateEmail,
    updatePassword,
    isAdmin,
  } = useAuth();

  //   console.log(data);
  //   console.log(isFetching)
  // console.log(data);
  return (
    <div>
      <Container fluid className="AtsiliepimuCon">
        <Row className="AtsiliepimuPav">
          <Col sm={12}>
            <h4>Atsiliepimai</h4>
            <h2>Tėvelių atsiliepimai</h2>
          </Col>
        </Row>
        <Row>
          {status === "loading" ? (
            "Kraunasi..."
          ) : status === "error" ? (
            <span>Error:{error.message}</span>
          ) : (
            data.atsiliepimai.map((atsiliepimai) => {
              // console.log(atsiliepimai.email)
              return (
                <Col
                  key={atsiliepimai.documentId}
                  className="AtsiliepimoTekstas"
                  md={3}
                >
                  {atsiliepimai.atsiliepimas}
                  {!atsiliepimai.name ? (
                    <h5>-{atsiliepimai.email.toUpperCase().split("@")[0]}</h5>
                  ) : (
                    <h5>-{atsiliepimai.name}</h5>
                  )}
                </Col>
              );
            })
          )}
        </Row>
      </Container>
    </div>
  );
};

export default HomeAtsiliepimuDuom;
