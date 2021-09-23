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
  Alert,
} from "react-bootstrap";
import useAtsiliepimus from "../hooks/atsiliepimuData";
import useDeleteKomentara from "../hooks/deleteKomentara";
import { useQueryClient } from "react-query";
const PrivateViewUserAtsiliepimai = () => {
  const { status, data, isFetching, error } = useAtsiliepimus();
  const { mutate } = useDeleteKomentara();
  const queryClient = useQueryClient();
  const toggle = async(documentId) => {
      await mutate(documentId)
    await queryClient.invalidateQueries("Atsiliepimai");
    await queryClient.invalidateQueries("Atsiliepimai");
  }
  return (
    <Col>
      {status === "loading" ? (
        "Kraunasi..."
      ) : status === "error" ? (
        <span>Error:{error.message}</span>
      ) : (
        data.atsiliepimai.map((post,i) => {
          // console.log(data);
          const date1 = new Date(post.time._seconds * 1000);
          const men = date1.getMonth() + 1;
          const metai = date1.getFullYear();
          const diena = date1.getDate();
          const val = date1.getHours();
          const min = (date1.getMinutes() < 10 ? "0" : "") + date1.getMinutes();
          // console.log(`${metai}-${men}-${diena} ${val}:${min}h`)
          return (
            <Row key={i}>
              <Col md={10}>
                <div key={post.atsiliepimas}>
                  <div controlid="ParasytasAtsiliepimas" className="Atsiliepimai">
                    <strong>{`${metai}-${men}-${diena} ${val}:${min}h`}</strong>
                    <p>{post.atsiliepimas}</p>
                  </div>
                </div>
              </Col>
              <Col>
                <Button
                controlid="IstrinimoMygtukas"
                  id={post.documentId}
                  onClick={() => toggle(post.documentId)}
                  variant="outline-dark"
                  size="sm"
                >
                  X
                </Button>
              </Col>
            </Row>
          );
        })
      )}
    </Col>
  );
};

export default PrivateViewUserAtsiliepimai;
