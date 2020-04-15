import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import CarouselDiv from '../components/CarouselDiv'
import MiddleCard from '../components/MiddleCard'
import InfoCard from '../components/InfoCard'
import TopCard from '../components/TopCard'
import styled from 'styled-components'

const Styles = styled.div``

export class Home extends Component {
  render() {
    return (
      <Styles>
        <Container>
          <TopCard />
          <MiddleCard />
          <CarouselDiv />
          <InfoCard />
        </Container>
      </Styles>
    )
  }
}

export default Home
