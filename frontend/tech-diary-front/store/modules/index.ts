import { combineReducers } from 'redux';
import post from './post';
import auth from './auth';
import postDetail from './postDetail';

const rootReducer = combineReducers({
  post,
  postDetail,
  auth
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
