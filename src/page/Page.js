import List_Container from '../list-container/List_Container';
import InputForm from '../form/InputForm'
import Header from '../Header/Header.js'
import styles from "./Page.module.css"
import React from 'react'

function Page() {
  const id=0;
  const [todoList, setTodoList] = React.useState([]);
  return (
    <div className={styles.page}>
      <Header />
      <InputForm id={id + 1} todoList={todoList} setTodoList={setTodoList} />
      <List_Container todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default Page;