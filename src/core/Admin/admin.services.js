import { serverHttp } from '../httpClient'
export const apiRequest = params => {
  return serverHttp.get('/api', {
    params
  })
}
