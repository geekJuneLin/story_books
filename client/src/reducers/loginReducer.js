import { AUTH_USER, AUTH_USER_LOADED, AUTH_USER_ERROR } from "../actions/types";

const initialState = {
  user: null,
  login: false,
  loading: false,
  error: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        loading: true,
      };
    case AUTH_USER_LOADED:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case AUTH_USER_ERROR:
      return {
        ...state,
        user: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
