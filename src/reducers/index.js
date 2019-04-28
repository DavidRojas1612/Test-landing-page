import {
  IS_AUTHED,

} from '../actions/actionsConst'

export const reducers = (state, action) => {
  switch (action.type) {
    case IS_AUTHED:
      return { ...state, ...action.payload }
    case USER_DATA:
      return { ...state, user: action.payload }
    default:
      return state
  }
}
