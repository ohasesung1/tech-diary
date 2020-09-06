import { createAsyncAction, ActionType, createReducer, createAction } from 'typesafe-actions';
import { AxiosError } from 'axios';
import { PostGetById, Post } from 'store/types/post.type';

const SET_POST_GET_ERROR_MSG = 'post/SET_POST_GET_ERROR_MSG';
export const POST_GET_DETAIL_REQUEST = 'post/POST_GET_DETAIL_REQUEST';
export const POST_GET_DETAIL_SUCCESS = 'post/POST_GET_DETAIL_SUCCESS';
export const POST_GET_DETAIL_FAILURE = 'post/POST_GET_DETAIL_FAILURE';

type PostState = {
  loading?: boolean;
  postData?: Post;
  getPostErrorMsg?: string;
};

const initialState: PostState = {
  loading: false,
  postData: undefined,
  getPostErrorMsg: '',
};

export const setPostGetErrorMsg = createAction(SET_POST_GET_ERROR_MSG)<string>();
export const fetchPostDetailGet = createAsyncAction(
  POST_GET_DETAIL_REQUEST,
  POST_GET_DETAIL_SUCCESS,
  POST_GET_DETAIL_FAILURE
)<PostGetById, Post, AxiosError>();

const actions = {
  setPostGetErrorMsg,
  fetchPostDetailGet,
};

type PostAction = ActionType<typeof actions>;

export default createReducer<PostState, PostAction>(initialState, {
  [POST_GET_DETAIL_REQUEST]: (state) => ({ 
    ...state,
    loading: true,
  }),

  [POST_GET_DETAIL_SUCCESS]: (state, action) => ({ 
    ...state,
    postData: action.payload,
    loading: false,
  }),

  [POST_GET_DETAIL_FAILURE]: (state) => ({ 
    ...state,
  }),

  [SET_POST_GET_ERROR_MSG]: (state, action) => ({
    ...state,
    getPostErrorMsg: action.payload,
  }),
});
