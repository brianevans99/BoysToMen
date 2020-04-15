import React, { Fragment } from 'react'
import Request from 'axios-react'
import spinner from '../assets/images/loadingSpinner.gif'

const url = 'https://bible-api.com/'
const verseRef = [
  'philippians4:13',
  '1timothy4:12',
  'john+3:16-17',
  'romans8:28',
  'colossians3:12',
  'ephesians1:3',
  'matthew28:19',
]
const r = Math.floor(Math.random() * verseRef.length)
const backupVerse = 'Jesus wept.'
const backupRef = 'John 11:35'

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
          <span>
            <img src={spinner} height='80px' />
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
