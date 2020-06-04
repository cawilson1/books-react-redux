import React, {useEffect} from 'react'
import ToDo from './Todo'
import {useDispatch} from 'react-redux'
import Book from './Book'
import { getBooks } from '../actions';

const BookList = ({ books, onBookClick  }) => {

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getBooks())
  }, [dispatch])

  return (
    <div>
        <Book onClick={() => onBookClick(index)} />
    </div>
  )
}

export default BookList