import axios from 'axios'

export const userServer = {
  check (account, password) {
    return axios.post('/check', {account: account, password: password})
  }
}
