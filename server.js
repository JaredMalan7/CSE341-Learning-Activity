//Express Web Server
var express = require('express')
var app = express()
const port = process.env.PORT || 8080

app.use('/', require('./routes'))
app.listen(port, () => {
    console.log(`Sever is running on port ${port}`)
})