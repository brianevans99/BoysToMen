import React, { Fragment } from 'react'
import Request from 'axios-react'
import spinner from '../assets/images/loadingSpinner.gif'

const url = 'https://bible-api.com/'
const verseRef = [
  'Genesis1:1',
  'Exodus20:12',
  'Leviticus17:11',
  'Joshua24:15',
  '1Samuel16:7',
  '2Kings+22:1-2',
  'Nehemiah4:14',
  'Job1:8',
  'Psalm81:10',
  'Psalms+103:1-5',
  'Psalms145:8',
  'Psalms145:9',
  'Proverbs12:1',
  'Proverbs16:32',
  'Ecclesiastes5:2',
  'Isaiah+55:10-11',
  'Joel2:12',
  'Haggai1:5',
  'matthew28:19',
  'john+3:16-17',
  'John5:17',
  'John6:35',
  'John8:12',
  'John10:7',
  'John10:11',
  'John11:25',
  'John14:6',
  'John15:5',
  'romans8:28',
  'philippians4:13',
  '1timothy4:12',
  'colossians3:12',
  'ephesians1:3',
  'Revelation22:20',
  'Revelation+19:11-13',
]
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
