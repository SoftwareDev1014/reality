const express = require('express')
const router = express.Router()
let dbClient = null; let socket_io
const set_db_client = (db_c, io) => {
  dbClient = db_c, socket_io = io
}
const middleware = async (req, res, next) => {
  return next()
}
const userController = require('../Controller/BetfairController')
userController.set_db_client(dbClient)
router.get('/', async (req, res) => {
  res.send('Welcome to hotexch365')
})
router.post('/login', async (req, res) => {
  const userController = require('../Controller/UserController')
  userController.set_db_client(dbClient)
  const result = await userController.login(req.body)
  res.send(result)
})

module.exports = {
  router,
  middleware,
  set_db_client
}
