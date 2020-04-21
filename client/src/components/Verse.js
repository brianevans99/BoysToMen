import React, { Fragment } from 'react'
import Request from 'axios-react'
import spinner from '../assets/images/loadingSpinner.gif'
import verseRef from '../data/verseRef'

// const url = 'https://bible-api.com/'
const baseUrl = 'https://api.esv.org/v3/passage/text/?q='

const r = Math.floor(Math.random() * verseRef.length)
const backupVerse = 'I can do all things through Christ, who strengthens me.'
const backupRef = 'Philippians 4:13'

const Verse = () => (
  <Request
    config={{
      method: 'get',
      url: `${baseUrl}${verseRef[r]}`,
      headers: {
        Authorization: '9c33d2c8646f6e5b0af69fd4f62d4230a1bbd0c4',
      },
      params: {
        'include-passage-references': false,
        'include-verse-numbers': false,
        'include-first-verse-numbers': false,
        'include-headings': false,
      },
    }}
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
            <h6>{`${response.data.passages}`}</h6>
            <p>{`~${response.data.query}`}</p>
          </div>
        )}
      </Fragment>
    )}
  </Request>
)

export default Verse
