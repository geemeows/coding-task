import { loginModel, generateToken, logoutModel } from './auth.model'
export const login = payload => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (payload.email !== 'admin@dashboard.com' || payload.password !== 'password') {
        reject(new Error('NotAuthorized'))
      } else {
        const token = generateToken()
        loginModel(payload.email, token)
        resolve('Authorized')
      }
    }, 3000)
  })
}

export const logout = () => {
  logoutModel()
}
