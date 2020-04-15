import React, { Fragment } from 'react'
import Request from 'axios-react'
import spinner from '../assets/images/loadingSpinner.gif'

const backupVerse = 'Jesus wept.'
const backupRef = 'John 11:35'

const Verse = () => (
  <Request
    config={{
      method: 'get',
      url: 'https://bible-api.com/philippians4:13',
    }}
    skip={false} // optional
  >
    {({ loading, response, error }) => (
      <Fragment>
        {loading && (
          <span>
            <img src={spinner} height='80px' />
          </span>
        )}
        {error && <span>{`${backupVerse} ~${backupRef}`}</span>}
        {response && (
          <span>{`${response.data.text} ~${response.data.reference}`}</span>
        )}
      </Fragment>
    )}
  </Request>
)

export default Verse
