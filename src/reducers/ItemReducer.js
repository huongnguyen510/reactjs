import * as types from '../constants'
const DEFAULT_STATE = {
  listItem: [],
  dataFetched: false,
  isFetching: false,
  error: false,
  errorMessage: null
}
export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case types.GET_ITEM_REQUEST:
      return {
        ...state,
        isfetching: true
      }
    case types.GET_ITEM_SUCCESS:
      return {
        ...state,
        isfetching: true,
        dataFetched: true,
        error: false,
        errorMessage: null,
        listItem: action.payload
      }
      case types.GET_ITEM_FAILURE:
        return {
          ...state,
          isfetching: true,
          error: true,
          errorMessage: action.payload.errorMessage
        }
        
      case types.ADD_ITEM_REQUEST:
        return {
          ...state,
          isfetching: true
        }
      case types.ADD_ITEM_SUCCESS:
        return {
          ...state,
          isfetching: true,
          dataFetched: true,
          error: false,
          errorMessage: null
        }
      case types.ADD_ITEM_FAILURE:
        return {
          ...state,
          isfetching: true,
          error: true,
          errorMessage: action.payload.errorMessage
        }

      case types.UPDATE_ITEM_REQUEST:
        return {
          ...state,
          isfetching: true
        }
      case types.UPDATE_ITEM_SUCCESS:
        return {
          ...state,
          isfetching: true,
          dataFetched: true,
          error: false,
          errorMessage: null,
          listItem: action.payload
        }
      case types.UPDATE_ITEM_FAILURE:
        return {
          ...state,
          isfetching: true,
          error: true,
          errorMessage: action.payload.errorMessage
        }

      case types.DELETE_ITEM_REQUEST:
        return {
          ...state,
          isfetching: true
        }
      case types.DELETE_ITEM_SUCCESS:
        return {
          ...state,
          isfetching: true,
          dataFetched: true,
          error: false,
          errorMessage: null,
          listItem: action.payload
        }
      case types.DELETE_ITEM_FAILURE:
        return {
          ...state,
          isfetching: true,
          error: true,
          errorMessage: action.payload.errorMessage
        }

      case types.SEARCH_ITEM_REQUEST:
        return {
          ...state,
          isfetching: true
        }
      case types.SEARCH_ITEM_SUCCESS:
        return {
          ...state,
          isfetching: true,
          dataFetched: true,
          error: false,
          errorMessage: null,
          listItem: action.payload.data,
          textSearch: action.payload.textSearch
        }
      case types.SEARCH_ITEM_FAILURE:
        return {
          ...state,
          isfetching: true,
          error: true,
          errorMessage: action.payload.errorMessage
        }
      default:
        return state;
  }
}