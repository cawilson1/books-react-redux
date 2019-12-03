import { connect } from 'react-redux'
import BookList from '../components/BookList';
import {ADD_BOOK} from '../actions'


const getManagedBooks = (books) =>{
    return books
}

const mapStateToProps = state => {
  console.log('The state is: ', state)
  return {
    books: getManagedBooks(state.books),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onBookClick: id => {
      dispatch({type: ADD_BOOK, payload: id})
    }
  }
}

const ManageBookList = connect(mapStateToProps, mapDispatchToProps)(BookList)

export default ManageBookList