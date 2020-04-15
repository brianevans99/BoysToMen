import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Verse from '../components/Verse'

export class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col lg={6}>
            <h2>Boys To Men</h2>
            <p>Guiding teenage boys in DeKalb County to be men of God...</p>
          </Col>
          <Col lg={6}>
            <Verse />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Home
