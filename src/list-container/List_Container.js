import List from "./List";
import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  __toggleStatusTodo,
  __deleteTodo,
} from "../redux/modules/todoListSlice";

const List_container = styled.div`
  margin-top: 20px;
`;

const List_wrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const Todo_wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function List_Container({}) {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoList.todoList);
  // const fetchTodoList = async () => {
  //   const { data } = await axios.get("http://localhost:3001/todoList");
  //   console.log(data);
  //   return data;
  // };
  // const todoList = fetchTodoList().then(function(resolvedData){

  // });

  // console.log(todoList);

  const onEditHandler = (todo) => {
    dispatch(__toggleStatusTodo(todo));
    //dispatch(toggleStatusTodo(id));
  };

  const onDeleteHandler = (id) => {
    dispatch(__deleteTodo(id));
  };

  return (
    <List_container>
      <List_wrapper>
        <h2 className="list_title">달성하기 위해 노력중</h2>
        <Todo_wrapper>
          {todoList.map((todo) => {
            if (!todo.isDone)
              return (
                <List
                  todo={todo}
                  onEditHandler={onEditHandler}
                  onDeleteHandler={onDeleteHandler}
                  key={todo.id}
                />
              );
          })}
        </Todo_wrapper>
      </List_wrapper>
      <List_wrapper>
        <h2 className="list_title">달성 완료!</h2>
        <Todo_wrapper>
          {todoList.map((todo) => {
            if (todo.isDone)
              return (
                <List
                  todo={todo}
                  onEditHandler={onEditHandler}
                  onDeleteHandler={onDeleteHandler}
                  key={todo.id}
                />
              );
          })}
        </Todo_wrapper>
      </List_wrapper>
    </List_container>
  );
}

export default List_Container;
