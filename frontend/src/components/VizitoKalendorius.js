import React, { useState } from "react";
import Calendar from "react-calendar";
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
  NavLink,
  Image,
  Nav,
  Alert,
} from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import "react-calendar/dist/Calendar.css";
import "./CSS/VizitoKalendorius.scss";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
const VizitoKalendorius = () => {
  const defaultValues = {
    DatePicker: new Date(),
  };
  const { register, handleSubmit, watch, errors, control } = useForm({
    defaultValues,
  });
  // const { Controller } = useController();

  // const kalendorius = async (data) =>{
  //     try {
  //         console.log(data)
  //     } catch (error) {

  //     }
  // }

  // const [data, setDate] = useState(new Date());

  const [startDate, setStartDate] = useState(new Date());
  
  const [value, onChange] = useState(new Date());
  const asd = [value];
  // console.log(asd);

  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };
  const sub = (data) => {
    const asdd = moment(data.date).format();
    var d = data.DatePicker
    // var date = moment(data).format("YYYY-MM-DD")
    console.log(d);
    let sec = Math.floor(data.DatePicker / 1000)
    console.log(sec)
  };
  let handleColor = time => {
    return time.getHours() > 8 && time.getHours() < 18 ? "text-success" : "text-error";
  };
  return (
    <div>
      <Row className="conImg">
        <Col className="AplankymoColum" md={{ span: 4, offset: 6 }}>
          <div>
          <text>Darzelio aplankymas</text>
          <h2>Visada laukiame jusu</h2>
          <p>Norite aplankyti musu darzeli?</p>
          </div>


            <Form onSubmit={handleSubmit(sub)}>
              <Form.Group controlid="formData">
              <Controller
                control={control}
                name="DatePicker"
                render={(props) => ( 
                  <DatePicker
                    defaultValue={props}
                    className="input"
                    placeholderText="Pasirinkite data"
                    onChange={(e) => props.onChange(e)}
                    selected={props.value}
                    timeFormat="p"
                    filterDate={isWeekday}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={30}
                    dateFormat="MM/dd/yyyy"
                    timeClassName={handleColor}
                    className="form-control"
                  />
                )}
              />
              </Form.Group>
              <Button type="submit" >Registruotis</Button>
            </Form>

{/* 

            <Form onSubmit={handleSubmit(sub)}>
              <Form.Label>Vizito registravimas</Form.Label>
              <Form.Row>
              <Controller
                control={control}
                name="DatePicker"
                render={(props) => (
                  <DatePicker
                    defaultValue={props}
                    className="input"
                    placeholderText="Pasirinkite data"
                    onChange={(e) => props.onChange(e)}
                    selected={props.value}
                    timeFormat="p"
                    filterDate={isWeekday}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={30}
                    dateFormat="MM/dd/yyyy"
                    timeClassName={handleColor}
                  />
                )}
              />
              </Form.Row>
              <Button type="submit" >Registruotis</Button>
            </Form>

             */}

        </Col>
      </Row>
    </div>
  );
};

export default VizitoKalendorius;
