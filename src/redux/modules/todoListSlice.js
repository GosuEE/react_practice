import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todoList: [],
  todo: {
    id: 0,
    title: "",
    contents: "",
    isDone: false,
  },
  isLoading: false,
  error: null,
};

export const __addTodo = createAsyncThunk(
  "todoList/ADD_TODO",
  async (payload, thunkAPI) => {
    try {
      await axios.post("http://localhost:3001/todoList", payload);
      const data = await axios.get("http://localhost:3001/todoList");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __toggleStatusTodo = createAsyncThunk(
  "todoList/TOOGGLE_STATUS_TODO",
  async (payload, thunkAPI) => {
    try {
      await axios.patch(`http://localhost:3001/todoList/${payload.id}`, {
        isDone: !payload.isDone,
      });
      const data = await axios.get(`http://localhost:3001/todoList/`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteTodo = createAsyncThunk(
  "todoList/DELETE_TODO",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`http://localhost:3001/todoList/${payload}`);
      const data = await axios.get(`http://localhost:3001/todoList/`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getTodoByID = createAsyncThunk(
  "todoList/GET_TODO_BY_ID",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(`http://localhost:3001/todoList/${payload}`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state, action) => ({
      ...state,
      todoList: [...state.todoList, action.payload],
    }),
    deleteTodo: (state, action) => ({
      ...state,
      todoList: state.todoList.filter((todo) => {
        if (todo.id === action.payload) return;
        else return todo;
      }),
    }),
    getTodoByID: (state, action) => ({
      ...state,
      todo: state.todoList.find((todo) => todo.id === action.payload),
    }),
    toggleStatusTodo: (state, action) => {
      state.todoList = state.todoList.filter((todo) => {
        if (todo.id === action.payload) {
          todo.isDone = !todo.isDone;
          return todo;
        } else return todo;
      });
    },
  },
  extraReducers: {
    [__addTodo.pending]: (state) => {
      state.isLoading = true; // ???????????? ????????? ???????????? ??????????????? true??? ???????????????.
    },
    [__addTodo.fulfilled]: (state, action) => {
      state.isLoading = false; // ???????????? ????????? ????????????, false??? ???????????????.
      state.todoList = action.payload; // Store??? ?????? todos??? ???????????? ????????? todos??? ????????????.
    },
    [__addTodo.rejected]: (state, action) => {
      state.isLoading = false; // ????????? ???????????????, ???????????? ????????? ????????????, false??? ???????????????.
      state.error = action.payload; // catch ??? error ????????? state.error??? ????????????.
    },

    [__toggleStatusTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [__toggleStatusTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todoList = action.payload;
    },
    [__toggleStatusTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__deleteTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todoList = action.payload;
    },
    [__deleteTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__getTodoByID.pending]: (state) => {
      state.isLoading = true;
    },
    [__getTodoByID.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todo = action.payload;
    },
    [__getTodoByID.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, getTodoByID, toggleStatusTodo } =
  todoListSlice.actions;
export default todoListSlice.reducer;
