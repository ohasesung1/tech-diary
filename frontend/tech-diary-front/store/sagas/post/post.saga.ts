import { all, call, takeLatest, put, throttle, fork } from 'redux-saga/effects';
import postRepo from './post.repository';
import { fetchPostGet, setPostGetErrorMsg, POST_GET_REQUEST } from 'store/modules/post';

function* executeCallback(cb?: () => void) {
  if (!!cb) {
    yield call(cb);
  }
};

function* getPostSaga(action: ReturnType<typeof fetchPostGet.request>) {

  const { page, category, successCB, failureCB } = action.payload;
  
  const { status, data } = yield call(postRepo.postGetByCategoryReq, {
    page,
    category,
  });

  if (status === 400) {
    yield executeCallback(failureCB);
    yield put(setPostGetErrorMsg('조희 요청 방식이 잘 못 되었습니다.'));
    return;
  }

  if (status === 500) {
    yield executeCallback(failureCB);
    yield put(setPostGetErrorMsg(data.message || '서버상에 문제가 생겼습니다. 조금만 기다려 주세요.'));
    return;
  }

  const payload = {
    posts: data.data.posts,
    totalPage: data.data.totalPage,
  }

  yield put(fetchPostGet.success(payload));
  yield executeCallback(successCB);
};

export default function* postSagas() {
  yield all([fork(watchGetPosts)]);
};

function* watchGetPosts() {
  yield throttle(1000, POST_GET_REQUEST, getPostSaga);
}