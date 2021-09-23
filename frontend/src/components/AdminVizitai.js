import React from "react";

import { Card, Form, Col, Row, Spinner, Container } from "react-bootstrap";
import useGetVizitoDuomAdmin from "../hooks/getVizitusAdmin";

import { useQueryClient } from "react-query";
import useUpdateVizita from "../hooks/updateVizita";
import "./CSS/AdminVizitas.scss";
const AdminVizitai = () => {
  const { status, data, isFetching, error } = useGetVizitoDuomAdmin();

  const { mutate } = useUpdateVizita();
  // console.log(data)

  const queryClient = useQueryClient();
  const toggle = async (perziureta, documentId) => {
    await mutate(documentId);

    await queryClient.invalidateQueries("VizitoDuomenys");
    await queryClient.invalidateQueries("VizitoDuomenys");
  };
  return (
    <Container fluid>
      {" "}
      {status == "loading" ? (
        <Spinner size="sm" animation="border" role="status">
        <span className="sr-only">Kraunasi...</span>
      </Spinner>
      ):(<></>)}
      <Row>
        {status === "loading" ? (
          <></>
        ) : status === "error" ? (
          <span>Error:</span>
        ) : (
          data.vizitai.map((vizitas, i) => {
            const timestamp = Math.round(new Date() / 1000) - vizitas.time._seconds;
            const date1 = new Date(vizitas.time._seconds * 1000);
            const men = date1.getMonth() + 1;
            const metai = date1.getFullYear();
            const diena = date1.getDate();
            const val = date1.getHours();
            const min = (date1.getMinutes() < 10 ? "0" : "") + date1.getMinutes();
            return (
              <Col controlid="Vizitai" className="mt-4" key={i} md={4}>
                {vizitas.perziureta === false ? (
                  <div>
                    {timestamp <= 0 ? (
                      <Card className="CardDaugiau" key={i}>
                        <div className="ml-2">
                          <h3 className="text-center">
                            Vizito duomenys
                            <Form.Check
                              type="switch"
                              id={vizitas.documentId}
                              defaultChecked={vizitas.perziureta}
                              onClick={() =>
                                toggle(vizitas.perziureta, vizitas.documentId)
                              }
                            />
                          </h3>

                          <p className="CardDaugiauLaikas">
                            <strong>Vizito laikas: </strong>
                            {i+1}.  {`${metai}-${men}-${diena} ${val}:${min}h`}
                          </p>
                          <p>
                            <strong>Elektronins pastas:</strong>{" "}
                            {vizitas.elPastas}
                          </p>
                          <p>
                            <strong>Tevu Vardas:</strong> {vizitas.vardas}
                          </p>
                          <p>
                            <strong>Tevu Pavarde:</strong> {vizitas.pavarde}
                          </p>
                          <p>
                            <strong>Tevu telefono numeris:</strong>{" "}
                            {vizitas.telNr}
                          </p>
                          <p>
                            <strong>Informacija apie vaika(-us):</strong>{" "}
                            {vizitas.vaikoDuomenys}
                          </p>
                        </div>
                      </Card>
                    ) : (
                      <Card className="CardMaziau" key={i}>
                        <div className="ml-2">
                          <h3 className="text-center">
                            Vizito duomenys
                            <Form.Check
                              type="switch"
                              id={vizitas.documentId}
                              defaultChecked={vizitas.perziureta}
                              onClick={() =>
                                toggle(vizitas.perziureta, vizitas.documentId)
                              }
                            />
                          </h3>
                          <p className="CardMaziauLaikas">
                            <strong>Vizito laikas: </strong>
                            {i+1}.   {`${metai}-${men}-${diena} ${val}:${min}h`}
                          </p>
                          <p>
                            <strong>Elektronins pastas:</strong>{" "}
                            {vizitas.elPastas}
                          </p>
                          <p>
                            <strong>Tevu Vardas:</strong> {vizitas.vardas}
                          </p>
                          <p>
                            <strong>Tevu Pavarde:</strong> {vizitas.pavarde}
                          </p>
                          <p>
                            <strong>Tevu telefono numeris:</strong>{" "}
                            {vizitas.telNr}
                          </p>
                          <p>
                            <strong>Informacija apie vaika(-us):</strong>{" "}
                            {vizitas.vaikoDuomenys}
                          </p>
                        </div>
                      </Card>
                    )}
                  </div>
                ) : (
                  <></>
                )}
              </Col>
            );
          })
        )}
      </Row>
    </Container>
  );
};

export default AdminVizitai;
