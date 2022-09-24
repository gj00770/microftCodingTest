import { GET_TOKEN, REMOVE_TOKEN } from './types'

const initialState = {
  token: '12333',
}

const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOKEN:
      console.log('22')
      return {
        ...state,
        token: action.token,
      }

    default:
      return state
  }
}
export default tokenReducer
