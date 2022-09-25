import { GET_TOKEN, REMOVE_TOKEN } from './types'

const initialState = {
  token: '',
}

const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOKEN:
      return {
        ...state,
        token: action.token,
      }

    case REMOVE_TOKEN:
      return {
        ...state,
        token: '',
      }

    default:
      return state
  }
}
export default tokenReducer
