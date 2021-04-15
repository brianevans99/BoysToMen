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
          {/* <Nav.Item>
            <Nav.Link href='/afterschool'>Afterschool Program</Nav.Link>
          </Nav.Item> */}
          <Nav.Item>
            <Nav.Link href='/summer_camp_2021'>Summer Camp 2021</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='/release_form'>Release Form</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)

export default NavigationBar
