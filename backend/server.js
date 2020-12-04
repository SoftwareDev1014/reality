const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT
const server = app.listen(PORT, function () {
  console.log('Server is running on PORT:', PORT)
})
const io = require('socket.io')(server, { transports: ['polling'] })
io.on('connection', (socket) => {
  socket.on('pingServer', async (data) => {
    console.log('pingServer', data)
  })
})
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')

app.use(cors())
app.set('trust proxy', true)
app.use(fileUpload({
  createParentPath: true
}))

const { schedule } = require('node-cron')

app.use(bodyParser.json({ limit: '500mb' }))
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true, parameterLimit: 50000 }))
/// /////////////////////////////////////////////////////////////////////////////////////

const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectID

const db_url = process.env.MONGODB_URL

let dbClient = null
async function Db_connection () {
  /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
  dbClient = new MongoClient(db_url, { useUnifiedTopology: true })
  await dbClient.connect()
  var user_router = require('./route/user')
  user_router.set_db_client(dbClient, io)
  var admin_router = require('./route/admin')
  admin_router.set_db_client(dbClient, io)
  var guest_router = require('./route/guest')
  guest_router.set_db_client(dbClient, io)
  app.get('/', async (req, res) => {
    io.emit('test', 'test')
    res.send('Go away')
  })
  app.use('/v1/u/', user_router.middleware, user_router.router)
  app.use('/v1/a/', admin_router.middleware, admin_router.router)
  app.use('/v1/', guest_router.middleware, guest_router.router)
}

Db_connection().then(() => {
  console.log('backend working well')
}).catch(e => {
  console.log('backend error:', e)
})
