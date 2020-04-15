import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
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
`

const NavigationBar = () => (
  <Styles>
    <Navbar expand='lg'>
      <Navbar.Brand href='/'>
        <img src={cross} alt='Boys to Men' height='70' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav>
          <Nav.Item>
            <Nav.Link href='/'>Home</Nav.Link>
          </Nav.Item>
          <Nav.Link href='/afterschool'>Afterschool Program</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)

export default NavigationBar
