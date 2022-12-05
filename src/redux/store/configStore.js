import todoList from '../modules/todoList'
import {createStore} from "redux";
import { combineReducers } from 'redux';
import text from '../modules/text'

const rootReducer = combineReducers({
    todoList, text
})

const store = createStore(rootReducer);

export default store;