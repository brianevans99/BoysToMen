import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
  h4 {
    text-align: justify;
    text-justify: inter-character;
  }
`

const MiddleCard = () => (
  <Styles>
    <Row>
      <Col xs={true}>
        <Card>
          <Card.Body>
            <Card.Title>
              <h4>
                Boys to Men was founded in 2000. Our work is with middle school
                and high school aged boys in Central DeKalb County.
              </h4>
            </Card.Title>
            <Card.Subtitle className='text-muted'>
              <h6>
                We operate under the Atlanta Youth Project, a non-denominational
                Christian youth organization.
              </h6>
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Styles>
)

export default MiddleCard
