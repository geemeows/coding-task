import Cookies from 'vue-cookies'

export const generateToken = () => {
  return [...Array(100)].map(i => (~~(Math.random() * 36)).toString(36)).join('')
}
export const loginModel = (email, token) => {
  Cookies.set('email', email)
  Cookies.set('token', token)
}
export const logoutModel = () => {
  Cookies.remove('email')
  Cookies.remove('token')
}
