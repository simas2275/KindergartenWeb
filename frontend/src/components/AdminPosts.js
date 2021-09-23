import React from "react";
import useInfoPosts from "../hooks/useInfo";
import useUpdateInfo from "../hooks/updateInfoData";
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

import { useForm } from "react-hook-form";
const AdminPosts = () => {
  const { status, data, error, isFetching } = useInfoPosts();
  const { register, handleSubmit, watch, errors, getValues } = useForm();
  const { mutate } = useUpdateInfo();

  const atnaujinti = async (data) => {
    // console.log(documentId);
    console.log(data);
    // await mutate(data, documentId);
  };

  return (
    <div>
      {/* <Card>
        {status === "loading" ? (
          <Spinner size="sm" animation="border" role="status">
            <span className="sr-only">Kraunasi...</span>
          </Spinner>
        ) : status === "error" ? (
          <h1>Error: {error.message}</h1>
        ) : (
          data.map((post) => {
            return (
              <div key={post.Pavadinimas}>
                <h3 className="Pavadinimas">{post.Pavadinimas} </h3>
                <text className="Aprasymas">{post.Aprasymas} </text>
              </div>
            );
          })-
        )}
      </Card> */}

      <Card>
        {status === "loading" ? (
          <Spinner size="sm" animation="border" role="status">
            <span className="sr-only">Kraunasi...</span>
          </Spinner>
        ) : status === "error" ? (
          <h1>Error: {error.message}</h1>
        ) : (
          data.map((post) => {
            // console.log(post.documentId)
            return (
              <div key={post.documentId}>
                <Col>
                  <Form onSubmit={handleSubmit(atnaujinti)}>
                    <Form.Group>
                      <h3 className="Pavadinimas">Pavadinimas:</h3>
                      <Form.Control
                        type="Pavadinimas"
                        name="Pavadinimas"
                        ref={register()}
                        defaultValue={post.Pavadinimas}
                      />
                    </Form.Group>
                    <Form.Group>
                      <h5 className="Aprasymas">Aprasymas:</h5>
                      <Form.Control
                        type="Aprasymas"
                        name="Aprasymas"
                        ref={register()}
                        defaultValue={post.Aprasymas}
                      />
                    </Form.Group>
                    <Button
                      type="submit"
                      id={post.documentId}
                    >
                      Atnaujinti
                    </Button>
                  </Form>
                </Col>
              </div>
            );
          })
        )}
      </Card>

      {/* <Card>
        <Form onSubmit={handleSubmit(atnaujinti)} controlid="InfoKoregavimas">
          <Form.Group controlid="formPavadinimas">
            <Form.Control
              type="Pavadinimas"
              name="Pavadinimas"
              placeholder="Pavadinimas"
              ref={register()}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlid="formAprasymas">
            <Form.Control
              type="Aprasymas"
              name="Aprasymas"
              placeholder="Aprasymas"
              ref={register()}
            ></Form.Control>
          </Form.Group>
        </Form>
      </Card> */}
    </div>
  );
};

export default AdminPosts;
