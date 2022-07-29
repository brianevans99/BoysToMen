import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import flier from '../assets/documents/Boys_to_Men_flyer_2022-2023-min.jpeg'
import flierpdf from '../assets/documents/Boys_to_Men_flyer_2022-2023.pdf'

export class Afterschool extends Component {
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
              alt='Afterschool Program flier'
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Afterschool
