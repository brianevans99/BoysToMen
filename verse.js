let url = 'https://bible-api.com/'
let verseRef = [
  'philippians4:13',
  '1timothy4:12',
  'john+3:16-17',
  'romans8:28',
  'colossians3:12',
  'ephesians1:3',
  'matthew28:19',
]
let r = Math.floor(Math.random() * verseRef.length)

axios
  .get(`${url}${verseRef[r]}`)
  .then((res) => {
    setTimeout(function () {
      showVerse(res)
    }, 10)
  })
  .catch((err) => console.log(err))

function showVerse(res) {
  document.getElementById('verse').innerHTML = `
    <span class="text-muted">
    <h6>"${res.data.text}"</h6>
    <p>~${res.data.reference}</p></span>
    `
}
