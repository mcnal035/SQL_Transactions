import { all } from 'redux-saga/effects';

import bookSaga from './bookSaga';
import tagSaga from './tagSaga';

export default function* rootSaga() {
  yield all([
    bookSaga(),
    tagSaga(),
  ]);
}
