import { createAction } from "@reduxjs/toolkit"
import { createReducer } from "@reduxjs/toolkit"

const ADD_TODO = 'todoList/ADD_TODO'
const DELETE_TODO = 'todoList/DELETE_TODO'
const TOGGLE_STATUS_TODO = 'todoList/TOGGLE_STATUS_TODO'
const GET_TODO_BY_ID = 'todoList/GET_TODO_BY_ID'

export const addTodo = createAction(ADD_TODO)
export const deleteTodo = createAction(DELETE_TODO)
export const toggleStatusTodo = createAction(TOGGLE_STATUS_TODO)
export const getTodoByID = createAction(GET_TODO_BY_ID)

// export const addTodo = (payload) => {
//     return {
//         type: ADD_TODO,
//         payload,
//     }
// }
// export const deleteTodo = (payload) => {
//     return {
//         type: DELETE_TODO,
//         payload,
//     }
// }
// export const toggleStatusTodo = (payload) => {
//     return {
//         type: TOGGLE_STATUS_TODO,
//         payload,
//     }
// }
// export const getTodoByID = (payload) => {
//     return {
//         type: GET_TODO_BY_ID,
//         payload,
//     }
// }

const initialState = {
    todoList: [],
    todo: {
        id: 0,
        title: "",
        contents: "",
        isDone: false
    }
};

export default createReducer(initialState, {
    [addTodo]: (state, action) =>
        ({ ...state, todoList: [...state.todoList, action.payload] }),
    [deleteTodo]: (state, action) => ({
        ...state,
        todoList: state.todoList.filter((todo) => {
            if (todo.id === action.payload)
                return
            else
                return todo
        })
    }),
    [toggleStatusTodo]: (state, action) => {
        state.todoList = state.todoList.filter((todo) => {
            if (todo.id === action.payload) {
                todo.isDone = !todo.isDone
                return todo
            }
            else
                return todo
        })
    },
    [getTodoByID]: (state, action) => ({ ...state, todo: state.todoList.find((todo) => todo.id === action.payload) })
})

// export default function todoList(state = initialState, action) {
//     switch (action.type) {
//         case ADD_TODO:
//             return {
//                 ...state,
//                 todoList: [...state.todoList, action.payload]
//             }
//         case DELETE_TODO:
//             return {
//                 ...state,
//                 todoList: state.todoList.filter((todo) => {
//                     if (todo.id === action.payload)
//                         return
//                     else
//                         return todo
//                 })
//             }
//         case TOGGLE_STATUS_TODO:
//             return {
//                 ...state,
//                 todoList: state.todoList.filter((todo) => {
//                     if (todo.id === action.payload) {
//                         todo.isDone = !todo.isDone
//                         return todo
//                     }
//                     else
//                         return todo
//                 })
//             }
//         case GET_TODO_BY_ID:
//             return {
//                 ...state,
//                 todo: state.todoList.find((todo) => todo.id === action.payload)
//             }
//         default:
//             return {
//                 ...state
//             }
//     }
// }