import React, { useState, useEffect } from "react";
import useGetKomentaras from "../hooks/getKomentarus";
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
  Modal,
  Alert,
  Spinner,
} from "react-bootstrap";
import useConfirmKlausima from "../hooks/ConfirmKlausimoPerziura";
import "./CSS/AdminKomentarai.scss";
import { useQuery, useQueryClient } from "react-query";
// import OffAdminKlausimas from "../components/OffAdminKlausimas";
const AdminKomentarai = () => {
  const { mutate } = useConfirmKlausima();
  const { status, data, error, isFetching } = useGetKomentaras();

  const queryClient = useQueryClient();

  const toggle = async (perziureta, anonymousEmail) => {
    await mutate(anonymousEmail);
    
    await queryClient.invalidateQueries("Klausimai");
    await queryClient.invalidateQueries("Klausimai");
    await queryClient.invalidateQueries("OffKlausimai");
    
  };
  return (
    <div>
      {status === "loading" ? (
        <Spinner  size="sm" animation="border" role="status">
        <span className="sr-only">Kraunasi...</span>
      </Spinner>
      ) : status === "error" ? (
        <span>Klaida: {error.message}</span>
      ) : (
        data.objKlausimai.map((objKlausimai, i) => {
          console.log(objKlausimai);
          const date1 = new Date(objKlausimai.createTime._seconds * 1000);
          const men = date1.getMonth() + 1;
          const metai = date1.getFullYear();
          const diena = date1.getDate();
          const val = date1.getHours();
          const min = (date1.getMinutes() < 10 ? "0" : "") + date1.getMinutes();
          return (
            <div  key={objKlausimai.anonymousEmail}>
              {objKlausimai.perziureta === true ? (
                <></>
              ) : (
                <div controlid="KlausimoMatymas" className="KlausimoBendras">
                  <Row>
                    <Col>
                      <strong>
                        {objKlausimai.anonymousEmail}
                        <small>
                          {" "}
                          {`${metai}-${men}-${diena} ${val}:${min}h`}
                        </small>
                      </strong>
                    </Col>
                    <Col>
                      <Form.Check
                        type="switch"
                        id={objKlausimai.anonymousEmail}
                        defaultChecked={objKlausimai.perziureta}
                        onClick={() =>
                          toggle(
                            objKlausimai.perziureta,
                            objKlausimai.anonymousEmail
                          )
                        }
                      />
                    </Col>
                    
                  </Row>

                  <div>
                    {objKlausimai.klausimas}
                  </div>
                </div>
              )}
            </div>
          );
        })
      )}
    </div>
  );
};

export default AdminKomentarai;
