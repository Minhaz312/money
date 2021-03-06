import React from "react";
import Gallery from "./components/sections/home/Gallery";
import About from "./components/sections/home/About";
import Banner from "./components/sections/home/Banner";
import Footer from "./components/sections/home/Footer";
import Services from "./components/sections/home/Services";
import NavigationBar from "./components/sections/NavigationBar";
import ContactUs from "./components/sections/home/ContactUs";
import { Container } from "react-bootstrap";
import { Link } from "react-scroll";

import "./navbar.css";

function App() {
  return (
    <>
      <div name="top">
        <NavigationBar />
      </div>
      <div className="navBar bg-custom-primary px-5 d-flex justify-content-center align-items-center">
        <Container fluid="md">
          <ul>
            <li className="nav-item">
              <Link
                activeClass="active"
                className="test1"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                className="test1"
                to="service-section"
                spy={true}
                smooth={true}
                duration={500}
              >
                SERVICES
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                className="test1"
                to="about-section"
                spy={true}
                smooth={true}
                duration={500}
              >
                ABOUT US
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                className="test1"
                to="gallery-section"
                spy={true}
                smooth={true}
                duration={500}
              >
                GALLERY
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                className="test1"
                to="contact-section"
                spy={true}
                smooth={true}
                duration={500}
              >
                CONTACT US
              </Link>
            </li>
          </ul>
        </Container>
      </div>
      <Banner />
      <div className="test1" name="service-section">
        <Services />
      </div>
      <div name="about-section">
        <About />
      </div>
      <div name="gallery-section">
        <Gallery />
      </div>
      <div name="contact-section">
        <ContactUs />
      </div>
      <Footer />
    </>
  );
}

export default App;
