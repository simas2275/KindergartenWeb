import React from "react";

import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { Card, Form, Col, Row, Spinner } from "react-bootstrap";
import useGetVaikoLankomumoAdmin from "../hooks/getVaikoLankomumoDataAdmin";
const GetVaikoLankomuma = ({userId}) => {
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
            <div  controlid="VaikoLankomumas" key={lankomumas.userId}>
              {/* <Row>
                <Col xs="auto">Pirm</Col>
                <Col xs="auto">Antr</Col>
                <Col xs="auto">Trec</Col>
                <Col xs="auto">Ketv</Col>
                <Col xs="auto">Penkt</Col>
              </Row> */}
              <Row>
              
                <Col xs="auto">
                <Col >Pirm</Col>
                  <BootstrapSwitchButton
                    size="xs"
                    checked={lankomumas.Pirm_Pirmadienis}
                    onlabel="O"
                    offlabel="I"
                    onstyle="outline-success"
                    disabled
                  />
                </Col>
                <Col xs="auto">
                <Col >Antr</Col>
                  <BootstrapSwitchButton
                    size="xs"
                    checked={lankomumas.Pirm_Antradienis}
                    onlabel="O"
                    offlabel="I"
                    onstyle="outline-success"
                    disabled
                  />
                </Col>
                <Col xs="auto">
                <Col >Trec</Col>
                  <BootstrapSwitchButton
                    size="xs"
                    checked={lankomumas.Pirm_Treciadienis}
                    onlabel="O"
                    offlabel="I"
                    onstyle="outline-success"
                    disabled
                  />
                </Col>
                <Col xs="auto">
                <Col >Ketv</Col>
                  <BootstrapSwitchButton
                    size="xs"
                    checked={lankomumas.Pirm_Ketvirtadienis}
                    onlabel="O"
                    offlabel="I"
                    onstyle="outline-success"
                    disabled
                  />
                </Col>
                <Col xs="auto">
                <Col >Penkt</Col>
                  <BootstrapSwitchButton
                    size="xs"
                    checked={lankomumas.Pirm_Penktadienis}
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

export default GetVaikoLankomuma;
