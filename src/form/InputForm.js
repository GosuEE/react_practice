import Form from 'react-bootstrap/Form';
import Btn from '../button/Btn';
import InputText from './InputText';
import React from 'react'

function InputForm({ id, todoList, setTodoList }) {
    const todo = {
        id: 0,
        title: "",
        contents: "",
        isDone: false
    }
    const [title, setTitle] = React.useState('');
    const [contents, setContents] = React.useState('');

    function submit() {
        if (title === "" || contents === "")
            return;
        todo.id = id
        todo.title = title;
        todo.contents = contents;
        setTodoList([...todoList, todo])
        console.log(todo)
    }

    return (
        <Form>
            <InputText name="제목" text={title} setText={setTitle} />
            <InputText name="내용" text={contents} setText={setContents} />
            <Btn submit={submit} />
        </Form>
    )
}

export default InputForm;