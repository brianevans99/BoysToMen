import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Verse from '../components/Verse'
import styled from 'styled-components'
import tieLogo from '../assets/images/tieLogo.png'
import newLogo from '../assets/images/BTM_2021_logo.webp'

const Styles = styled.div`
  h2 {
    font-size: 4em;
    font-family: 'Cormorant Infant', serif;
  }
  #verse {
    padding: 16px 0px;
  }
  #logo {
    max-height: 150px;
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
      <Col lg={6} className='d-flex justify-content-center'>
        <img
          src={newLogo}
          alt='Boys To Men | Atlanta Youth Project'
          className='img-fluid py-2'
          id="logo"
        />
      </Col>
      <Col lg={6} className='d-flex justify-content-center align-items-center'>
        <div className='text-muted' id="verse"><Verse /></div>
      </Col>
    </Row>
  </Styles>
)

export default TopCard
