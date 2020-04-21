import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Verse from '../components/Verse'
import styled from 'styled-components'
import tieLogo from '../assets/images/tieLogo.png'

const Styles = styled.div`
  h2 {
    font-size: 4em;
    font-family: 'Cormorant Infant', serif;
  }
  #verse {
    padding-top: 16px;
  }
  #logo {
    max-height: 100px;
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
      <Col lg={5}>
        <div className='d-flex flex-column justify-content-around'>
          <h2 className='text-uppercase'>Boys To Men</h2>
          <p className='lead'>
            Guiding teenage boys in DeKalb County to be men of God...
          </p>
        </div>
      </Col>
      <Col lg={1} className='d-flex align-items-center'>
        <img
          src={tieLogo}
          alt='Boys To Men | Atlanta Youth Project'
          className='img-fluid'
          id='logo'
        />
      </Col>
      <Col id='verse' lg={6}>
        <Verse />
      </Col>
    </Row>
  </Styles>
)

export default TopCard
