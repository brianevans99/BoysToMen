const axios = require('axios')
const config = require('config')
const esvapi = config.get('esvapi')

axios({
  method: 'get',
  url: 'https://api.esv.org/v3/passage/text/?q=John+11:35',
  headers: {
    Authorization: esvapi,
  },
  params: {
    'include-verse-numbers': 'false',
    'include-copyright': 'true',
  },
}).then(function (response) {
  console.log(response.data.passages)
})
