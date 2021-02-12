const express = require('express')
const app = express()
const port = 2021

app.get('/', (req, res) => {
  res.send('Halo Dunia!')
})

app.listen(port, () => {
	let log = 'Serverku sedang berjalan pada '
  	console.log(log+ 'http://localhost:'+port)
})