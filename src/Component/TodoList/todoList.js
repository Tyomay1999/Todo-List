import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from '../Modal/modal';
import TodoItem from '../TodoItem/todoItem';
import todoListModule from './todoList.module.css';

const TodoList = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [buttonContext, setButtonContext] = useState('')
    const [inputTitle, changeInputTitle] = useState('')
    const [inputDescription, changeInputDescription] = useState('')
    const [inputColor, changeInputColor] = useState('')
    const [todoIndex, setTodoIndex] = useState(0)
    const todos = useSelector(state => state)

    return (
        <div className={todoListModule.wrapper}>
            <div className={todoListModule.profile_card}>
                <header className={todoListModule.header}>
                    <p></p>
                    <p></p>
                    <h1 className={todoListModule.h1}>Todo List</h1>
                    <button
                        className={todoListModule.addTodo}
                        onClick={() => { setIsOpen(!isOpen); setButtonContext('create') }}
                    >Create</button>
                </header>
                <div className={todoListModule.items}>
                <Modal
                
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        buttonContext={buttonContext}
                        todoIndex={todoIndex}
                        inputTitle={inputTitle}
                        inputDescription={inputDescription}
                        inputColor={inputColor}
                        changeInputTitle={changeInputTitle}
                        changeInputDescription={changeInputDescription}
                        changeInputColor={changeInputColor}
                    // setInputValues={setInputValues}
                    /> 
                    {
                        todos.map((todo, index) => {
                            return (
                                <TodoItem
                                    key={index}
                                    isOpen={isOpen}
                                    setIsOpen={setIsOpen}
                                    setButtonContext={setButtonContext}
                                    todo={todo}
                                    num={index}
                                    setTodoIndex={setTodoIndex}
                                    changeInputTitle={changeInputTitle}
                                    changeInputDescription={changeInputDescription}
                                    changeInputColor={changeInputColor}
                                />)
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default TodoList;