import { createAsyncAction, ActionType, createReducer, createAction } from 'typesafe-actions';
import produce from 'immer';
import { AxiosError } from 'axios';
import { PostGet, Post } from 'store/types/post.type';

type PostState = {
  loading?: boolean;
  postData?: Post[];
  getPostErrorMsg?: string;
};

const initialState: PostState = {
  loading: false,
  postData: [],
  getPostErrorMsg: '',
};

const SET_POST_GET_ERROR_MSG = 'post/SET_POST_GET_ERROR_MSG';
export const POST_GET_REQUEST = 'post/POST_GET_REQUEST';
export const POST_GET_SUCCESS = 'post/POST_GET_SUCCESS';
export const POST_GET_FAILURE = 'post/POST_GET_FAILURE';


export const setPostGetErrorMsg = createAction(SET_POST_GET_ERROR_MSG)<string>();
export const fetchPostGet = createAsyncAction(
  POST_GET_REQUEST,
  POST_GET_SUCCESS,
  POST_GET_FAILURE
)<PostGet, Post[], AxiosError>();

const actions = {
  setPostGetErrorMsg,
  fetchPostGet,
};

type PostAction = ActionType<typeof actions>;

export default createReducer<PostState, PostAction>(initialState, {
  [POST_GET_REQUEST]: (state) => ({ 
    ...state,
    loading: true,
  }),

  [POST_GET_SUCCESS]: (state, action) => ({ 
    ...state,
    postData: action.payload
  }),

  [POST_GET_FAILURE]: (state) => ({ 
    ...state,
  }),

  [SET_POST_GET_ERROR_MSG]: (state, action) => ({
    ...state,
    getPostErrorMsg: action.payload,
  })
});
