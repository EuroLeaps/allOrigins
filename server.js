/*!
 * AllOrigins
 * written by Gabriel Nunes <gabriel@multiverso.me>
 * http://github.com/gnuns
 */

const app = require('./app.js')
const fs = require('fs')
const https = require('https')
const port = process.env.PORT || 1458

const privateKey = fs.readFileSync('/etc/letsencrypt/live/cp.rarium.io/privkey.pem')
const certificate = fs.readFileSync('/etc/letsencrypt/live/cp.rarium.io/fullchain.pem')
const credentials = {key: privateKey, cert: certificate}

console.log(`Starting allOrigins v${global.AO_VERSION}`)
//app.listen(port, () => console.log('Listening on', port))

const server = https.createServer(credentials, app);
server.listen(port, () => console.log('Listening on', port))