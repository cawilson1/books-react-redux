import store from './index'

export const ADD_BOOK = 'ADD_BOOK'
export const GET_BOOKS = 'GET_BOOKS'

export function addBook(title){
    console.log('add action');
    
    return {type: ADD_BOOK, payload: title}
}
