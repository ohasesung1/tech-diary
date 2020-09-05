import { combineReducers } from 'redux';
import post from './post';
import auth from './auth';
import postDetail from './postDetail';
import upload from './upload';
import postWrite from './postWrite';

const rootReducer = combineReducers({
  post,
  postDetail,
  auth,
  upload,
  postWrite
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
