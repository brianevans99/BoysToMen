import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import notfound from '../assets/images/notfound.png'

export class NotFound extends Component {
  render() {
    return (
      <Container>
        <Row className='justify-content-center'>
          <Col xs={3} />
          <Col xs={6}>
            <Card border='danger' style={{}}>
              <Card.Img src={notfound} />
              <Card.Body className='text-center'>
                <Card.Title>404</Card.Title>
                <Card.Subtitle>Page not found</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={3} />
        </Row>
      </Container>
    )
  }
}

export default NotFound
