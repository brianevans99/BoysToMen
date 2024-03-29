import React from 'react'
import { Nav, Navbar, Button } from 'react-bootstrap'
import styled from 'styled-components'
import cross from '../assets/images/cross_navbar.png'

const Styles = styled.div`
  .navbar {
    background-color: #fff;
  }
  .navbar-brand,
  .navbar-nav .nav-link {
    &:hover {
      color: #000;
    }
  }

  @media only screen and (max-width: 992px) {
    * {
      text-align: center;
    }
  }
`

const NavigationBar = () => (
  <Styles>
    <Navbar expand='lg'>
      <Navbar.Brand href='/'>
        <img src={cross} alt='Boys to Men' height='50' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav>
          <Nav.Item>
            <Nav.Link href='/'>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='/summer_camp'>Summer Camp</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='/afterschool'>Afterschool Program</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='/release_form'>Release Form</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Button
              variant='primary'
              size='md'
              href='https://www.paypal.com/donate?hosted_button_id=HVVFTG6XJ27US'
              target='_blank'
            >
              Donate
            </Button>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)

export default NavigationBar
