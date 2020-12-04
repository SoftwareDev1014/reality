const ObjectId = require('mongodb').ObjectID
const bcrypt = require('bcryptjs')
const model = {
  _id: '',
  info: {
    full_name: '',
    rememberToken: '',
    phone: '',
    country: '',
    city: '',
    street: ''
  },
  auth: {
    login_name: '',
    email: '',
    password: '',
    apiToken: '',
    loginToken: '',
    parent_id: '',
    state: 0, // 0:active,-1:deactive
    level: 0// 0:user,1:admin,2:super master,3:master,-1:demo
  },
  settings: {
    partner_ship: 0,
    parent_partner_ship: 0,
    delay_sec: 0,
    credit_limit: 0,
    loss_limit: 0
  },
  wallet: {
    balance: 0,
    liability: 0,
    profit: 0,
    total_profit: 0,
    commission: 0,
    cash: 0,
    parent_c_up: 0,
    parent_c_down: 0,
    parent_b_up: 0,
    parent_b_down: 0,
    child_c_up: 0,
    child_c_down: 0,
    child_b_up: 0,
    child_b_down: 0,
    total: 0
  },
  created_at: '',
  updated_at: ''
}
let dbClient = null; let socket_io = null
const set_db_client = (db_c, io) => {
  dbClient = db_c
  socket_io = io
}

const createAccount = async (data) => {
  try {
    const db = dbClient.db(process.env.DB_NAME)
    const default_model = JSON.parse(JSON.stringify(model))
    const newAccount = Object.assign(default_model, data)
    newAccount._id = ObjectId().toString()
    newAccount.created_at = new Date().toISOString()
    newAccount.updated_at = new Date().toISOString()
    let user = await db.collection('users').findOne({ 'auth.email': data.auth.email })
    if (user) {
      return {
        state: -2,
        error: 'email was used already'
      }
    }
    user = await db.collection('users').findOne({ 'auth.login_name': data.auth.login_name })
    if (user) {
      return {
        state: -2,
        error: 'username was used already'
      }
    }
    newAccount.auth.password = bcrypt.hashSync(newAccount.auth.password)
    await db.collection('users').save(newAccount)
    return {
      state: 0,
      newAccount
    }
  } catch (e) {
    console.log('create account error', e)
    return {
      state: -1,
      error: e
    }
  }
}

const updateAccount = async (data) => {
  try {
    const db = dbClient.db(process.env.DB_NAME)
    try {
      if (data.auth.password) {
        data.auth.password = bcrypt.hashSync(data.auth.password)
      }
    } catch (e) {

    }
    const user = await db.collection('users').findOne({ _id: data._id })
    const updateAccount = Object.assign(user, data)
    updateAccount.updated_at = new Date().toISOString()
    await db.collection('users').save(updateAccount)
    return {
      state: 0,
      updateAccount
    }
  } catch (e) {
    return {
      state: -1,
      msg: 'Something went wrong, Please try later',
      error: e
    }
  }
}

const resetPassword = async (uid, password) => {
  try {
    const db = dbClient.db(process.env.DB_NAME)
    const user = await db.collection('users').findOne({ _id: uid })
    const isCheck = bcrypt.compareSync(password.old_pass, user.auth.password)
    if (!isCheck) {
      return {
        state: -3,
        msg: 'Does not match email and password.'
      }
    }
    user.auth.password = bcrypt.hashSync(password.new_pass)
    await db.collection('users').save(user)
  } catch (e) {
    return {
      state: -3,
      msg: 'Something went wrong, Please try later',
      e
    }
  }
}

