import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import flier from '../assets/documents/Summer_Camp_2022-min.jpeg'
import flierpdf from '../assets/documents/Summer_Camp_2022.pdf'

export class SummerCamp extends Component {
  render() {
    return (
      <Container>
        <Row className='justify-content-center'>
          <Col>
            <p>
              Click{' '}
              <a href={flierpdf} target='_blank' rel='noopener noreferrer'>
                here
              </a>{' '}
              to download flier
            </p>
            <img
              src={flier}
              className='img-fluid'
              alt='Summer Camp 2021 flier'
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default SummerCamp
