import { all, call, takeLatest, put, throttle, fork } from 'redux-saga/effects';
import postRepo from './post.repository';
import { fetchPostGet, setPostGetErrorMsg, POST_GET_REQUEST } from 'store/modules/post';
import { POST_GET_DETAIL_REQUEST, fetchPostDetailGet } from 'store/modules/postDetail';

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

function* getPostDetailSaga(action: ReturnType<typeof fetchPostDetailGet.request>) {
  const { id, successCB, failureCB } = action.payload;

  const { status, data } = yield call(postRepo.postGetDetailByIdReq, id);

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
  

  yield put(fetchPostDetailGet.success(data.data.post));
  yield executeCallback(successCB);
};

export default function* postSagas() {
  yield all([fork(watchGetPosts), fork(watchGetPostDetail)]);
};

function* watchGetPosts() {
  yield takeLatest(POST_GET_REQUEST, getPostSaga);
}

function* watchGetPostDetail() {
  yield takeLatest(POST_GET_DETAIL_REQUEST, getPostDetailSaga)
}