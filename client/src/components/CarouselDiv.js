import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import styled from 'styled-components'
import image1 from '../assets/images/0425171750.jpg'
import image2 from '../assets/images/0711170900a.jpg'
import image3 from '../assets/images/0713171151c.jpg'
import image4 from '../assets/images/0928171903a.jpg'
import image5 from '../assets/images/1111171445b.jpg'
import image6 from '../assets/images/1010171954.jpg'

const Styles = styled.div``

const CarouselDiv = () => (
  <Styles>
    <Carousel>
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
  </Styles>
)

export default CarouselDiv
