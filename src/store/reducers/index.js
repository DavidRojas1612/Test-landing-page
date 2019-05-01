import {
  IS_AUTHED,
  SET_PRODUCTS,
  SET_MESSAGE_ERROR,
  SET_PRODUCT
} from "../actions/actionsConst";

const initialState = {
  authed: false,
  user: null,
  products: null,
  errorMessage: null
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case IS_AUTHED:
      return { ...state, ...action.payload };
    case SET_PRODUCTS:
      return { ...state, products: action.payload };
    case SET_MESSAGE_ERROR:
      return { ...state, errorMessage: action.payload };
    case SET_PRODUCT:
      return { ...state, product: action.payload };
    default:
      return state;
  }
};
