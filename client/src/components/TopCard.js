import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Verse from '../components/Verse'
import styled from 'styled-components'

const Styles = styled.div`
  h2 {
    font-size: 4em;
    font-family: 'Cormorant Infant', serif;
  }
  #verse {
    padding-top: 16px;
  }

  @media only screen and (max-width: 992px) {
    * {
      text-align: center;
    }
    h2 {
      font-size: 3em;
    }
  }
`

const TopCard = () => (
  <Styles>
    <Row>
      <Col lg={6}>
        <h2 className='text-uppercase'>Boys To Men</h2>
        <p className='lead'>
          Guiding teenage boys in DeKalb County to be men of God...
        </p>
      </Col>
      <Col id='verse' lg={6}>
        <Verse />
      </Col>
    </Row>
  </Styles>
)

export default TopCard
