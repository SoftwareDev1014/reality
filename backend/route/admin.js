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
  res.send('Welcome to hotexch365 admin')
})
router.post('/users', async (req, res) => {
  const userController = require('../Controller/UserController')
  userController.set_db_client(dbClient)
  const users = await userController.readUsers(req.body)
  let selected_user = null
  if (req.body.selected_user_id != 'none') {
    const db = dbClient.db(process.env.DB_NAME)
    selected_user = await db.collection('users').findOne({ _id: req.body.selected_user_id })
  }
  res.send({ state: 0, users, user_model: userController.model, selected_user })
})
router.post('/user', async (req, res) => {
  const db = dbClient.db(process.env.DB_NAME)
  const user = await db.collection('users').findOne({ _id: req.body.uid })
  res.send({ state: 0, user })
})
router.post('/createAccount', async (req, res) => {
  const userController = require('../Controller/UserController')
  userController.set_db_client(dbClient)
  const result = await userController.createAccount(req.body)
  res.send(result)
})
module.exports = {
  router,
  middleware,
  set_db_client
}
