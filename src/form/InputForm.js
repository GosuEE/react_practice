import Form from 'react-bootstrap/Form';
import Btn from '../button/Btn';
import InputText from './InputText';
import React from 'react'
import styles from './inputForm.module.css'

function InputForm({todoList, setTodoList }) {
    const todo = {
        id: 0,
        title: "",
        contents: "",
        isDone: false
    }
    const [title, setTitle] = React.useState('');
    const [contents, setContents] = React.useState('');
    const [id, setId] = React.useState(0);

    function submit() {
        if (title === "" || contents === "")
            return;
        setId((current)=>current+1)
        todo.id = id
        todo.title = title;
        todo.contents = contents;
        setContents('')
        setTitle('')
        setTodoList([...todoList, todo])
    }

    return (
        <form className={styles.input_form}>
            <InputText name="제목" text={title} setText={setTitle} />
            <InputText name="내용" text={contents} setText={setContents} />
            <Btn type="button" submit={submit} />
        </form>
    )
}

export default InputForm;