const login = async (data) => {
  const db = dbClient.db(process.env.DB_NAME)
  const password = data.password
  let user = await db.collection('users').findOne({ 'auth.email': data.email })
  if (user === null) {
    user = await db.collection('users').findOne({ 'auth.login_name': data.email })
  }
  if (user === null) {
    return {
      state: -1,
      msg: 'Does not exist your account.'
    }
  }
  const email = user.auth.email
  if (user.auth.state < 0) {
    return {
      state: -2,
      msg: 'Your account has been closed or deleted.'
    }
  }
  const isCheck = bcrypt.compareSync(password, user.auth.password)
  if (!isCheck) {
    return {
      state: -3,
      msg: 'Password is wrong.'
    }
  }
  const apiToken = ObjectId().toString()
  await db.collection('login_history').insertOne({
    uid: user._id,
    apiToken: apiToken,
    created_at: new Date().toISOString()
  })
  await db.collection('users').updateOne({ _id: user._id }, { $set: { 'auth.apiToken': apiToken } })
  user = await db.collection('users').findOne({ 'auth.email': email }, { _id: user._id })
  return {
    state: 0,
    msg: 'good',
    data: user
  }
}
const logincheck = async (data) => {
  const db = dbClient.db(process.env.DB_NAME)
  let user = await db.collection('users').findOne({ _id: data.uid })
  if (user === null) {
    return {
      state: -1,
      msg: 'Does not exist your account.',
      data
    }
  }
  const email = user.auth.email
  if (user.auth.state < 0) {
    return {
      state: -2,
      msg: 'Your account has been closed or deleted.'
    }
  }
  const tokenCheck = await db.collection('login_history').findOne({ apiToken: data.apiToken })
  if (!tokenCheck._id) {
    return {
      state: -3,
      msg: 'Token sent wrong way.'
    }
  }
  user = await db.collection('users').findOne({ 'auth.email': email }, { _id: user._id })
  return {
    state: 0,
    msg: 'good',
    data: user
  }
}
const readUsers = async ({ user_level, my_users, selected_user_id, user_id }) => {
  let users = []
  try {
    const db = dbClient.db(process.env.DB_NAME)
    const user = await db.collection('users').findOne({ _id: user_id })
    if (!user._id) {
      return []
    }
    let match = { 'auth.level': { $ne: 1 } }
    if (user_level != '') {
      match = Object.assign(match, { 'auth.level': parseInt(user_level) })
    }
    /* if (user.auth.level==1){
            users = await db.collection('users').aggregate([
                {$match:match}
            ]).toArray()
        } */
    let uid = user_id
    if (selected_user_id != 'none') uid = selected_user_id
    if (my_users) {
      match = Object.assign(match, { 'auth.parent_id': uid })
      users = await db.collection('users').aggregate([
        { $match: match }
      ]).toArray()
    } else {
      users = await getChildUsers(uid, user_level)
    }
    return users
  } catch (e) {
    console.log(e)
  }
  return {
    users
  }
}
const getChildUsers = async (user_id, user_level) => {
  let user_count = 0
  const db = dbClient.db(process.env.DB_NAME)
  let users = []
  const superadmins = await db.collection('users').find({ 'auth.parent_id': user_id }).toArray()
  user_count = superadmins.length
  if (user_count == 0) return []
  users = users.concat(superadmins)
  // console.log('superadmins',user_id,user_level,users)
  for (const superadmin of superadmins) {
    const masters = await db.collection('users').find({ 'auth.parent_id': superadmin._id }).toArray()
    users = users.concat(masters)
    for (const master of masters) {
      const players = await db.collection('users').find({ 'auth.parent_id': master._id }).toArray()
      users = users.concat(players)
    }
  }
  if (user_level == null) { return users } else { return users.filter(x => x.auth.level == user_level) }
}
const deposit = async (depositData) => {
  let result = {
    state: 0,
    result: {},
    msg: 'Your chips moved to your user success fully.'
  }
  try {
    const parent_id = depositData.parent_id; const children_id = depositData.children_id
    const amount = depositData.amount; const remark = depositData.remark; let type; let p_narration; let c_narration
    const db = dbClient.db(process.env.DB_NAME)
    const parent = await db.collection('users').findOne({ _id: parent_id })
    const children = await db.collection('users').findOne({ _id: children_id })
    const StatementController = require('./StatementController')
    if (!parent || !children) { return { state: -1, msg: 'Does not exist user data' } }
    if (amount == 0) { return { state: -2, msg: 'Please feed chips amount' } } else if (amount > 0)type = 'deposit'
    else if (amount < 0)type = 'withdraw'
    p_narration = `you have updated ${children.auth.login_name}'s balance.`
    c_narration = `${parent.auth.login_name} have updated your's balance.`
    StatementController.set_db_client(dbClient)
    const p_s_result = await StatementController.insertOne(parent_id, -amount, remark, p_narration, type, parent.wallet.total, depositData)
    const c_s_result = await StatementController.insertOne(children_id, amount, remark, c_narration, type, children.wallet.total, depositData)
    if (p_s_result.state < 0 || c_s_result.state < 0) {
      return {
        state: -3,
        msg: 'Unable to done this action right now,' +
                ' Sorry but please try' +
                ' later.',
        p_s_result,
        c_s_result
      }
    }
    const p_updateData = { 'wallet.balance': -amount, 'wallet.total': -amount }
    const c_updateData = { 'wallet.balance': amount, 'wallet.total': amount, 'wallet.deposit': amount }
    const p_uw_result = UpdateUserWallet(parent_id, p_updateData, depositData, 'deposit')
    const c_uw_result = UpdateUserWallet(children_id, c_updateData, depositData, 'deposit')
    if (p_uw_result.state < 0 || c_uw_result.state < 0) {
      return {
        state: -4,
        msg: 'Unable to done this action right now,' +
                ' Sorry but please try' +
                ' later.',
        p_uw_result,
        c_uw_result
      }
    }
    socket_io.emit(`user_alert_${parent_id}`, {
      state: 0, type: 'deposit', title: 'Deposit', msg: 'Chips moved to your user successfully.'
    })
    socket_io.emit(`user_alert_${parent_id}`, {
      state: 0, type: 'deposit', title: 'Deposit', msg: 'You got chips from your blocker.'
    })
  } catch (e) {
    console.log(e)
    result = {
      state: -100,
      error: e,
      msg: 'Something went wrong'
    }
  }
  return result
}
const systemDeposit = async (depositData) => {
  let result = {
    state: 0,
    result: {},
    msg: 'Deposited Successfully'
  }
  try {
    const uid = depositData.uid; let total_balance; const amount = depositData.amount; const remark = depositData.remark; const type = 'deposit'; const narration = 'System Deposit'
    const db = dbClient.db(process.env.DB_NAME)
    const user = await db.collection('users').findOne({ _id: uid })
    const StatementController = require('./StatementController')
    if (!user) { return { state: -1, msg: 'Does not exist user data' } }
    total_balance = user.wallet.total
    StatementController.set_db_client(dbClient)
    const s_result = await StatementController.insertOne(uid, amount, remark, narration, type, total_balance, depositData)
    if (s_result.state < 0) {
      return {
        state: -1,
        msg: 'Unable to done this action right now, Sorry but please try' +
                ' later.',
        result: s_result
      }
    }
    const updateData = { 'wallet.balance': amount, 'wallet.total': amount, 'wallet.deposit': amount }
    const uw_result = UpdateUserWallet(uid, updateData, depositData, 'admin deposit')
    if (uw_result.state < 0) {
      return {
        state: -2,
        msg: 'Unable to done this action right now, Sorry but please try' +
                ' later.',
        result: s_result
      }
    }
    socket_io.emit(`user_alert_${uid}`, {
      state: 0,
      type: 'system_deposit',
      title: 'Deposit',
      msg: 'Deposited Successfully.'
    })
  } catch (e) {
    result = {
      state: -100,
      error: e,
      msg: 'Something went wrong'
    }
  }
  return result
}

