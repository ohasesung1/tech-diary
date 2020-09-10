import { all, call, takeLatest, put, fork } from 'redux-saga/effects';
import uploadRepo from './upload.repository';
import { uploadFile, UPLOAD_FILE_REQUEST, setUploadFileErrorMsg, uploadThumnail, UPLOAD_THUMNAIL_REQUEST } from "store/modules/upload";


function* executeCallback(cb?: () => void) {
  if (!!cb) {
    yield call(cb);
  }
};

function* uploadFileSaga(action:ReturnType<typeof uploadFile.request>) {
  const { formData, successCB, failureCB } = action.payload;

  const { status, data } = yield call(uploadRepo.uploadFileReq, {
    formData,
  });
  

  if (status === 400) {
    yield executeCallback(failureCB);
    yield put(setUploadFileErrorMsg('양식을 맞춰주세요.'));
    return;
  }

  if (status === 500) {
    yield executeCallback(failureCB);
    yield put(setUploadFileErrorMsg('Server Error!'));
    return;
  }

  const payload = {
    imgs: data.data.imgs[0].fileAddress,
  }

  yield put(uploadFile.success(payload));
  yield executeCallback(successCB);
};

function* uploadThumnailSaga(action:ReturnType<typeof uploadThumnail.request>) {
  const { formData, successCB, failureCB } = action.payload;

  const { status, data } = yield call(uploadRepo.uploadFileReq, {
    formData,
  });
  

  if (status === 400) {
    yield executeCallback(failureCB);
    yield put(setUploadFileErrorMsg('양식을 맞춰주세요.'));
    return;
  }

  if (status === 500) {
    yield executeCallback(failureCB);
    yield put(setUploadFileErrorMsg('Server Error!'));
    return;
  }

  const payload = {
    thumnail: data.data.imgs[0].fileAddress,
  }

  yield put(uploadThumnail.success(payload));
  yield executeCallback(successCB);
};

export default function* uploadSagas() {
  yield all([fork(watchUploadFile), fork(watchUploadThumnail)]);
};

function* watchUploadFile() {
  yield takeLatest(UPLOAD_FILE_REQUEST, uploadFileSaga);
}

function* watchUploadThumnail() {
  yield takeLatest(UPLOAD_THUMNAIL_REQUEST, uploadThumnailSaga);
}