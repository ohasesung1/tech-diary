import { combineReducers } from 'redux';
import post from './post';

const rootReducer = combineReducers({
  post
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
