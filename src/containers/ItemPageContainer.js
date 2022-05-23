import React, { Component } from 'react'
import Items from '../components/Items'
import { connect } from 'react-redux'
import * as actions from '../actions/ItemPageActions'

class ItemPageContainer extends Component {
  componentDidMount() {
    this.props.initLoad()
  }

  render() {
    return (
      <Items {...this.props} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items.listItem,
    isLoading: state.items.isFetching,
    textSearch: state.items.textSearch
  }
}

const mapDispatchToprops = (dispatch) => {
  return {
    initLoad: () => {
      dispatch(actions.getListItem())
    },
    addDispatch: (data) => {
      dispatch(actions.addItemAction(data))
    },
    updateDispatch: (data) => {
      dispatch(actions.updateItemAction(data))
    },
    deleteDispatch: (data) => {
      dispatch(actions.deleteItemAction(data))
    },
    searchDispatch: (data) => {
      dispatch(actions.searchItemAction(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToprops)(ItemPageContainer)