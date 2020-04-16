import React, { Fragment } from 'react'
import Request from 'axios-react'
import spinner from '../assets/images/loadingSpinner.gif'
import verseRef from '../data/verseRef'

const url = 'https://bible-api.com/'

const r = Math.floor(Math.random() * verseRef.length)
const backupVerse = 'I can do all things through Christ, who strengthens me.'
const backupRef = 'Philippians 4:13'

const Verse = () => (
  <Request
    config={{
      method: 'get',
      url: `${url}${verseRef[r]}`,
    }}
    skip={false} // optional
  >
    {({ loading, response, error }) => (
      <Fragment>
        {loading && (
          <span className='d-flex justify-content-center'>
            <img src={spinner} height='80px' alt='loading' />
          </span>
        )}
        {error && <span>{`${backupVerse} ~${backupRef}`}</span>}
        {response && (
          <div className='text-muted'>
            <h6>{`${response.data.text}`}</h6>
            <p>{`~${response.data.reference}`}</p>
          </div>
        )}
      </Fragment>
    )}
  </Request>
)

export default Verse
