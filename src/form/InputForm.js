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
    // const [title, setTitle] = React.useState('');
    // const [contents, setContents] = React.useState('');
    const id = nextId;
    const [disable, setDisable] = React.useState(true);

    const dispatch = useDispatch();

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
        dispatch(addTodo({ ...todo })); // 꼭 spread 연산자로 풀어서 넣어주어야 한다. 만약 todo를 그대로 넣으면 todoList에 todo라는 이름을 가진 프로퍼티가 넘어가기 때문에 추후에 접근할 때 문제가 생긴다.
        dispatch(initText());

        //setContents('');
        //setTitle('');
        //setTodoList([...todoList, todo]);
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
            <Btn disabled={disable} type="button" submit={onSubmitHandler} />
        </StyledForm>
    )
}

export default InputForm;