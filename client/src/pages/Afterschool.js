import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import flyer from '../assets/documents/Boys_To_Men_flier_2019-2020.jpg'
import flyerpdf from '../assets/documents/Boys_To_Men_flier_2019-2020.pdf'

export class Afterschool extends Component {
  render() {
    return (
      <Container fluid>
        <Row className='justify-content-center'>
          <Col>
            <p>
              Click{' '}
              <a href={flyerpdf} target='_blank' rel='noopener noreferrer'>
                here
              </a>{' '}
              to download flyer
            </p>
            <img
              src={flyer}
              className='img-fluid'
              alt='Afterschool Program Flyer'
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Afterschool
