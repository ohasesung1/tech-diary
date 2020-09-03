import { createAsyncAction, ActionType, createReducer, createAction } from "typesafe-actions";
import { AuthLogin } from "store/types/auth.types";
import { AxiosError } from "axios";

type AuthState = {
  loading?: boolean;
  authLoginErrorMsg: string;
  isLoginSuccess: boolean;
};

const initialState: AuthState = {
  loading: false,
  authLoginErrorMsg: '',
  isLoginSuccess: false,
};

const AUTH_LOGIN_ERROR_MSG = 'auth/AUTH_LOGIN_ERROR_MSG';
export const AUTH_LOGIN_REQUEST = 'auth/AUTH_LOGIN_REQUEST';
export const AUTH_LOGIN_SUCCESS = 'auth/AUTH_LOGIN_SUCCESS';
export const AUTH_LOGIN_FAILURE = 'auth/AUTH_LOGIN_FAILURE';
export const AUTH_LOGOUT_SUCCESS = 'auth/AUTH_LOGOUT_SUCCESS';

export const setLoginErrorMsg = createAction(AUTH_LOGIN_ERROR_MSG)<string>();
export const onAuthLogin = createAsyncAction(
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGOUT_SUCCESS
)<AuthLogin, undefined, AxiosError>();

const actions = {
  setLoginErrorMsg,
  onAuthLogin,
};

type AuthAction = ActionType<typeof actions>;

export default createReducer<AuthState, AuthAction>(initialState, {
  [AUTH_LOGIN_REQUEST]: (state) => ({
    ...state,
    loading: true,
  }),

  [AUTH_LOGIN_SUCCESS]: (state) => ({
    ...state,
    loading: false,
    isLoginSuccess: true,
  }),

  [AUTH_LOGOUT_SUCCESS]: (state) => ({
    ...state,
    isLoginSuccess: false,
  }),

  [AUTH_LOGIN_FAILURE]: (state) => ({
    ...state,
  }),

  [AUTH_LOGIN_ERROR_MSG]: (state, action) => ({
    ...state,
    authLoginErrorMsg: action.payload,
  }),
});