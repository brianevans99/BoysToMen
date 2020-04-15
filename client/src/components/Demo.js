import React, { Fragment } from 'react'
import Request from 'axios-react'

const Demo = () => (
  <Request
    config={{
      method: 'get',
      url: 'https://bible-api.com/philippians4:13',
    }}
    skip={false} // optional
  >
    {({ loading, response, error, refetch, networkStatus }) => (
      <Fragment>
        {networkStatus && <span>{networkStatus}</span>}
        {loading && <span>Loading...</span>}
        {error && <span>{error.response.data}</span>}
        {response && (
          <h3>{`${response.data.text},${response.data.reference}`}</h3>
        )}
        <button onClick={refetch}>Refetch!</button>
      </Fragment>
    )}
  </Request>
)

export default Demo
