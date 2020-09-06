import { createAsyncAction, ActionType, createReducer, createAction } from 'typesafe-actions';
import { AxiosError } from 'axios';
import { PostDeleteReq } from 'store/types/post.type';

const SET_POST_DELETE_ERROR_MSG = 'post/SET_POST_GET_ERROR_MSG';
export const POST_DELETE_REQUEST = 'post/POST_DELETE_REQUEST';
export const POST_DELETE_SUCCESS = 'post/POST_DELETE_SUCCESS';
export const POST_DELETE_FAILURE = 'post/POST_DELETE_FAILURE';

type PostState = {
  loading?: boolean;
  postDeleteErrorMsg?: string;
  stateType: string;
};

const initialState: PostState = {
  loading: false,
  postDeleteErrorMsg: '',
  stateType: '',
};

export const setPostDeleteErrorMsg = createAction(SET_POST_DELETE_ERROR_MSG)<string>();
export const postDelete = createAsyncAction(
  POST_DELETE_REQUEST,
  POST_DELETE_SUCCESS,
  POST_DELETE_FAILURE
)<PostDeleteReq, undefined, AxiosError>();

const actions = {
  setPostDeleteErrorMsg,
  postDelete,
};

type PostDeleteAction = ActionType<typeof actions>;

export default createReducer<PostState, PostDeleteAction>(initialState, {
  [POST_DELETE_REQUEST]: (state) => ({ 
    ...state,
    loading: true,
    stateType: 'request',
  }),

  [POST_DELETE_SUCCESS]: (state) => ({ 
    ...state,
    loading: false,
    stateType: 'success',
  }),

  [POST_DELETE_FAILURE]: (state) => ({ 
    ...state,
  }),

  [SET_POST_DELETE_ERROR_MSG]: (state, action) => ({
    ...state,
    postDeleteErrorMsg: action.payload,
  }),
});
