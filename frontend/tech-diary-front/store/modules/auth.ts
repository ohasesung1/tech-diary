import { createAsyncAction, ActionType, createReducer, createAction } from "typesafe-actions";
import { AuthLogin } from "store/types/auth.types";
import { AxiosError } from "axios";

type AuthState = {
  loading?: boolean;
  authLoginErrorMsg: string;
};

const initialState: AuthState = {
  loading: false,
  authLoginErrorMsg: '',
};

const AUTH_LOGIN_ERROR_MSG = 'post/AUTH_LOGIN_ERROR_MSG';
export const AUTH_LOGIN_REQUEST = 'post/AUTH_LOGIN_REQUEST';
export const AUTH_LOGIN_SUCCESS = 'post/AUTH_LOGIN_SUCCESS';
export const AUTH_LOGIN_FAILURE = 'post/AUTH_LOGIN_FAILURE';

export const setLoginErrorMsg = createAction(AUTH_LOGIN_ERROR_MSG)<string>();
export const onAuthLogin = createAsyncAction(
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE
)<AuthLogin, undefined, AxiosError>();

const actions = {
  setLoginErrorMsg,
  onAuthLogin,
};

type AuthAction = ActionType<typeof actions>

export default createReducer<AuthState, AuthAction>(initialState, {
  [AUTH_LOGIN_REQUEST]: (state) => ({
    ...state,
    loading: true,
  }),

  [AUTH_LOGIN_SUCCESS]: (state, action) => ({
    ...state,
    loading: false,
  }),

  [AUTH_LOGIN_FAILURE]: (state) => ({
    ...state,
  }),

  [AUTH_LOGIN_ERROR_MSG]: (state, action) => ({
    ...state,
    authLoginErrorMsg: action.payload,
  }),
});