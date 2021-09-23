import React from 'react'
import useGetVaikoDuomAdmin from "../hooks/getVaikoRezDuomAdmin";
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
const CountVaikoDuom = () => {
    
  const { status, data, error, } = useGetVaikoDuomAdmin();
    return (
        <Card controlid="KlientuKiekis">
    {status === "loading" ? (
     <Spinner  size="sm" animation="border" role="status">
   </Spinner>
      
    ) : status === "error" ? (
      <span>Error: {error.message}</span>
    ) : (
    <div><h3>Klientu skaicius</h3><h5>{data.vaikoDuom.length}</h5></div>
    )}
  </Card>
    )
}

export default CountVaikoDuom
