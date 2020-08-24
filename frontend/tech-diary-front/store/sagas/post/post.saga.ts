import { all, call, takeLatest, put } from 'redux-saga/effects';
import postRepo from './post.repository';
import { fetchPostGet, setPostGetErrorMsg } from 'store/modules/post';

function* executeCallback(cb?: () => void) {
  if (!!cb) {
    yield call(cb);
  }
};

function* getPost(action: ReturnType<typeof fetchPostGet.request>) {
  const { page, limit, category, successCB, failureCB } = action.payload;
  const { status, data } = yield call(postRepo.postGetByCategoryReq, {
    page,
    limit,
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

  yield put(fetchPostGet.success());
  yield executeCallback(successCB);
};

export default function* postSaga() {
  yield all([
    takeLatest(fetchPostGet.request, getPost),
  ]);
};