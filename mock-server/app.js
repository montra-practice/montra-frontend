const express = require('express')
const apiMocker = require('connect-api-mocker')

const port = 9001
const app = express()

app.use('/api', apiMocker('mock-api'))

console.log(`Mock API Server is up and running at: http://localhost:${port}`)
app.listen(port)
