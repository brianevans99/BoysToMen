import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import flyer from '../assets/documents/Boys_To_Men_flier_2019-2020.jpg'
import flyerpdf from '../assets/documents/Boys_To_Men_flier_2019-2020.pdf'

export class Afterschool extends Component {
  render() {
    return (
      <Container>
        <Row className='justify-content-center'>
          <Col>
            <p>
              Click{' '}
              <a href={flyerpdf} target='_blank'>
                here
              </a>{' '}
              to download flyer
            </p>
            <img src={flyer} className='img-fluid' />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Afterschool
