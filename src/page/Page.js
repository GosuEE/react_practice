import List_Container from '../list-container/List_Container';
import InputForm from '../form/InputForm'
import Header from '../header/Header.js'
import React from 'react'
import styled from "styled-components"

const StyledPage = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`

function Page() {
  const [todoList, setTodoList] = React.useState([]);
  return (
    <StyledPage>
      <Header />
      <InputForm todoList={todoList} setTodoList={setTodoList} />
      <List_Container todoList={todoList} setTodoList={setTodoList} />
    </StyledPage>
  );
}

export default Page;