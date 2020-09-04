import { combineReducers } from 'redux';
import post from './post';
import auth from './auth';
import postDetail from './postDetail';
import upload from './upload';

const rootReducer = combineReducers({
  post,
  postDetail,
  auth,
  upload
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
