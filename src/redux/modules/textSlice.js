import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: "",
    contents: ""
};

const textSlice = createSlice({
    name: "text",
    initialState,
    reducers: {
        clearText: (state) => ({ ...state, title: "", contents: "" }),
        changeTitle: (state, action) => ({ ...state, title: action.payload }),
        changeContents: (state, action) => ({ ...state, contents: action.payload }),
    }
})

export const { clearText, changeTitle, changeContents } = textSlice.actions;
export default textSlice.reducer;