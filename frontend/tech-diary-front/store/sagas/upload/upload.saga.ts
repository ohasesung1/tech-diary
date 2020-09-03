import { all, call, takeLatest, put, throttle, fork } from 'redux-saga/effects';
import uploadRepo from './upload.repository';
import { uploadFile, UPLOAD_FILE_REQUEST, setUploadFileErrorMsg } from "store/modules/upload";


function* executeCallback(cb?: () => void) {
  if (!!cb) {
    yield call(cb);
  }
};

function* uploadFileSaga(action:ReturnType<typeof uploadFile.request>) {
  console.log('test2');
  
  const { formData, successCB, failureCB } = action.payload;

  const { status, data } = yield call(uploadRepo.uploadFileReq, {
    formData
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
    imgs: data.data.imgs,
  }
  

  yield put(uploadFile.success(payload));
  yield executeCallback(successCB);
};

export default function* uploadSagas() {
  yield all([fork(watchUploadFile)]);
};

function* watchUploadFile() {
  yield takeLatest(UPLOAD_FILE_REQUEST, uploadFileSaga);
}