import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Carousel from 'react-bootstrap/Carousel'
import styled from 'styled-components'
import image1 from '../assets/images/001.jpg'
import image2 from '../assets/images/002.jpg'
import image3 from '../assets/images/003.jpg'
import image4 from '../assets/images/004.jpg'
import image5 from '../assets/images/005.jpg'
import image6 from '../assets/images/006.jpg'

const Styles = styled.div``

const CarouselDiv = () => (
  <Styles>
    <Row>
      <Col xs={true}>
        <Carousel fade={true} indicators={false} controls={true}>
          <Carousel.Item>
            <img src={image1} className='d-block w-100' alt='first slide' />
          </Carousel.Item>
          <Carousel.Item>
            <img src={image2} className='d-block w-100' alt='second slide' />
          </Carousel.Item>
          <Carousel.Item>
            <img src={image3} className='d-block w-100' alt='third slide' />
          </Carousel.Item>
          <Carousel.Item>
            <img src={image4} className='d-block w-100' alt='fourth slide' />
          </Carousel.Item>
          <Carousel.Item>
            <img src={image5} className='d-block w-100' alt='fifth slide' />
          </Carousel.Item>
          <Carousel.Item>
            <img src={image6} className='d-block w-100' alt='sixth slide' />
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  </Styles>
)

export default CarouselDiv
