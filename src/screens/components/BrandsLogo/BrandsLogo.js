import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card } from "@material-ui/core";
import { CardBody } from "reactstrap";

const BrandLogo = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="brand-container" style={{ backgroundColor: "white" }}>
      <Row lg={9} md={9} sm={9} xs={9}>
        <Card className="carded">
          <CardBody>
            <Row lg={9} md={9} sm={9} xs={9}>
              <img
                className="img-fluid"
                alt="service-pic"
                style={{
                  height: "10%",
                  width: "10%",
                  maxHeight: "10%",
                  maxWidth: "10%",
                  padding: "1rem",
                }}
                src={require("../../img/save-nature.png")}
              ></img>
              <img
                className="img-fluid"
                alt="service-pic"
                style={{
                  height: "10%",
                  width: "10%",
                  maxHeight: "10%",
                  maxWidth: "10%",
                  padding: "1rem",
                }}
                src={require("../../img/eco-home.png")}
              ></img>
              <img
                className="img-fluid"
                alt="service-pic"
                style={{
                  height: "10%",
                  width: "10%",
                  maxHeight: "10%",
                  maxWidth: "10%",
                  padding: "1rem",
                }}
                src={require("../../img/ice-cream.png")}
              ></img>
              <img
                className="img-fluid"
                alt="service-pic"
                style={{
                  height: "10%",
                  width: "10%",
                  maxHeight: "10%",
                  maxWidth: "10%",
                  padding: "1rem",
                }}
                src={require("../../img/save-nature.png")}
              ></img>
              <img
                className="img-fluid"
                alt="service-pic"
                style={{
                  height: "10%",
                  width: "10%",
                  maxHeight: "10%",
                  maxWidth: "10%",
                  padding: "1rem",
                }}
                src={require("../../img/champagne.png")}
              ></img>
              <img
                className="img-fluid"
                alt="service-pic"
                style={{
                  height: "10%",
                  width: "10%",
                  maxHeight: "10%",
                  maxWidth: "10%",
                  padding: "1rem",
                }}
                src={require("../../img/flamingo.png")}
              ></img>
              <img
                className="img-fluid"
                alt="service-pic"
                style={{
                  height: "10%",
                  width: "10%",
                  maxHeight: "10%",
                  maxWidth: "10%",
                  padding: "1rem",
                }}
                src={require("../../img/camera.png")}
              ></img>
              <img
                className="img-fluid"
                alt="service-pic"
                style={{
                  height: "10%",
                  width: "10%",
                  maxHeight: "10%",
                  maxWidth: "10%",
                  padding: "1rem",
                }}
                src={require("../../img/menu.png")}
              ></img>
              <img
                className="img-fluid"
                alt="service-pic"
                style={{
                  height: "10%",
                  width: "10%",
                  maxHeight: "10%",
                  maxWidth: "10%",
                  padding: "1rem",
                }}
                src={require("../../img/popsicle.png")}
              ></img>
              <img
                className="img-fluid"
                alt="service-pic"
                style={{
                  height: "10%",
                  width: "10%",
                  maxHeight: "10%",
                  maxWidth: "10%",
                  padding: "1rem",
                }}
                src={require("../../img/ice-cream.png")}
              ></img>
            </Row>
          </CardBody>
        </Card>
      </Row>
    </div>
  );
};

export default BrandLogo;
