import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookSquare,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { Container } from 'react-bootstrap'
export default function Header() {
  return (
    <div>
      <Container fluid="md">
        <div className="px-md-0 px-5 py-3 d-flex justify-content-between align-center px-">
          <div className="fb-linlk">
            <a href="https://facebook.com" target="_blank">
              <FontAwesomeIcon
                icon={faFacebookSquare}
                style={{ fontSize: '30px', color: '#3B5998' }}
              />
            </a>
          </div>
          <div className="contact-info">
            <div>
              <a
                href="tel:+880-02-48313151"
                className="d-flex align-items-center mx-3"
                style={{ textDecoration: 'none', color: '#000' }}
              >
                <FontAwesomeIcon
                  icon={faPhoneAlt}
                  style={{ fontSize: '30px' }}
                  className="color-primary"
                />
                <p className="mt-2 d-md-none">+880-02-48313151</p>
              </a>
            </div>
            <div>
              <a
                href="https://wa.me/+8801911358480"
                target="_blank"
                className="d-flex align-items-center mx-3"
                style={{ textDecoration: 'none', color: '#000' }}
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  onClick={() =>
                    window.location.replace(
                      'whatsapp://send/?phone=+8801911358480',
                    )
                  }
                  style={{ fontSize: '30px', color: 'green' }}
                />
                <p className="mt-2 d-md-none">+8801911358480</p>
              </a>
            </div>
            <div>
              <a
                href="mailto:titasmoneyexchange@gmail.com"
                target="_blank"
                className="d-flex align-items-center mx-3"
                style={{ textDecoration: 'none', color: '#000' }}
              >
                <img
                  src="./envelope-solid.svg"
                  style={{ height: '30px', border: '1px solid rgb(0,0,0,0.3)' }}
                />
                <p className="mt-2 mx-1 d-md-none">
                  titasmoneyexchange@gmail.com
                </p>
              </a>
            </div>
          </div>
        </div>
      </Container>
      <div className="bg-custom-secondary">
        <Container fluid="md">
          <div className="logo md-text-center">
            <div className="text-center d-inline-block">
              <img src="./images/logo.jpeg" alt="logo" />
              <h3>Titas Money Exchange</h3>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
