import React from "react";
import Posts from "../components/Posts";
import "./CSS/HomePage.scss";
import useInfoPosts from "../hooks/useInfo";
import app from "../firebase";
import img from "../assets/images/img_1.jpg";
import image1 from "../assets/PhotoNav/1.jpeg";
import image2 from "../assets/PhotoNav/2.jpeg";
import image3 from "../assets/PhotoNav/3.jpeg";
import image4 from "../assets/PhotoNav/4.jpeg";
import image5 from "../assets/PhotoNav/5.jpeg";
import image6 from "../assets/PhotoNav/6.jpg";
import blue from "../assets/images/blue.png";
import HomeAtsiliepimuDuom from "../components/HomeAtsiliepimuDuom";
import { useAuth } from "../contexts/authContext";
import { NavLink } from "react-router-dom";
import BottomInfo from "../components/BottomInfo";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";

import Header from "../components/Header";

const HomePage = () => {
  const { status, data, error, isFetching } = useInfoPosts();
  const { currentUser, logout, isAdmin } = useAuth();
  // console.log(currentUser);
  // console.log(data[0].Pavadinimas)
  return (
    <div>
      <Header />
      <Container fluid>
      <div className="jumbotron row mb-auto">
        <Container className=" mt-5">
          <Row>
            <Col lg={4} >
              <div className="block-2 red">
                <span className="wrap-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="60"
                    fill="white"
                    className="bi bi-house"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                    />
                  </svg>
                </span>
                {status === "loading" ? (
                  <Spinner size="sm" animation="border" role="status">
                    <span className="sr-only">Kraunasi...</span>
                  </Spinner>
                ) : status === "error" ? (
                  <h1>Klaida: {error.message}</h1>
                ) : (
                  <>
                    <h2 className="HomePavadinimas">{data[0].Pavadinimas} </h2>
                    <p className="Aprasymas">{data[0].Aprasymas} </p>
                  </>
                )}
              </div>
            </Col>
            <Col lg={4}>
              <div className="block-2 yellow">
                <span className="wrap-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="60"
                    fill="white"
                    className="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                  </svg>
                </span>
                {status === "loading" ? (
                  <Spinner size="sm" animation="border" role="status">
                    <span className="sr-only">Kraunasi...</span>
                  </Spinner>
                ) : status === "error" ? (
                  <h1>Klaida: {error.message}</h1>
                ) : (
                  <>
                    <h2 className="HomePavadinimas">{data[1].Pavadinimas} </h2>
                    <p className="Aprasymas">{data[1].Aprasymas} </p>
                  </>
                )}
              </div>
            </Col>
            <Col lg={4}>
              <div className="block-2 teal">
                <span className="wrap-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="60"
                    fill="white"
                    className="bi bi-gear"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                  </svg>
                </span>
                {status === "loading" ? (
                  <Spinner size="sm" animation="border" role="status">
                    <span className="sr-only">Kraunasi...</span>
                  </Spinner>
                ) : status === "error" ? (
                  <h1>Error: {error.message}</h1>
                ) : (
                  <>
                    <h2 className="HomePavadinimas">{data[2].Pavadinimas} </h2>
                    <p className="Aprasymas">{data[2].Aprasymas} </p>
                  </>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      </Container>
    <Container fluid>
    <Row className="mb-auto">
        <div className="site-section bg-light">
          <Container>
            <Row>
              <Col md={6} className="mb-5 mb-md-0">
                <img src={img} alt="Image" className="img-fluid" />
              </Col>
              <Col md={5} className="ApieAprasymas ml-auto pl-md-5">
                <h3 className="AboutUs">Apie mus</h3>
                <h4 className="text-black">
                  Parodykite vaikams spalvingą gyvenimą
                </h4>
                <br />
                <p>
                  <span>
                    Norime vaikams užtikrinti nuotykių pilną ir gražų rytojų
                    Plačiau galite apie mus paskaityti, paspaudę žemiau esantį
                    mygtuką
                  </span>
                </p>

                <p className="mt-5">
                  <Button variant="warning">
                    <NavLink to="/Apiemus">Daugiau apie mus</NavLink>
                  </Button>
                  {/* <a href="#" className="btn btn-warning py-3 btn-custom-1">
                    Daugiau apie mus
                  </a> */}
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </Row>
    </Container>
      <Container fluid>
        <Row>
          <Col className="photoRow" sm={2}>
            <img src={image1} alt="Image1" className="img-fluid" />
          </Col>
          <Col className="photoRow .d-none .d-sm-block">
            <img src={image2} alt="Image2" className="img-fluid" />
          </Col>
          <Col className="photoRow .d-none .d-sm-block">
            <img src={image3} alt="Image3" className="img-fluid" />
          </Col>
          <Col className="photoRow .d-none .d-sm-block">
            <img src={image4} alt="Image4" className="img-fluid" />
          </Col>
          <Col className="photoRow .d-none .d-sm-block">
            <img src={image5} alt="Image5" className="img-fluid" />
          </Col>
          <Col className="photoRow .d-none .d-sm-block">
            <img src={image6} alt="Image6" className="img-fluid" />
          </Col>
        </Row>
      </Container>
      <Container className="PriemimoCon">
        <Row>
          <Col sm={12}>
            <h2 className="PriemTag text-center">Priėmimas</h2>
          </Col>
        </Row>
        <Row>
          <Col className="Apibudinimas text-center" sm={12}>
            <span>
              Stiprus bendruomenės jausmas mūsų darželyje yra būtinas ir svarbus
              mums visiems. Plėsdami mūsų darželis mes norime tik geriausio mūsų
              klientams
            </span>
          </Col>
        </Row>
        <Row className="TrysMyg text-center">
          <Col className="TrysMygCol" sm={4}>
            <h4 className="PriemH4">Susisiekite su mumis</h4>
            <Button className="TrysButton">
            <NavLink to="/Kontaktai">Susisiekti</NavLink>
            </Button>
          </Col>
          <Col className="TrysMygCol" sm={4}>
          
            <h4 className="PriemH4">Aplankykite mus</h4>
            <Button className="TrysButton">
            <NavLink to="/VizitoRegistravimas">Aplankyti</NavLink>
            </Button>
          </Col>
          <Col className="TrysMygCol" sm={4}>
            <h4 className="PriemH4">Priėmimas</h4>
            <Button className="TrysButton">
            <NavLink to="/Priemimas">Priėmimas</NavLink>
            </Button>
          </Col>
        </Row>
      </Container>

      <HomeAtsiliepimuDuom />
      <BottomInfo />
    </div>
  );
};

export default HomePage;
