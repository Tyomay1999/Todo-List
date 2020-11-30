import React, { useState } from 'react';
import TodoItem from '../TodoItem/todoItem';
import todoListModule from './todoList.module.css';

const TodoList = () => {
    return (
        <div className={todoListModule.wrapper}>
            <div className={todoListModule.profile_card}>
                <header className={todoListModule.header}>
                    <p></p>
                    <p></p>
                    <h1 className={todoListModule.h1}>Todo List</h1>
                    <button
                        className={todoListModule.addTodo}
                    >Create</button>
                </header>
                <div className={todoListModule.items}>
                    <TodoItem/>
                    <TodoItem/>
                    <TodoItem/>
                    <TodoItem/>
                </div>
            </div>
        </div>
    )
}

export default TodoList;