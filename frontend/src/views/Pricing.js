import React from "react";
import "./CSS/Pricing.scss";
import { useForm } from "react-hook-form";
import useUsers from "../hooks/userData";
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
  Figure,
  Table,
} from "react-bootstrap";
import Header from "../components/Header";
import BottomInfo from "../components/BottomInfo";
const Pricing = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  // console.log(errors);

  return (
    <div>
       <Header />
      <Container className="KainorascioPav">
        <Row>
          <h1>Darželio kainoraštis</h1>
        </Row>
      </Container>
      <Container className="KainorascioLentele">
        <Row>
          <h2>Darželio 2021-2022 metų kainoraštis</h2>
          <h6>
           Nėra jokio stojimo mokesčio, reikia pasirinkti kaip norite, jog vaikas lankytų darželį ir sumokėti atitinkamą kainą, kurią galite matyti žemiau lentelėje.
          
          </h6>
        </Row>
        <Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th></th>
                <th>Su maitinimu</th>
                <th>Be maitinimo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Prižiūrint visą diena</td>
                <td>20eur</td>
                <td>17eur</td>
              </tr>
              <tr>
                <td>Prižiūrint pusą dienos</td>
                <td>13eur</td>
                <td>10eur</td>
              </tr>
              
            </tbody>
          </Table>
        </Row>
       
      </Container>
      <BottomInfo/>
    </div>
  );
};

export default Pricing;
