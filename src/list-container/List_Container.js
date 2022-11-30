import List from './List'
import React from 'react'
import styles from './List_Container.module.css'

function List_Container({ todoList, setTodoList }) {
    const onEditHandler = (id) => {
        const newTodoList = todoList.map((todo) => {
            if (todo.id === id) {
                todo.isDone = !todo.isDone
                return todo
            }
            else
                return todo
        })
        setTodoList(newTodoList)
    }

    const onDeleteHandler = (id) => {
        const newTodoList = todoList.filter((todo) => {
            if (todo.id === id)
                return
            else
                return todo
        })
        setTodoList(newTodoList)
    }

    return (
        <div className={styles.list_container}>
            <div className={styles.list_wrapper}>
                <h2 className="list_title">달성하기 위해 노력중</h2>
                <div className={styles.todo_wrapper}>
                    {todoList.map((todo) => {
                        if (!todo.isDone)
                            return (
                                <List
                                    todo={todo}
                                    onEditHandler={onEditHandler}
                                    onDeleteHandler={onDeleteHandler}
                                    key={todo.id} />
                            )
                    })
                    }
                </div>
            </div>
            <div className={styles.list_container}>
                <h2 className="list_title">달성 완료!</h2>
                <div className={styles.todo_wrapper}>
                    {todoList.map((todo) => {
                        if (todo.isDone)
                            return (
                                <List
                                    todo={todo}
                                    onEditHandler={onEditHandler}
                                    onDeleteHandler={onDeleteHandler}
                                    key={todo.id} />
                            )
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default List_Container;