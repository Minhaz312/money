import {
  faEnvelopeSquare,
  faMapMarkerAlt,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Fade from 'react-reveal/Fade'
export default function ContactUs() {
  return (
    <div
      className="bg-custom-light-primary mt-5 py-5"
      style={{ height: 'auto', minHeight: '600px' }}
    >
      <Container fluid="md">
        <h3 className="text-center border-bottom py-3 my-3 text-uppercase">
          CONTACT US
        </h3>
        <Row>
          <Col md={6} className="mb-3">
            <Fade left>
              <div
                className="p-3 bg-white border rounded shadow-sm"
                style={{ height: '100%' }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.191233387827!2d90.3943706153878!3d23.74055908459426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b894e42e5373%3A0x4434c59289bd383f!2sInterContinental%20Dhaka%2C%20an%20IHG%20Hotel!5e0!3m2!1sen!2sbd!4v1642091200523!5m2!1sen!2sbd"
                  style={{
                    border: '0',
                    width: '100%',
                    height: '100%',
                    minHeight: '300px',
                    marginBottom: '10px',
                  }}
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
            </Fade>
          </Col>
          <Col md={6} className="mb-3">
            <Fade right>
              <div
                className="px-md-10px py-3 px-5 bg-white border rounded shadow-sm"
                style={{
                  width: '100%',
                  height: '100%',
                  marginBottom: '10px',
                }}
              >
                <div>
                  <h3 className="border-bottom pb-1 mb-1">
                    Titas Money Exchange
                  </h3>{' '}
                </div>
                <div className="my-3">
                  <div className="d-flex w-100 color-primary">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      style={{ fontSize: '25px', marginRight: '10px' }}
                    />
                    <h4 className="fw-bold">Office Address</h4>
                  </div>
                  <div className="mx-5">
                    <p style={{ margin: '0' }}>
                      Hotel Inter Continental (Ex. Sheraton)
                    </p>
                    <p style={{ margin: '0' }}>
                      1 Minto Road, Dhaka-1000 Bangladesh
                    </p>
                  </div>
                </div>
                <div className="my-3">
                  <div className="d-flex w-100 color-primary">
                    <FontAwesomeIcon
                      icon={faEnvelopeSquare}
                      style={{ fontSize: '25px', marginRight: '10px' }}
                    />
                    <h4 className="fw-bold">Email</h4>
                  </div>
                  <div className="mx-5">
                    <p style={{ margin: '0' }}>titasmoneyexchange@gmail.com</p>
                  </div>
                </div>
                <div className="my-3">
                  <div className="d-flex w-100 color-primary">
                    <FontAwesomeIcon
                      icon={faPhoneAlt}
                      style={{ fontSize: '25px', marginRight: '10px' }}
                    />
                    <h4 className="fw-bold">Call Us</h4>
                  </div>
                  <div className="mx-5">
                    <p style={{ margin: '0' }}> Phone: +880-02-48313151</p>
                    <p style={{ margin: '0' }}>
                      {' '}
                      Mobile: +88-01911358480, +88-01768747470
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
