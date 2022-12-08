import { useSelector } from "react-redux";

function useTodo() {
    const text = useSelector((state) => state.text)

    const todo = {
        id: 0,
        title: "",
        contents: "",
        isDone: false
    }

    todo.title = text.title;
    todo.contents = text.contents;

    return todo;
}

export default useTodo;