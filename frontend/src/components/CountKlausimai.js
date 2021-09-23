import React from "react";
import { Col, Container, Row, Card, Spinner } from "react-bootstrap";
import useGetKomentaras from "../hooks/getKomentarus";
const CountKlausimai = () => {
  const { status, data, error, isFetching } = useGetKomentaras();
//   console.log(data);
  return (
    <Card controlid="KlausimuKiekis">
      {status === "loading" ? (
        <Spinner size="sm" animation="border" role="status">
          <span className="sr-only">Kraunasi...</span>
        </Spinner>
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <div>
          <h3>Klausimu skaicius</h3>
          <h5>{data.objKlausimai.length}</h5>
        </div>
      )}
    </Card>
  );
};

export default CountKlausimai;
