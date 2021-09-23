import React from "react";
import useUsers from "../hooks/userData";

import { Col, Container, Row, Card,Spinner } from "react-bootstrap";
const CountUsers = () => {
        //   console.log(Object.keys(user).length)
  const {data,status,error} = useUsers();
  return (
    <Card controlid="VartotojuKiekis"> 
    {status === "loading" ? (
     <Spinner  size="sm" animation="border" role="status">
     <span className="sr-only">Kraunasi...</span>
   </Spinner>
      
    ) : status === "error" ? (
      <span>Error: {error.message}</span>
    ) : (
    <div><h3>Vartotoju skaicius</h3><h5>{data.length}</h5></div>
    )}
  </Card>
  );
};

export default CountUsers;
