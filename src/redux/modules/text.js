const INIT_TEXT = 'text/INIT_TEXT'
const CHANGE_TITLE = 'text/CHANGE_TITLE'
const CHANGE_CONTENTS = 'text/CHANGE_CONTENTS'

const initialState = {
    title: "",
    contents: ""
};

export const initText = () => {
    return {
        type: INIT_TEXT,
    }
}

export const changeTitle = (payload) => {
    return {
        type: CHANGE_TITLE,
        payload
    }
}

export const changeContents = (payload) => {
    return {
        type: CHANGE_CONTENTS,
        payload
    }
}

export default function text(state = initialState, action) {
    switch (action.type) {
        case INIT_TEXT:
            return {
                ...state,
                title: "",
                contents: ""
            }
        case CHANGE_TITLE:
            return{
                ...state,
                title: action.payload
            }
        case CHANGE_CONTENTS:
            return{
                ...state,
                contents: action.payload
            }
        default:
            return{
                ...state
            }
    }
}