import Btn from '../button/Btn';
import InputText from './InputText';
import React, { useEffect } from 'react'
import styled from "styled-components"
import { useDispatch } from "react-redux";
import { addTodo } from '../redux/modules/todoList.js'

const StyledForm = styled.form`
    margin-top: 20px;
    padding: 15px 15px 15px 15px;
    border: 1px solid #d2d2d2;
    border-radius: 8px;
`

function InputForm({ todoList, setTodoList }) {
    const [title, setTitle] = React.useState('');
    const [contents, setContents] = React.useState('');
    const id = React.useRef(0);
    const [disable, setDisable] = React.useState(true);

    const dispatch = useDispatch();

    function onSubmitHandler() {
        const todo = {
            id: 0,
            title: "",
            contents: "",
            isDone: false
        }
        id.current++
        todo.id = id.current;
        todo.title = title;
        todo.contents = contents;
        dispatch(addTodo({ ...todo })); // 꼭 spread 연산자로 풀어서 넣어주어야 한다. 만약 todo를 그대로 넣으면 todoList에 todo라는 이름을 가진 프로퍼티가 넘어가기 때문에 추후에 접근할 때 문제가 생긴다.
        setContents('');
        setTitle('');
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
            <InputText name="제목" text={title} setText={setTitle} />
            <InputText name="내용" text={contents} setText={setContents} />
            <Btn disabled={disable} type="button" submit={onSubmitHandler} />
        </StyledForm>
    )
}

export default InputForm;