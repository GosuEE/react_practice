import Btn from '../button/Btn';
import InputText from './InputText';
import React, { useEffect } from 'react'
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from '../redux/modules/todoList.js'
import { initText, changeTitle, changeContents } from '../redux/modules/text'
import nextId from "react-id-generator";

const StyledForm = styled.form`
    margin-top: 20px;
    padding: 15px 15px 15px 15px;
    border: 1px solid #d2d2d2;
    border-radius: 8px;
`

function InputForm({ }) {
    const text = useSelector((state) => state.text)
    const title = text.title;
    const contents = text.contents;
    const [disable, setDisable] = React.useState(true);
    const dispatch = useDispatch();
    const id = nextId;

    function onSubmitHandler() {
        const todo = {
            id: 0,
            title: "",
            contents: "",
            isDone: false
        }

        todo.id = id();
        todo.title = title;
        todo.contents = contents;

        dispatch(addTodo(todo));
        dispatch(initText());
    }

    useEffect(() => {
        if (title !== "" && contents !== "")
            setDisable(false);
        else
            setDisable(true);
    }, [title, contents])

    return (
        <StyledForm>
            <InputText name="제목" text={title} changeText={changeTitle} />
            <InputText name="내용" text={contents} changeText={changeContents} />
            <Btn disabled={disable} type="button" submit={onSubmitHandler}/>
        </StyledForm>
    )
}

export default InputForm;