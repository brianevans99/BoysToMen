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
    max-height: 200px;
  }
  @media only screen and (max-width: 992px) {
    * {
      text-align: center;
    }
    h2 {
      font-size: 2.4em;
    }
  }
`

const TopCard = () => (
  <Styles>
    <Row>
      <Col lg={6}>
        <div className='d-flex flex-row justify-content-center align-items-center'>
          <h2 className='text-uppercase'>Boys To Men</h2>
          <img
            src={tieLogo}
            alt='Boys To Men | Atlanta Youth Project'
            className='d-lg-none m-2'
            height='100px'
          />
        </div>
        <p className='lead'>
          Investing in our youth and making disciples of Jesus Christ.
        </p>
      </Col>
      <Col lg={1} className='d-flex align-items-center'>
        <img
          src={tieLogo}
          alt='Boys To Men | Atlanta Youth Project'
          className='img-fluid d-none d-lg-block py-2'
          id='logo'
        />
      </Col>
      <Col id='verse' lg={5}>
        <Verse />
      </Col>
    </Row>
  </Styles>
)

export default TopCard
