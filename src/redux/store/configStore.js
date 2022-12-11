// import todoList from '../modules/todoList'
// import text from '../modules/text'

import todoList from '../modules/todoListSlice'
import text from '../modules/textSlice'

import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    text, todoList
})

const store = configureStore({ reducer: rootReducer });

export default store;