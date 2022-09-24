import { GET_TOKEN, REMOVE_TOKEN } from './types'
export const getToken = (token) => {
  return {
    type: GET_TOKEN,
    token: token,
  }
}
export const removeToken = () => {
  return {
    type: REMOVE_TOKEN,
  }
}
