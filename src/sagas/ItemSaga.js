import { put, takeEvery } from 'redux-saga/effects'
import getItems from '../fetchAPI/getItems'
import addItems from '../fetchAPI/addItems'
import updateItem from '../fetchAPI/updateItems'
import deleteItem from '../fetchAPI/deleteAPI'
import searchItem from '../fetchAPI/searchAPI'
import * as types from '../constants'

function* getListItem(action) {
  try {
    const res = yield getItems();
    yield put( {
      type: types.GET_ITEM_SUCCESS,
      payload: res
    })
  } 
  catch (error) {
    yield put({
      type: types.GET_ITEM_FAILURE,
      payload: {
        errorMessage: error.message        
      }
    })
  }
}

function* addItemSaga(action) {
  try {
    yield addItems(action.payload);
    yield put( {
      type: types.ADD_ITEM_SUCCESS
    })
    yield put( {
      type: types.GET_ITEM_REQUEST
    })
  } 
  catch (error) {
    yield put({
      type: types.ADD_ITEM_FAILURE,
      payload: {
        errorMessage: error.message
      }
    })
  }
}

function* updateItemSaga(action) {
  try {
    yield updateItem(action.payload.dataUpdate);
    yield put( {
      type: types.UPDATE_ITEM_SUCCESS
    })
    if (action.payload.textSearch === "") {
    yield put( {
      type: types.GET_ITEM_REQUEST
    })
  } else {
    yield put( {
      type: types.SEARCH_ITEM_REQUEST,
      payload: action.payload.textSearch
    })
  }
  } 
  catch (error) {
    yield put({
      type: types.UPDATE_ITEM_FAILURE,
      payload: {
        errorMessage: error.message        
      }
    })
  }
}

function* deleteItemSaga(action) {
  try {
    yield deleteItem(action.payload);
    yield put( {
      type: types.DELETE_ITEM_SUCCESS
    })
    yield put( {
      type: types.GET_ITEM_REQUEST
    })
  } 
  catch (error) {
    yield put({
      type: types.DELETE_ITEM_FAILURE,
      payload: {
        errorMessage: error.message        
      }
    })
  }
}

function* searchItemSaga(action) {
  try {
    const res = yield searchItem(action.payload);
    yield put( {
      type: types.SEARCH_ITEM_SUCCESS,
      payload: {
        data: res,
        textSearch: action.payload
      }
    })
  } 
  catch (error) {
    yield put({
      type: types.SEARCH_ITEM_FAILURE,
      payload: {
        errorMessage: error.message        
      }
    })
  }
}


export const ItemSaga = [
  takeEvery(types.GET_ITEM_REQUEST, getListItem),
  takeEvery(types.ADD_ITEM_REQUEST, addItemSaga),
  takeEvery(types.UPDATE_ITEM_REQUEST, updateItemSaga),
  takeEvery(types.DELETE_ITEM_REQUEST, deleteItemSaga),
  takeEvery(types.SEARCH_ITEM_REQUEST, searchItemSaga)
];
