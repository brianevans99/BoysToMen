const axios = require('axios')
let url = 'https://bible-api.com/'
// let url = 'https://jsonplaceholder.typicode.com/todos/1'
let verse = 'john3:16'

const x = axios
  .get(`${url}${verse}`)
  .then((res) => {
    const reference = res.data.reference
    const text = res.data.text
    return {
      reference,
      text,
    }
  })
  .catch((err) => console.log(err))

module.exports = x
