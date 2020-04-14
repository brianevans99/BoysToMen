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
          <Col>
            <Card className='text-center' style={{ width: '18rem' }}>
              <Card.Img src={notfound} />
              <Card.Body>
                <Card.Title>404</Card.Title>
                <Card.Subtitle>Page not found</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default NotFound
