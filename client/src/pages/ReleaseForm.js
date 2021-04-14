import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import flier from '../assets/documents/AYP_Release_Form_2021-min.jpg'
import flierpdf from '../assets/documents/AYP_Release_Form_2021.pdf'

export class ReleaseForm extends Component {
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
              to download form
            </p>
            <img
              src={flier}
              className='img-fluid'
              alt='AYP Release Form 2021'
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ReleaseForm
