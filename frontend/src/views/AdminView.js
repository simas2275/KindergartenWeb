import React from "react";

import Navv from "../components/Nav";

import AdminUsers from "../components/AdminUsers";
import AdminPosts from "../components/AdminPosts";
import AdminKomentarai from "../components/AdminKomentarai";
import AdminViewVaikoDuom from "../components/AdminViewVaikoDuom";
import AdminVizitai from "../components/AdminVizitai";
import OffAdminKlausimas from "../components/OffAdminKlausimas";
import CountKlausimai from "../components/CountKlausimai"
import CountUsers from "../components/CountUsers"
import CountVaikoDuom from "../components/CountVaikoDuom"
import CountAtsiliepimai from "../components/CountAtsiliepimai"
import CountVizitai from "../components/CountVizitai"
import { useForm } from "react-hook-form";

import BottomInfo from "../components/BottomInfo";
import { Col, Container, Row, Card } from "react-bootstrap";

const AdminView = () => {
  return (
    <div>
      <Container fluid>
        <Navv />
        <Row className="text-center mb-4 mt-4">
          <Col className="mb-4" md={4} lg={3}><CountUsers/></Col>
          
          <Col className="mb-4" md={4} lg={2}><CountVaikoDuom/></Col>
          <Col className="mb-4" md={4} lg={2}><CountKlausimai/></Col>
          <Col className="mb-4" md={6} lg={2}><CountAtsiliepimai/></Col>
          <Col className="mb-4" md={6} lg={3}><CountVizitai/></Col>
        </Row>
        <Row>
          <Col md={2}>
            <h2 className="text-center mb-4 mt-4">Vartotojai</h2>
            <Card>

            <AdminUsers />
            </Card>
          </Col>

          <Col md={6}>
            <h2 className="text-center mb-4 mt-4">Klausimai</h2>
            <Card ><AdminKomentarai /></Card>
          </Col>

          <Col md={4}>
            <h2 className="text-center mb-4 mt-4">Atsakyti klausimai</h2>
            <Card><OffAdminKlausimas /></Card>
          </Col>

          {/* <Col>
            <h2 className="text-center mb-4 mt-4">Informacija</h2>
            <AdminPosts />
          </Col> */}
        </Row>
        <Row>
          <h3 className="text-center mb-4 mt-4">Klientai su vaikais</h3>
          <AdminViewVaikoDuom />
        </Row>

        <Row className="mb-4 mt-4">
          <h2 className="text-center mb-4">Darzelio vizitai</h2>
          <AdminVizitai/>
         
        </Row>
      </Container>
      <BottomInfo />
    </div>
  );
};

export default AdminView;
