import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
  .card-body {
    min-height: 200px;
  }
  p#info {
    margin-bottom: 0;
    font-weight: bold;
    height: 19px;
  }
  h6#info {
    margin-bottom: 0;
  }
  #mission {
    text-align: justify;
  }
`

const InfoCard = () => (
  <Styles>
    <Row>
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>Mission Statement</Card.Title>
            <Card.Text id='mission'>
              To guide young men towards a greater dependence on God through a
              personal relationship with Jesus Christ and to challenge them
              academically, physically and socially.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
            <Card.Title>Chris Skinner</Card.Title>
            <Card.Subtitle>
              <h6 id='info' className='text-muted'>
                chris.skinner220@gmail.com
              </h6>
            </Card.Subtitle>
            <Card.Text>
              <p id='info' className=''>
                P.O. Box 17590
              </p>
              <p id='info' className=''>
                Atlanta, GA 30316
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Text>
              Our ministry is 100% funded by donors like you. If you've
              benefited from Boys to Men and would like to give back, or you
              like what we're doing and would like to support future work,
              please email Chris to find out how you can help.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Styles>
)

export default InfoCard
