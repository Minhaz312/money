import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Slider from 'react-slick'
import Service from '../../Service'

export default function Gallery() {
  const data = [
    { image: 'service-1.jpg' },
    { image: 'service-2.jpg' },
    { image: 'service-3.jpg' },
    { image: 'service-4.jpg' },
  ]
  return (
    <Container fluid="md">
      <h3 className="my-3 py-3 border-bottom text-center">GALLERY</h3>
      <div>
        <Row>
          {data.map((item, i) => (
            <Col md={3}>
              <Service image={item.image} title={null} />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  )
}
