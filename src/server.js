const express = require('express')
const server = express()



server.get('/', (req, res) => {
    return res.sendFile( __dirname.replace("src", '') + "/jobs-calc/index.html")
})

server.listen(3000, () => console.log('listening on port 3000'))
