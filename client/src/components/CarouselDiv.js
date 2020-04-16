import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Carousel from 'react-bootstrap/Carousel'
import styled from 'styled-components'
import images from '../data/images'

const Styles = styled.div``

const CarouselDiv = () => (
  <Styles>
    <Row>
      <Col xs={true}>
        <Carousel fade={true} indicators={false} controls={true}>
          <Carousel.Item>
            <img src={images[0]} className='d-block w-100' alt='first slide' />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={images.image2}
              className='d-block w-100'
              alt='second slide'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={images.image3}
              className='d-block w-100'
              alt='third slide'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={images.image4}
              className='d-block w-100'
              alt='fourth slide'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={images.image5}
              className='d-block w-100'
              alt='fifth slide'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={images.image6}
              className='d-block w-100'
              alt='sixth slide'
            />
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  </Styles>
)

export default CarouselDiv
