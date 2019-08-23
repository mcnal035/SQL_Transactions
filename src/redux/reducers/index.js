import { combineReducers } from 'redux';

const bookList = (state = [], action) => {
  if (action.type === `SET_BOOK_LIST`) {
    return  action.payload 
  }
  return state;
}

const tagList = (state = [], action) => {
  if (action.type === `SET_TAG_LIST`) {
    return  action.payload 
  }
  return state;
}

const rootReducer = combineReducers({
  bookList,
  tagList
});

export default rootReducer;