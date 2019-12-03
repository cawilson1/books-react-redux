import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addBook } from '../actions'
import Book from '../components/Book'
// import store from '../index'

const AddBook = ({ dispatch }) => {
    // console.log(store.getState());
  const [inputTextValue, setInputTextValue] = useState('')

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()

          dispatch(addBook(inputTextValue))
          setInputTextValue('')
        }}
      >
        <input
          value={inputTextValue}
          onChange={e => setInputTextValue(e.target.value)}
          placeholder="what book?"
        />
        <button disabled={!inputTextValue.length} type="submit">
          Add Book
        </button>
      </form>
      <div>
          {inputTextValue}
      </div>
    </div>
  )
}

export default connect()(AddBook)