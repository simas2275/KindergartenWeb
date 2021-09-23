import React from "react";
import { useAuth } from "../contexts/authContext";
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
  OverlayTrigger,
  Tooltip,
  Spinner,
} from "react-bootstrap";
import useGetVaikoDuom from "../hooks/getVaikoRezDuom";
import useAddVaikoMaistoData from "../hooks/updateVaikoMaistaUser";
import { useForm } from "react-hook-form";
import Pirmo_VaikoLankomumoPirm from "../components/userVaikoLankomumas/Pirmo_VaikoLankomumoPirm";
import Pirmo_VaikoLankomumoAntr from "../components/userVaikoLankomumas/Pirmo_VaikoLankomumoAntr";
import Pirmo_VaikoLankomumoTrec from "../components/userVaikoLankomumas/Pirmo_VaikoLankomumoTrec";
import Pirmo_VaikoLankomumoKetv from "../components/userVaikoLankomumas/Pirmo_VaikoLankomumoKetv";
import Pirmo_VaikoLankomumoPenkt from "../components/userVaikoLankomumas/Pirmo_VaikoLankomumoPenkt";

import Antro_VaikoLankomumoPirm from "../components/userAntroVaikoLankomumas/Antro_VaikoLankomumoPirm";
import Antro_VaikoLankomumoAntr from "../components/userAntroVaikoLankomumas/Antro_VaikoLankomumoAntr";
import Antro_VaikoLankomumoTrec from "../components/userAntroVaikoLankomumas/Antro_VaikoLankomumoTrec";
import Antro_VaikoLankomumoKetv from "../components/userAntroVaikoLankomumas/Antro_VaikoLankomumoKetv";
import Antro_VaikoLankomumoPenkt from "../components/userAntroVaikoLankomumas/Antro_VaikoLankomumoPenkt";

import "./CSS/PrivateViewVaikoDuom.scss";

