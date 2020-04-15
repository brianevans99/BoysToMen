import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div``

const InfoCard = () => (
  <Styles>
    <Container>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Mission Statement</Card.Title>
              <Card.Text>
                ...To guide young men towards a greater dependence on God
                through a personal relationship with Jesus Christ and to
                challenge them academically, physically and socially.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Chris Skinner</Card.Title>
              <Card.Subtitle>770.330.2764</Card.Subtitle>
              <Card.Subtitle>chris.skinner220@gmail.com</Card.Subtitle>
              <Card.Text>P.O. Box 17590</Card.Text>
              <Card.Text>Atlanta, GA 30316</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </Styles>
)

export default InfoCard
