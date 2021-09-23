import React from 'react'
import {Card, Spinner } from "react-bootstrap";
import useGetAtsiliepimuData from "../hooks/getAtsiliepimuData";
const CountAtsiliepimai = () => {
    const { status, data, isFetching, error } = useGetAtsiliepimuData();
    return (
        <Card controlid="AtsiliepimuKiekis">
      {status === "loading" ? (
        <Spinner size="sm" animation="border" role="status">
          <span className="sr-only">Kraunasi...</span>
        </Spinner>
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <div>
          <h3>Atsiliepimu skaicius</h3>
          <h5>{data.atsiliepimai.length}</h5>
        </div>
      )}
    </Card>
    )
}

export default CountAtsiliepimai
