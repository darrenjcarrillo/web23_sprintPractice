const server = require('./api/server.js')

const PORT = process.env.PORT || 8888

server.listen(PORT, () => {
    console.log(`=== webAPI server on http://localHost:${PORT}`)
})