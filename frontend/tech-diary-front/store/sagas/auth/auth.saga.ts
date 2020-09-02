import { onAuthLogin, AUTH_LOGIN_REQUEST, setLoginErrorMsg } from "store/modules/auth";
import authRepo from "./auth.repository";
import { call, put, takeLatest, all, fork } from "redux-saga/effects";
import { setStorage } from "libs/storage";

function* executeCallback(cb?: () => void) {
  if (!!cb) {
    yield call(cb);
  }
};

function* onLoginSaga(action: ReturnType<typeof onAuthLogin.request>) {
  const { memberId, pw, successCB, failureCB } = action.payload;

  const { status, data } = yield call(authRepo.authLogInReq, {
    memberId,
    pw,
  });

  if (status === 400) {
    yield executeCallback(failureCB);
    yield put(setLoginErrorMsg('양식을 맞춰주세요.'));
    return;
  }

  if (status === 404) {
    yield executeCallback(failureCB);
    yield put(setLoginErrorMsg('아이디 혹은 비밀번호가 잘못 되었습니다.'));
    return;
  }

  if (status === 500) {
    yield executeCallback(failureCB);
    yield put(setLoginErrorMsg('Server Error!'));
    return;
  }

  const payload = {
    token: data.data.token,
    refreshToken: data.data.refreshToken,
  }

  setStorage('diary-token', payload.token);
  yield put(onAuthLogin.success());
  yield executeCallback(successCB);
}

export default function* authSagas() {
  yield all([fork(watchOnLogin)]);
};

function* watchOnLogin() {
  yield takeLatest(AUTH_LOGIN_REQUEST, onLoginSaga);
}
