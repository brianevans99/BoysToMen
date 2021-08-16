import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Carousel from 'react-bootstrap/Carousel'
import styled from 'styled-components'
import images from '../data/images'
import verse from '../data/verse'

const Styles = styled.div`
  .carousel-caption {
    padding: 15px;
    background-color: rgba(0, 0, 0, 0.5);

    @media (max-width: 768px) {
      padding: 2px;
      h5 {
        font-size: small;
      }
    }
  }
`

const CarouselDiv = () => (
  <Styles>
    <Row>
      <Col xs={true}>
        <Carousel fade={true} indicators={false} controls={true}>
          <Carousel.Item>
            <img src={images[0]} className='d-block w-100' alt='Boys to Men' />
            <Carousel.Caption>
              <h5>{verse[0]}</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={images[1]} className='d-block w-100' alt='Boys to Men' />
            <Carousel.Caption>
              <h5>{verse[1]}</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={images[2]} className='d-block w-100' alt='Boys to Men' />
            <Carousel.Caption>
              <h5>{verse[2]}</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={images[3]} className='d-block w-100' alt='Boys to Men' />
            <Carousel.Caption>
              <h5>{verse[3]}</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={images[4]} className='d-block w-100' alt='Boys to Men' />
            <Carousel.Caption>
              <h5>{verse[4]}</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={images[5]} className='d-block w-100' alt='Boys to Men' />
            <Carousel.Caption>
              <h5>{verse[5]}</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={images[6]} className='d-block w-100' alt='Boys to Men' />
            <Carousel.Caption>
              <h5>{verse[6]}</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={images[7]} className='d-block w-100' alt='Boys to Men' />
            <Carousel.Caption>
              <h5>{verse[7]}</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={images[8]} className='d-block w-100' alt='Boys to Men' />
            <Carousel.Caption>
              <h5>{verse[8]}</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={images[9]} className='d-block w-100' alt='Boys to Men' />
            <Carousel.Caption>
              <h5>{verse[9]}</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={images[10]} className='d-block w-100' alt='Boys to Men' />
            <Carousel.Caption>
              <h5>{verse[10]}</h5>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  </Styles>
)

export default CarouselDiv
