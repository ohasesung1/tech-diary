import { createAsyncAction, ActionType, createReducer, createAction } from "typesafe-actions";
import { PostWriteReq } from "store/types/post.type";
import { AxiosError } from "axios";


type PostWriteState = {
  loading?: boolean;
  authLoginErrorMsg: string;
  stateType: string;
};

const initialState: PostWriteState = {
  loading: false,
  authLoginErrorMsg: '',
  stateType: '',
};

const POST_WRITE_ERROR_MSG = 'post/POST_WRITE_ERROR_MSG';
export const POST_WRITE_REQUEST = 'post/POST_WRITE_REQUEST';
export const POST_WRITE_SUCCESS = 'post/POST_WRITE_SUCCESS';
export const POST_WRITE_FAILURE = 'post/POST_WRITE_FAILURE';

export const setPostWriteErrorMsg = createAction(POST_WRITE_ERROR_MSG)<string>();
export const onPostWrite = createAsyncAction(
  POST_WRITE_REQUEST,
  POST_WRITE_SUCCESS,
  POST_WRITE_FAILURE,
)<PostWriteReq, undefined, AxiosError>();


const actions = {
  setPostWriteErrorMsg,
  onPostWrite,
};

type PostWriteAction = ActionType<typeof actions>;

export default createReducer<PostWriteState, PostWriteAction>(initialState, {
  [POST_WRITE_REQUEST]: (state) => ({
    ...state,
    loading: true,
    stateType: 'request',
  }),

  [POST_WRITE_SUCCESS]: (state) => ({
    ...state,
    loading: false,
    stateType: 'success',
  }),

  [POST_WRITE_FAILURE]: (state) => ({
    ...state,
  }),

  [POST_WRITE_ERROR_MSG]: (state, action) => ({
    ...state,
    authLoginErrorMsg: action.payload,
  }),
});