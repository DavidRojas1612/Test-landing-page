import { IS_AUTHED, SET_PRODUCTS, SET_MESSAGE_ERROR } from "./actionsConst";
import axios from "axios";
import { formatProducts } from "../../providers/formatData";

export const setProducts = value => ({ type: SET_PRODUCTS, payload: value });
const isAuthed = value => ({ type: IS_AUTHED, payload: value });
const setMessageError = value => ({ type: SET_MESSAGE_ERROR, payload: value });

export const logIn = data => {
  return async dispatch => {
    try {
      const res = await axios.post("http://localhost:3005/sign_in", data);
      dispatch(
        isAuthed({
          authed: true,
          user: res.data
        })
      );
    } catch (error) {
      dispatch(
        setMessageError({
          error: error.message
        })
      );
      dispatch(
        isAuthed({
          authed: false,
          user: null
        })
      );
    }
  };
};

export const getProducts = () => {
  return async dispatch => {
    let url = `http://localhost:3005/products`;
    try {
      const products = await axios.get(url);
      dispatch(
        setProducts({
          products: formatProducts(products.data)
        })
      );
    } catch (error) {
      dispatch(
        setMessageError({
          errorMessage: error.message
        })
      );
      dispatch(
        setProducts({
          products: null
        })
      );
    }
  };
};
