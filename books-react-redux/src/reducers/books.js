import React from 'react'
import { ADD_BOOK, GET_BOOKS } from '../actions';

export default function books(state = [], action){
    switch(action.type){
        case ADD_BOOK:
            console.log('adding book');
            return [...state, {title: action.payload}]
        default:
            return state
    }
} 