import { combineReducers } from 'redux';
import post from './post';
import postDetail from './postDetail';

const rootReducer = combineReducers({
  post,
  postDetail
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
