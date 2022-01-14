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
              <h3>About Us</h3>
              <p>
                সত্ত্বেও এখানকার শিক্ষার্থীরা একবিংশ শতাব্দীর চ্যালেঞ্জ
                মোকাবেলায় একটি সমন্বিত, স্বয়ংসম্পূর্ণ আধুনিক Digital প্রযুক্তি
                সমৃদ্ধ শিক্ষা প্রতিষ্ঠানের অভাবে পিছিয়ে পড়ছে প্রতিনিয়ত। এর
                বাস্তবতা দেখা যায় প্রতিবছর Medical, BUET ও ঢাকা বিশ্ববিদ্যালয়সহ
              </p>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="#" className="text-light">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light">
                    Admission
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light">
                    Terms & conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light">
                    Privacy & policy
                  </a>
                </li>
              </ul>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <h3>Address</h3>
              <p>
                ২৮ নং আশরাফ আলি রোড, সানরাইজ গ্রামার স্কুল (ভবন-১), পাথরঘাটা,
                চট্টগ্রাম
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.572618374539!2d91.84215951541576!3d22.331997547385768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad274efe99f821%3A0x5b0387951483fc85!2sSunrise%20Grammar%20School!5e0!3m2!1sen!2sbd!4v1638018143818!5m2!1sen!2sbd"
                height="150"
                // style={{ border: "0", width: "100%" }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <h3>Follow Us On</h3>
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ fontSize: '30px', margin: '10px' }}
              />
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ fontSize: '30px', margin: '10px' }}
              />
              <FontAwesomeIcon
                icon={faYoutube}
                style={{ fontSize: '30px', margin: '10px' }}
              />
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
