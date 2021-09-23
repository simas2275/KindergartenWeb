import React from "react";
import useUsers from "../hooks/userData";
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
  Spinner
} from "react-bootstrap";

import "./CSS/AdminUsers.scss";
const AdminUsers = () => {
  const { status, data, error, isFetching } = useUsers();

// console.log(data)
// console.log(data.length)
  return (
 
      <div className="ml-2">
        {status === "loading" ? (
         <Spinner className="spineris" size="sm" animation="border" role="status">
         <span className="sr-only">Kraunasi...</span>
       </Spinner>
          
        ) : status === "error" ? (
          <span>Error: {error.message}</span>
        ) : (
          data.map((user, i) => {
            // console.log(data)
            const email = user.split("@");
            
            return <h6 key={email}>{i+1}. {email[0]}</h6>;
            
          })
        )}
      </div>
  );
};

export default AdminUsers;
