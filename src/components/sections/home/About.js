import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Fade from 'react-reveal/Fade'
export default function About() {
  return (
    <div
      className="bg-custom-light-primary p-3"
      style={{ height: 'auto', minHeight: '600px' }}
    >
      <Container fluid="md">
        <Row>
          <Col md={6}>
            <Fade left>
              <div>
                <img
                  src="./images/about/about.jpeg"
                  alt="about"
                  className="about-image"
                />
              </div>
            </Fade>
          </Col>
          <Col md={6} className="my-3">
            <Fade right>
              <div>
                <h3 className="text-center mb-3 pb-3 border-bottom text-uppercase">
                  ABOUT US
                </h3>
                <p className="about-us">
                  We, Titas Money Exchange, located in the heart of Dhaka, are
                  one of the leading currency exchange agents in the city &
                  one-stop solution for all your foreign exchange needs. Talk to
                  our qualified employees and get your problem resolved within
                  no time. We offer best deal in money exchange and our
                  policies, terms, and conditions are very transparent. We
                  provide fast, friendly, and efficient services. Thus, offering
                  you a vast array of services under one roof.
                </p>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
