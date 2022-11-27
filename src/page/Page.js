import List_Container from '../list-container/List_Container';
import InputForm from '../form/InputForm'
import Header from '../Header/Header.js'
import styles from "./Page.module.css"
import React from 'react'

function Page() {
  const [todoList, setTodoList] = React.useState([]);
  return (
    <div className={styles.page}>
      <Header />
      <InputForm id={todoList.length+1} todoList={todoList} setTodoList={setTodoList}/>
      <List_Container todoList={todoList}/>
    </div>
  );
}

export default Page;