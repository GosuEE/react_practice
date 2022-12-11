import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { __getTodoByID } from "../redux/modules/todoListSlice";
import Button from "react-bootstrap/Button";

const StTable = styled.div`
  width: 500px;
  height: 400px;
  border: 2px solid #d2d2d2;
  overflow: hidden;
  border-radius: 15px;
`;

const StRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const StBtn = styled(Button)`
  float: right;
`;

const StId = styled.h2`
  margin: 0px;
  background-color: #f2f2f2;
  padding: 20px;
  border-bottom: 2px solid #d2d2d2;
`;

const StTitle = styled.h3`
  margin: 0px;
  padding: 15px;
  border-bottom: 2px solid #d2d2d2;
`;
const StContents = styled.p`
  padding: 15px;
  margin: 0px;
`;

function Layout() {
  const { todoId } = useParams();
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todoList.todo);
  const navigate = useNavigate();
  if (!todo) {
    navigate("/*");
  }

  useEffect(() => {
    dispatch(__getTodoByID(todoId));
  }, []);

  return (
    <StRoot>
      <StTable>
        <StId>
          ID: {todo.id}
          <StBtn variant="outline-primary" onClick={() => navigate("/")}>
            뒤로가기
          </StBtn>
        </StId>
        <StTitle>제목 : {todo.title}</StTitle>
        <StContents>내용: {todo.contents}</StContents>
      </StTable>
    </StRoot>
  );
}

export default Layout;