const PrivateViewVaikoDuom = () => {
  const { currentUser, logout, updateEmail, updatePassword } = useAuth();
  const { register, handleSubmit, watch, errors } = useForm();
  const { status, data, isFetching } = useGetVaikoDuom();
  const { mutate } = useAddVaikoMaistoData();
  // if {currentUser.uid != }

  const koreguotiMaista = async (data, res) => {
    try {
      await mutate(data);
      // console.log(data);
    } catch (error) {}
  };

  return (
    <div>
      {data === null ? (
        <></>
      ) : (
        <div>
          {status === "loading" ? (
            <Spinner size="lg" animation="border" role="status">
            <span className="sr-only">Kraunasi...</span>
          </Spinner>
          ) : status === "error" ? (
            <span>Error:</span>
          ) : (
            data.vaikoDuom.map((vaikas) => {
              // console.log(data);
              return (
                <Card controlid="VaikoDuomenys" key={vaikas.userId}>
                  <Card.Body>
                    <Row>
                      <Col >
                        
                          <h2 className="text-center mb-4">
                            <strong>Profilis</strong>
                          </h2>
                          <Row className="VaikoDuomenys">
                            <Col md={4} lg={3}>
                              <Row>
                                <h3>Tėvų duomenys:</h3>
                              </Row>
                              <div>
                                <p>
                                  <strong>Elektronins paštas:</strong>{" "}
                                  {currentUser.email}
                                </p>
                                <p>
                                  <strong>Vardas:</strong>{" "}
                                  {vaikas.TevuVardas}
                                </p>
                                <p>
                                  <strong>Pavardė:</strong>{" "}
                                  {vaikas.TevuPavarde}
                                </p>
                                <p>
                                  <strong>Telefono numeris:</strong>{" "}
                                  {vaikas.TevuTelNum}
                                </p>
                              </div>
                            </Col>

                            <Col md={8} lg={6}>
                              <div>
                                {vaikas.AdminConfirm === false ? (
                                  <h3>
                                    Vaikų duomenys: {" "}
                                    <OverlayTrigger
                                      placement="bottom"
                                      overlay={
                                        <Tooltip id="button-tooltip-2">
                                          Vaikas dar nepriimtas į darželį
                                        </Tooltip>
                                      }
                                    >
                                      {({ ref, ...triggerHandler }) => (
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="28"
                                          height="28"
                                          fill="red"
                                          className="bi bi-x-circle"
                                          viewBox="0 0 16 16"
                                          ref={ref}
                                          {...triggerHandler}
                                        >
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                      )}
                                    </OverlayTrigger>
                                  </h3>
                                ) : (
                                  <h4>
                                    Vaikų duomenys:{" "}
                                    <OverlayTrigger
                                      placement="bottom"
                                      overlay={
                                        <Tooltip id="button-tooltip-2">
                                          Vaikas priimtas į darželį
                                        </Tooltip>
                                      }
                                    >
                                      {({ ref, ...triggerHandler }) => (
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="28"
                                          height="28"
                                          fill="green"
                                          className="bi bi-check-circle"
                                          viewBox="0 0 16 16"
                                          ref={ref}
                                          {...triggerHandler}
                                        >
                                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                          <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                        </svg>
                                      )}
                                    </OverlayTrigger>
                                  </h4>
                                )}
                                <Row>
                                  <Col sm={6} lg={6}>
                                    <div>
                                      <p>
                                        <strong>Pirmo Vaiko Vardas:</strong>{" "}
                                        {vaikas.VaikoVardas}
                                      </p>
                                      <p>
                                        <strong>Pirmo Vaiko Amžius:</strong>{" "}
                                        {vaikas.VaikoAmzius} metai
                                      </p>
                                    </div>

                                    {vaikas.AdminConfirm === true ? (
                                      <div>
                                        <h4 className="MaistoKoregavimas">Lankomumas</h4>
                                        <Row>
                                          <Col xs="auto">
                                            <Pirmo_VaikoLankomumoPirm />
                                          </Col>
                                          <Col xs="auto">
                                            <Pirmo_VaikoLankomumoAntr />
                                          </Col>
                                          <Col xs="auto">
                                            <Pirmo_VaikoLankomumoTrec />
                                          </Col>
                                          <Col xs="auto">
                                            <Pirmo_VaikoLankomumoKetv />
                                          </Col>
                                          <Col xs="auto">
                                            <Pirmo_VaikoLankomumoPenkt />
                                          </Col>
                                        </Row>
                                      </div>
                                    ) : (
                                      <></>
                                    )}
                                  </Col>
                                  <Col sm={6} lg={6}>
                                    {vaikas.AntrasVaikas === true ? (
                                      <div>
                                        <p>
                                          <strong>Antro Vaiko Vardas:</strong>{" "}
                                          {vaikas.AntroVaikoVardas}
                                        </p>
                                        <p>
                                          <strong>Antro Vaiko Amžius:</strong>{" "}
                                          {vaikas.AntroVaikoAmzius} metai
                                        </p>

                                        {vaikas.AdminConfirm === true ? (
                                          <div>
                                            <h4 className="mt-4">Lankomumas</h4>
                                            <Row>
                                              <Col xs="auto" >
                                                <Antro_VaikoLankomumoPirm />
                                              </Col>
                                              <Col xs="auto" >
                                                <Antro_VaikoLankomumoAntr />
                                              </Col>
                                              <Col xs="auto" >
                                                <Antro_VaikoLankomumoTrec />
                                              </Col>
                                              <Col xs="auto" >
                                                <Antro_VaikoLankomumoKetv />
                                              </Col>
                                              <Col xs="auto" >
                                                <Antro_VaikoLankomumoPenkt />
                                              </Col>
                                            </Row>
                                          </div>
                                        ) : (
                                          <></>
                                        )}
                                      </div>
                                    ) : (
                                      <></>
                                    )}
                                  </Col>
                                </Row>
                              </div>
                            </Col>

                            {vaikas.AdminConfirm === false ? (
                              <></>
                            ) : (
                              <Col controlid="PatvirtintasVaikas" lg={3}>
                                <Form
                                  onSubmit={handleSubmit(koreguotiMaista)}
                                  controlid="MaistoKoregavimas"
                                >
                                  {vaikas.AntrasVaikas === true ? (
                                      <h4 className="MaistoKoregavimas">Galite koreguokite vaikų maistą:</h4>
                                  ) : (
                                      <h4 className="MaistoKoregavimas">Galite koreguokite vaiko maistą:</h4>
                                  )}
                                  <Form.Control
                                    as="textarea"
                                    rows={5}
                                    type="maistoKoregavimas"
                                    name="maistoKoregavimas"
                                    defaultValue={vaikas.maistoKoregavimas}
                                    ref={register()}
                                  />
                                  <Button className="mt-2" type="submit">Išsaugoti</Button>
                                </Form>
                              </Col>
                            )}
                          </Row>
                        
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};

export default PrivateViewVaikoDuom;
