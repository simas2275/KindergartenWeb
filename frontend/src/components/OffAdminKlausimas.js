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
  Modal,
  Alert,
  Spinner,
} from "react-bootstrap";
import useGetOffKlausimas from "../hooks/getOffKlausimas";
import "./CSS/OffAdminKomentarai.scss";
import { useQueryClient } from "react-query";
import useConfirmKlausima from "../hooks/ConfirmKlausimoPerziura";
const OffAdminKlausimas = () => {
  const { status, data, error, isFetching } = useGetOffKlausimas();

  const { mutate } = useConfirmKlausima();
  // console.log(data)
  const queryClient = useQueryClient();

  const toggle = async (perziureta, anonymousEmail) => {
    await mutate(anonymousEmail);
    await queryClient.invalidateQueries("Klausimai");
    
    await queryClient.invalidateQueries("Klausimai");
    await queryClient.invalidateQueries("OffKlausimai");
  };

  return (
    <div >
      {status === "loading" ? (
        <Spinner  size="sm" animation="border" role="status">
        <span className="sr-only">Kraunasi...</span>
      </Spinner>
      ) : status === "error" ? (
        <span>Klaida {error.message}</span>
      ) : (
        data.objKlausimai.map((offKlausimas, i) => {
          return (
            <div className="TRUE" key={offKlausimas.anonymousEmail}>
              {offKlausimas.perziureta === true ? (
                <div>
                  <Row>
                    <Col>
                      <strong>
                        {offKlausimas.anonymousEmail}
                        <small>
                          {" "}
                          {/* {`${metai}-${men}-${diena} ${val}:${min}h`}{" "} */}
                        </small>
                        <svg
                          xmlns="http:www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-check-all"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
                        </svg>
                      </strong>
                    </Col>
                    <Col>
                      <Form.Check
                    className="jungtukas"
                    type="switch"
                    id={offKlausimas.anonymousEmail}
                    defaultChecked={offKlausimas.perziureta}
                    onClick={() =>
                      toggle(
                        offKlausimas.perziureta,
                        offKlausimas.anonymousEmail
                      )
                    }
                  />
                    </Col>
                  </Row>
                  <div>
                    {offKlausimas.klausimas}
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          );
        })
      )}
    </div>
  );
};

export default OffAdminKlausimas;
