import React, { useEffect } from 'react'
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getTodoByID } from "../redux/modules/todoList"
import Button from 'react-bootstrap/Button';

const StDetail = styled.div`
    padding: 20px 20px 20px 20px;
    border: 2px solid #d2d2d2;
    border-radius: 15px;
    width: 500px;
    height: 400px;
`

const StRoot = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`

const StBtn = styled(Button)`
    float:right;
`

function Layout() {
    const { todoId } = useParams();
    const dispatch = useDispatch();
    const todo = useSelector((state) => state.todoList.todo)
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getTodoByID(todoId))
    }, [])

    return (
        <StRoot>
            <StDetail>
                <StBtn variant="outline-primary" onClick={() => navigate("/")}>뒤로가기</StBtn>
                <h2>{todoId}</h2>
                <h3>{todo.title}</h3>
                <p>{todo.contents}</p>
            </StDetail>
        </StRoot>
    )
}

export default Layout;