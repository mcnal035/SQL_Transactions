import { takeLatest, put } from 'redux-saga/effects';
import Axios from 'axios';

function* fetchTags(action) {
  try {
    const response = yield Axios.get('/tags')
    yield put ({ type: `SET_TAG_LIST`, payload: response.data });
  }
  catch (error) {
    console.log(error);
    alert(`Could not get tags at this time. Try again later.`);
  }
}

function* tagSaga() {
  yield takeLatest('FETCH_TAG_LIST', fetchTags);
}

export default tagSaga;