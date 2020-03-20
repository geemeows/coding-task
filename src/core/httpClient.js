import axios from 'axios'

export const serverHttp = axios.create({
  baseURL: 'https://randomuser.me'
})
