import List from './List'
import React from 'react'

function List_Container({ todoList }) {
    console.log("List_Container rendered")
    return (
        <div className="list_container">
            <div className="list_wrapper">
                <h2 className="list_title">달성하기 위해 노력중</h2>
                {todoList.map((todo) => {
                    if (!todo.isDone)
                        return (
                            <List
                                todo={todo}
                                key={todo.id} />
                        )
                })
                }
            </div>
            <div className="list_wrapper">
                <h2 className="list_title">달성 완료!</h2>
                {todoList.map((todo) => {
                    if (todo.isDone)
                        return (
                            <List
                                todo={todo}
                                key={todo.id} />
                        )
                })
                }
            </div>
        </div>
    )
}

export default List_Container;