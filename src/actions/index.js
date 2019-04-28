import { IS_AUTHED, SET_THEMES, SET_TITLE, SET_THEME,USER_DATA } from './actionsConst'
import axios from 'axios'



export const isAuthed = value => ({ type: IS_AUTHED, payload: value })
export const setUser = value => ({ type: SET_TITLE, payload: value })
export const setProducts = value => ({ type: SET_THEMES, payload: value })



export const getProducts = () => {
  return async dispatch => {
    const database = 
  }
}
