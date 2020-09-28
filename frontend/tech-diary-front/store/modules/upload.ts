import { createAsyncAction, ActionType, createReducer, createAction } from "typesafe-actions";
import { AxiosError } from "axios";
import { UploadFileReq, UploadFileSuccess, UploadThumnailSuccess } from "store/types/upload";

type UploadFileState = {
  loading?: boolean;
  uploadFileErrorMsg: string;
  imgs: Array<string>;
  thumbnail: string;
};

const initialState: UploadFileState = {
  loading: false,
  uploadFileErrorMsg: '',
  thumbnail: '',
  imgs: [],
};

const UPLOAD_FILE_ERROR_MSG = 'upload/UPLOAD_FILE_ERROR_MSG';
export const UPLOAD_FILE_REQUEST = 'upload/UPLOAD_FILE_REQUEST';
export const UPLOAD_FILE_SUCCESS = 'upload/UPLOAD_FILE_SUCCESS';
export const UPLOAD_FILE_FAILURE = 'upload/UPLOAD_FILE_FAILURE';

export const UPLOAD_THUMNAIL_REQUEST = 'upload/UPLOAD_THUMNAIL_REQUEST';
export const UPLOAD_THUMNAIL_SUCCESS = 'upload/UPLOAD_THUMNAIL_SUCCESS';
export const UPLOAD_THUMNAIL_FAILURE = 'upload/UPLOAD_THUMNAIL_FAILURE';

export const setUploadFileErrorMsg = createAction(UPLOAD_FILE_ERROR_MSG)<string>();
export const uploadFile = createAsyncAction(
  UPLOAD_FILE_REQUEST,
  UPLOAD_FILE_SUCCESS,
  UPLOAD_FILE_FAILURE,
)<UploadFileReq, UploadFileSuccess, AxiosError>();

export const uploadThumnail = createAsyncAction(
  UPLOAD_THUMNAIL_REQUEST,
  UPLOAD_THUMNAIL_SUCCESS,
  UPLOAD_THUMNAIL_FAILURE,
)<UploadFileReq, UploadThumnailSuccess, AxiosError>();


const actions = {
  setUploadFileErrorMsg,
  uploadFile,
  uploadThumnail,
};

type UploadFileAction = ActionType<typeof actions>;


export default createReducer<UploadFileState, UploadFileAction>(initialState, {
  [UPLOAD_FILE_REQUEST]: (state) => ({ 
    ...state,
    loading: true,
  }),

  [UPLOAD_FILE_SUCCESS]: (state, action) => ({ 
    ...state,
    loading: false,
    imgs: action.payload.imgs,
  }),

  [UPLOAD_FILE_FAILURE]: (state) => ({ 
    ...state,
  }),

  [UPLOAD_FILE_ERROR_MSG]: (state, action) => ({
    ...state,
    uploadFileErrorMsg: action.payload,
  }),

  [UPLOAD_THUMNAIL_REQUEST]: (state) => ({ 
    ...state,
    loading: true,
  }),

  [UPLOAD_THUMNAIL_SUCCESS]: (state, action) => ({ 
    ...state,
    loading: false,
    thumbnail: action.payload.thumbnail,
  }),

  [UPLOAD_THUMNAIL_FAILURE]: (state) => ({ 
    ...state,
  }),
});




