import todoList from '../modules/todoList'
import {createStore} from "redux";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    todoList,
})

const store = createStore(rootReducer);

export default store;