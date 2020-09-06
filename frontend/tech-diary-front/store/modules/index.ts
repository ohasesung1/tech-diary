import { combineReducers } from 'redux';
import post from './post';
import auth from './auth';
import postDetail from './postDetail';
import upload from './upload';
import postWrite from './postWrite';
import postUpdate from './postUpdate';
import postDelete from './postDelete';

const rootReducer = combineReducers({
  post,
  postDetail,
  auth,
  upload,
  postWrite,
  postUpdate,
  postDelete,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
