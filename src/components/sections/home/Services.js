import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Service from "../../Service";

export default function Services() {
  const data = [
    { image: "service-1.jpg", title: "Buy and Sell US Dollars" },
    { image: "service-2.jpg", title: "Endorse Encashment" },
    { image: "service-3.jpg", title: "Money Transfer" },
    { image: "service-4.jpg", title: "Deal in foreign Currency" }
  ];

  return (
    <div className="mt-5 py-5" style={{ height: "auto", minHeight: "600px" }}>
      <Container fluid="md">
        <div className="my-3">
          <h3 className="text-center color-primary fw-bold border-bottom py-3 my-3 text-uppercase">
            Services
          </h3>
          <Row style={{ height: "auto", minHeight: "300px" }}>
            {data.map((item, i) => (
              <Col key={i} lg={3} md={6} sm={6} style={{ height: "auto" }}>
                <Service image={item.image} title={item.title} />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
}
