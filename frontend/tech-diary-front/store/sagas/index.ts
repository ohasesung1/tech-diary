import { all, call } from 'redux-saga/effects';
import postSaga from './post/post.saga';

export default function*() {
  yield all([
    call(postSaga),
  ]);
}