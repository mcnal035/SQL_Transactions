import { takeLatest, put } from 'redux-saga/effects';
import Axios from 'axios';

function* fetchBooks(action) {
  try {
    const response = yield Axios.get('/books')
    yield put ({ type: `SET_BOOK_LIST`, payload: response.data });
  }
  catch (error) {
    console.log(error);
    alert(`Could not get books at this time. Try again later.`);
  }
}

function* BookSaga() {
  yield takeLatest('FETCH_BOOK_LIST', fetchBooks);
}

export default BookSaga;