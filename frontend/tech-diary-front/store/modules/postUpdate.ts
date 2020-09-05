import { createAsyncAction, ActionType, createReducer, createAction } from "typesafe-actions";
import { PostUpdateReq } from "store/types/post.type";
import { AxiosError } from "axios";

type PostUpdateState = {
  loading?: boolean;
  postUpdateErrorMsg: string;
  stateType: string;
};

const initialState: PostUpdateState = {
  loading: false,
  postUpdateErrorMsg: '',
  stateType: '',
};

const POST_UPDATE_ERROR_MSG = 'post/POST_UPDATE_ERROR_MSG';
export const POST_UPDATE_REQUEST = 'post/POST_UPDATE_REQUEST';
export const POST_UPDATE_SUCCESS = 'post/POST_UPDATE_SUCCESS';
export const POST_UPDATE_FAILURE = 'post/POST_UPDATE_FAILURE';

export const setPostUpdateErrorMsg = createAction(POST_UPDATE_ERROR_MSG)<string>();
export const onPostUpdate = createAsyncAction(
  POST_UPDATE_REQUEST,
  POST_UPDATE_SUCCESS,
  POST_UPDATE_FAILURE,
)<PostUpdateReq, undefined, AxiosError>();


const actions = {
  setPostUpdateErrorMsg,
  onPostUpdate,
};

type PostUpdateAction = ActionType<typeof actions>;

export default createReducer<PostUpdateState, PostUpdateAction>(initialState, {
  [POST_UPDATE_REQUEST]: (state) => ({
    ...state,
    loading: true,
    stateType: 'request',
  }),

  [POST_UPDATE_SUCCESS]: (state) => ({
    ...state,
    loading: false,
    stateType: 'success',
  }),

  [POST_UPDATE_FAILURE]: (state) => ({
    ...state,
  }),

  [POST_UPDATE_ERROR_MSG]: (state, action) => ({
    ...state,
    postUpdateErrorMsg: action.payload,
  }),
});