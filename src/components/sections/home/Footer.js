import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {
  faFacebook,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <>
      <div className="bg-dark text-white py-5">
        <Container>
          <Row>
            <Col lg={3} md={6} sm={12}>
              <h3 className="text-uppercase">ABOUT US</h3>
              <p>
                We, Titas Money Exchange, located in the heart of Dhaka, are one
                of the leading currency exchange agents in the city & one-stop
                solution for all your foreign exchange needs. Talk to our
                qualified employees and get your problem resolved within no
                time. We offer best deal in money exchange and our policies,
                terms, and conditions are very transparent. We provide fast,
                friendly, and efficient services. Thus, offering you a vast
                array of services under one roof.
              </p>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <h3 className="text-uppercase">OUR SERVICES</h3>
              <ul>
                <li>Buy and Sell US Dollars</li>
                <li>Endorse Encashment</li>
                <li>Money Transfer</li>
                <li>Deal in foreign Currency</li>
              </ul>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <h3 className="text-uppercase">ADDRESS</h3>
              <p>
                Hotel Inter Continental (Ex. Sheraton), 1 Minto Road, Dhaka-1000
                Bangladesh
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.191233387827!2d90.3943706153878!3d23.74055908459426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b894e42e5373%3A0x4434c59289bd383f!2sInterContinental%20Dhaka%2C%20an%20IHG%20Hotel!5e0!3m2!1sen!2sbd!4v1642091200523!5m2!1sen!2sbd"
                style={{
                  border: '0',
                  height: '150PX',
                }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <h3 className="text-uppercase">CONTACT US</h3>
              <p>Phone: +880-02-48313151</p>
              <p> Mobile: +88-01911358480, +88-01768747470</p>
              <p> titasmoneyexchange@gmail.com</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="text-center py-3 bg-dark text-white border-top">
        <p>&copy;copyright 2021. All right reserved</p>
      </div>
    </>
  )
}