const UpdateUserWallet = async (uid, amount, tbody, remark) => {
  let result = { state: 0, msg: 'Updated user wallet success fully' }
  try {
    const db = dbClient.db(process.env.DB_NAME)
    const query = { _id: uid }
    const user1 = await db.collection('users')
      .findOne(query)
    await db.collection('users').updateOne(query, { $inc: amount })
    const user2 = await db.collection('users')
      .findOne(query)
    const wallet_history = {
      _id: ObjectId().toString(),
      uid,
      wallet1: user1.wallet,
      wallet2: user2.wallet,
      amount: JSON.stringify(amount),
      remark,
      tbody,
      created_at: new Date().toISOString()
    }
    await db.collection('wallet_history').insertOne(wallet_history)
    socket_io.emit(`user_alert_${uid}`, {
      state: 0,
      type: 'wallet_history',
      msg: 'Your wallet updated.',
      user: user2
    })
  } catch (e) {
    console.log('update wallet', e)
    result = { state: -100, msg: 'Something went wrong', error: e }
  }
  return result
}

const PlacedBet = (betData) => {
  const defaultData = {
    _id: ObjectId().toString(),
    uid: '',
    stake: 0,
    odd: 0,
    selection_id: '',
    market_id: '',
    matched_status: 'unmatched', // matched
    status: 'ACTIVE'
  }
  const newBetData = Object.assign(JSON.parse(JSON.stringify(defaultData)), betData)

  return {
    state: 0,
    msg: 'Placed your bet successfully.'
  }
}
module.exports = {
  model,
  set_db_client,
  createAccount,
  updateAccount,
  resetPassword,
  login,
  readUsers,
  logincheck,
  deposit,
  systemDeposit,
  PlacedBet
}
