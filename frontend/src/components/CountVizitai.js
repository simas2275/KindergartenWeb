import React from 'react'
import {Card, Spinner } from "react-bootstrap";


import useGetVizitoDuomAdmin from "../hooks/getVizitusAdmin";
const CountVizitai = () => {
    const { status, data, isFetching, error } = useGetVizitoDuomAdmin();
    return (
        <Card controlid="VizituKiekis">
      {status === "loading" ? (
        <Spinner size="sm" animation="border" role="status">
          <span className="sr-only">Kraunasi...</span>
        </Spinner>
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <div>
          <h3>Vizitu skaicius</h3>
          <h5>{data.vizitai.length}</h5>
        </div>
      )}
    </Card>
    )
}

export default CountVizitai
