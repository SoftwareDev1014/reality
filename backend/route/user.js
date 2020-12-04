const express = require('express')
const router = express.Router()
let dbClient = null; let socket_io
const set_db_client = (db_c, io) => {
  dbClient = db_c, socket_io = io
}
const middleware = async (req, res, next) => {
  return next()
}
router.get('/', async (req, res) => {
  res.send('Welcome to hotexch365 user')
})
router.post('/logincheck', async (req, res) => {
  const userController = require('../Controller/UserController')
  userController.set_db_client(dbClient)
  const result = await userController.logincheck(req.body)
  res.send(result)
})
module.exports = {
  router,
  middleware,
  set_db_client
}
