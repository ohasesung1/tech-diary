import { createAsyncAction, ActionType, createReducer, createAction } from 'typesafe-actions';
import produce from 'immer';
import { PostGet, Post } from 'store/types/post.type';

type PostState = {
  postGetErrorMsg?: string;
  loading?: boolean;
  postData?: Post[];
};

const initialState: PostState = {
  postGetErrorMsg: '',
  loading: false,
  postData: [],
};

const SET_POST_GET_ERROR_MSG = 'post/SET_POST_GET_ERROR_MSG';
const POST_GET_REQUEST = 'post/POST_GET_REQUEST';
const POST_GET_SUCCESS = 'post/POST_GET_SUCCESS';
const POST_GET_FAILURE = 'post/POST_GET_FAILURE';

export const setPostGetErrorMsg = createAction(SET_POST_GET_ERROR_MSG)<string>();
export const fetchPostGet = createAsyncAction(
  POST_GET_REQUEST,
  POST_GET_SUCCESS,
  POST_GET_FAILURE
)<PostGet, undefined, Error>();

const actions = {
  setPostGetErrorMsg,
  fetchPostGet,
};

type PostAction = ActionType<typeof actions>;

export default createReducer<PostState, PostAction>(initialState, {
  [POST_GET_REQUEST]: (state) => ({ ...state }),
  [POST_GET_SUCCESS]: (state) => ({ postData: state.postData }),
  [POST_GET_FAILURE]: (state) => ({  ...state }),
  [SET_POST_GET_ERROR_MSG]: (state, action) => ({ ...state, postGetErrorMsg: action.payload }),
});
