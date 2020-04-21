import React, { Fragment } from 'react'
import Request from 'axios-react'
import spinner from '../assets/images/loadingSpinner.gif'
import verseRef from '../data/verseRef'

const baseUrl = 'https://api.esv.org/v3/passage/text/?q='
const apikey = process.env.REACT_APP_API_KEY
const r = Math.floor(Math.random() * verseRef.length)
const backupVerse = 'I can do all things through Christ, who strengthens me.'
const backupRef = 'Philippians 4:13'

const Verse = () => (
  <Request
    config={{
      method: 'get',
      url: `${baseUrl}${verseRef[r]}`,
      headers: {
        Authorization: apikey,
      },
      params: {
        'include-passage-references': false,
        'include-verse-numbers': false,
        'include-first-verse-numbers': false,
        'include-headings': false,
        'include-footnotes': false,
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
