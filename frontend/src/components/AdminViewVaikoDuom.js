import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/authContext";
import { Card, Form, Col, Row, Spinner } from "react-bootstrap";
import useGetVaikoDuomAdmin from "../hooks/getVaikoRezDuomAdmin";
import useConfirmVaikoRez from "../hooks/ConfirmVaikoRezAdmin";
import GetVaikoLankomuma from "../components/GetVaikoLankomuma";
import GetVaiko2LankomumaAdmin from "../components/GetVaiko2LankomumaAdmin";
// import GetPirmoVaikoLankPirm from "../components/adminPirmoVaikoLankomumas/GetPirmoVaikoLankPirm"
import "./CSS/AdminViewVaikoDuom.scss";
// import "./CSS/PrivateViewVaikoDuom.scss";

const AdminViewVaikoDuom = () => {
  const { currentUser, logout, updateEmail, updatePassword } = useAuth();
  const { status, data, isFetching } = useGetVaikoDuomAdmin();
  const { mutate } = useConfirmVaikoRez();
  // console.log(data)
  const toggle = async (AdminConfirm, userId) => {
    await mutate(userId);
  };

  return (
    <div>
      <div>
        {status === "loading" ? (
          <Spinner size="sm" animation="border" role="status">
            <span className="sr-only">Kraunasi...</span>
          </Spinner>
        ) : status === "error" ? (
          <span>Error:</span>
        ) : (
          data.vaikoDuom.map((vaikas, i) => {
            // console.log(vaikas)
            const date1 = new Date(vaikas.createTime._seconds * 1000);
            const men = date1.getMonth() + 1;
            const metai = date1.getFullYear();
            const diena = date1.getDate();
            const val = date1.getHours();
            const min =
              (date1.getMinutes() < 10 ? "0" : "") + date1.getMinutes();
            return (
              <Card controlid="TevuVaikuDuom" key={vaikas.userId} className="TevuVaikuDuom">
                {`${metai}-${men}-${diena} ${val}:${min}h`}

                <Row>
                  <Col md={4} lg={3}>
                  <h4>{i+1}. Tevu duomenys </h4>
                    <p key={vaikas.TevuEmail}>
                      <strong>Elektronins pastas:</strong> {vaikas.TevuEmail}
                    </p>
                    <p key={vaikas.TevuVardas}>
                      <strong>Tevu Vardas:</strong> {vaikas.TevuVardas}
                    </p>
                    <p key={vaikas.TevuPavarde}>
                      <strong>Tevu Pavarde:</strong> {vaikas.TevuPavarde}
                    </p>
                    <p key={vaikas.TevuTelNum}>
                      <strong>Tevu telefono numeris:</strong>{" "}
                      {vaikas.TevuTelNum}
                    </p>
                  </Col>

                  <Col md={8} lg={6}>
                    <div>
                      <h4>Vaiku duomenys</h4>
                      <Form.Check
                        type="switch"
                        id={vaikas.userId}
                        defaultChecked={vaikas.AdminConfirm}
                        onClick={() =>
                          toggle(vaikas.AdminConfirm, vaikas.userId)
                        }
                      />
                    </div>
                    <div>
                      <Row>
                        <Col sm={6} lg={6}>
                          <div >
                            <p>
                              <strong>Pirmo Vaiko Vardas:</strong>{" "}
                              {vaikas.VaikoVardas}
                            </p>
                            <p>
                              <strong>Pirmo Vaiko Amzius:</strong>{" "}
                              {vaikas.VaikoAmzius} metai
                            </p>
                            <h4>Lankomumas</h4>
                            <GetVaikoLankomuma  userId={vaikas.userId} />
                            {/* <GetPirmoVaikoLankPirm/> */}
                          </div>
                        </Col>
                        <Col sm={6} lg={6}>
                          {vaikas.AntrasVaikas === true ? (
                            <div>
                              <p>
                                <strong>Antro Vaiko Vardas:</strong>{" "}
                                {vaikas.AntroVaikoVardas}
                              </p>
                              <p>
                                <strong>Antro Vaiko Amzius:</strong>{" "}
                                {vaikas.AntroVaikoAmzius} metai
                              </p>
                              <h4>Lankomumas</h4>
                              <GetVaiko2LankomumaAdmin userId={vaikas.userId} />
                            </div>
                          ) : (
                            <></>
                          )}
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  {vaikas.AntrasVaikas === true ? (
          
                      <Col controlid="VaikoMaistas" className="MaistoKoregavimas"  lg={3}>
                      <h4>Vaiku maisto koregavimas:</h4>{" "}
                      {vaikas.maistoKoregavimas}
                    </Col>
                 
                  ) : (
                 
                      <Col controlid="VaikoMaistas" className="MaistoKoregavimas" lg={3}>
                      <h4>Vaiko maisto koregavimas:</h4>{" "}
                      {vaikas.maistoKoregavimas}
                    </Col>
                   
                  )}
                </Row>
              </Card>
            );
          })
        )}
      </div>
    </div>
  );
};

export default AdminViewVaikoDuom;
