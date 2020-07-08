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
            <Card.Title className='text-justify'>
              <h5>
                Boys to Men began as a{' '}
                <strong>
                  <i>wild</i>
                </strong>{' '}
                basketball outreach program in a local church. It was unplanned
                and sprung to life on its own when curious teenagers from the
                neighborhood began showing up to play basketball and spend time
                with friends.
              </h5>
            </Card.Title>
            <Card.Subtitle className='text-muted text-justify'>
              <h6>
                The program was somewhat out of control until the volunteer
                leader of the group brought in some structure by recruiting
                volunteers and creating a weekly Bible study and a monthly meal
                and gospel presentation. Chris Skinner took the reigns of the
                group shortly after its founding and with the help of the
                Atlanta Youth Project, turned the single outreach program into a
                large, full-time ministry reaching young people all around the
                community. After twenty years of basketball, flag football,
                summer camps, in-school Bible studies, field trips, talent shows
                and apartment community outreaches, the ministry has settled
                into offering after school programs in DeKalb County and Douglas
                County, GA reaching middle school boys and guiding them to
                become responsible young men who follow Jesus Christ.
              </h6>
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Styles>
)

export default MiddleCard
