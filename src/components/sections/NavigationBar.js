import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookSquare,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { Container } from 'react-bootstrap'
export default function NavigationBar() {
  return (
    <div>
      <Container fluid="md">
        <div className="px-md-0 px-5 py-3 d-flex justify-content-between align-center px-">
          <div className="fb-linlk">
            <FontAwesomeIcon
              icon={faFacebookSquare}
              style={{ fontSize: '30px', color: '#3B5998' }}
            />
          </div>
          <div className="contact-info">
            <div className="d-flex align-items-center mx-3">
              <FontAwesomeIcon
                icon={faPhoneAlt}
                style={{ fontSize: '30px' }}
                className="color-primary"
              />
              <p className="mt-2">+8801997785142</p>
            </div>
            <div className="d-flex align-items-center mx-3">
              <FontAwesomeIcon
                icon={faWhatsapp}
                onClick={() =>
                  window.location.replace('whatsapp://send/?phone=01997785142')
                }
                style={{ fontSize: '30px', color: 'green' }}
              />
              <p className="mt-2">+8801997785142</p>
            </div>
            <div className="d-flex align-items-center mx-3">
              <img
                src="./envelope-solid.svg"
                style={{ height: '30px', border: '1px solid black' }}
              />
              <p className="mt-2 mx-1">titasmoneyexchange@gmail.com</p>
            </div>
          </div>
        </div>
      </Container>
      <div className="bg-custom-secondary">
        <Container fluid="md">
          <div className="text-left md-text-center">
            <div className="text-center d-inline-block">
              <img src="./images/logo.jpeg" alt="logo" className="logo" />
              <h3>Titas Money Exchange</h3>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
