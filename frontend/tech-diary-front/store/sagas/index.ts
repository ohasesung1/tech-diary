import { all, call } from 'redux-saga/effects';
import postSaga from './post/post.saga';
import uploadSaga from './upload/upload.saga';
import authSaga from './auth/auth.saga';

export default function*() {
  yield all([
    call(postSaga),
    call(authSaga),
    call(uploadSaga),
  ]);
}