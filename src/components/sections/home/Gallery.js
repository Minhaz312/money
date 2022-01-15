import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Slider from 'react-slick'
import Service from '../../Service'

export default function Gallery() {
  const data = [
    { image: './images/gallery/british-pound.jfif' },
    { image: './images/gallery/uro.jfif' },
    { image: './images/gallery/usd.jfif' },
    { image: './images/gallery/indian-rupee.jfif' },
  ]
  return (
    <div className="mt-5 py-5" style={{ height: 'auto', minHeight: '500px' }}>
      <h3 className="my-3 py-3 border-bottom text-center">GALLERY</h3>
      <Container fluid="md">
        <div>
          <Row>
            {data.map((item, i) => (
              <Col key={i} lg={3} md={3} sm={6}>
                <Service image={item.image} title={null} />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  )
}
