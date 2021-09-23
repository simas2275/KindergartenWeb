import React from "react";

import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { Card, Form, Col, Row, Spinner } from "react-bootstrap";
import useGetVaikoLankomumoAdmin from "../hooks/getVaikoLankomumoDataAdmin";
const GetVaiko2LankomumaAdmin = ({userId}) => {
// console.log(userId)
  const { status, data, isFetching, error } = useGetVaikoLankomumoAdmin();
  // console.log(data)
  return (
    <div>
      {status === "loading" ? (
        <Spinner size="sm" animation="border" role="status">
          <span className="sr-only">Kraunasi...</span>
        </Spinner>
      ) : status === "error" ? (
        <span>Error:</span>
      ) : (
        data.vaikoDuom.map((lankomumas) => {
          // console.log(lankomumas);
          if(userId === lankomumas.userId){
            return (
            <div key={lankomumas.userId}>

              <Row>
                {" "}
                <Col xs="auto">
                <Col>Pirm</Col>
                  <BootstrapSwitchButton
                    size="xs"
                    checked={lankomumas.Antr_Pirmadienis}
                    onlabel="O"
                    offlabel="I"
                    onstyle="outline-success"
                    disabled
                  />
                </Col>
                <Col xs="auto">
                <Col>Antr</Col>
                  <BootstrapSwitchButton
                    size="xs"
                    checked={lankomumas.Antr_Antradienis}
                    onlabel="O"
                    offlabel="I"
                    onstyle="outline-success"
                    disabled
                  />
                </Col>
                <Col xs="auto">
                <Col>Trec</Col>
                  <BootstrapSwitchButton
                    size="xs"
                    checked={lankomumas.Antr_Treciadienis}
                    onlabel="O"
                    offlabel="I"
                    onstyle="outline-success"
                    disabled
                  />
                </Col>
                <Col xs="auto">
                <Col>Ketv</Col>
                  <BootstrapSwitchButton
                    size="xs"
                    checked={lankomumas.Antr_Ketvirtadienis}
                    onlabel="O"
                    offlabel="I"
                    onstyle="outline-success"
                    disabled
                  />
                </Col>
                <Col xs="auto">
                <Col>Penkt</Col>
                  <BootstrapSwitchButton
                    size="xs"
                    checked={lankomumas.Antr_Penktadienis}
                    onlabel="O"
                    offlabel="I"
                    onstyle="outline-success"
                    disabled
                  />
                </Col>
              </Row>
            </div>
          );
          }
          
        })
      )}
    </div>
  );
};

export default GetVaiko2LankomumaAdmin;