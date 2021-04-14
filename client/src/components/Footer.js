import React from 'react'
import Card from 'react-bootstrap/Card'
import styles from 'styled-components'

const Styles = styles.div`
.card {
    margin-top: 20px;
}
`

const Footer = () => (
  <Styles>
    <Card>
      <Card.Footer className='d-flex justify-content-center text-muted'>
        <h5>Copyright 2021 | Boys To Men</h5>
      </Card.Footer>
    </Card>
  </Styles>
)

export default Footer
