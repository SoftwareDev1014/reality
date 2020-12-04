export default {
  user: {
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
      loginToken: ''
    },
    wallet: {
      balance: 0,
      liability: 0,
      profit: 0,
      commission: 0,
      c_up: 0,
      c_down: 0,
      cash: 0,
      b_up: 0,
      b_down: 0,
      total: 0
    }
  },
  statement: {
    _id: '',
    balance_amount: 0,
    credit: 0,
    debit: 0,
    total_balance: 0,
    narration: '',
    remark: '',
    tbody: {},
    created_at: ''
  }
}
