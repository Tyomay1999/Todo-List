import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../Modal/modal';
import TodoItem from '../TodoItem/todoItem';
import todoListModule from './todoList.module.css';
import axios from 'axios';
import { API_URL_GET_CREATE } from '../../config';
import { createTodo, deletTodo, getTodo, GET_TODO } from '../Redux/action';
import SearchTodo from '../SearchTodo/searchTodo';

const TodoList = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [buttonContext, setButtonContext] = useState('')
    const [inputTitle, changeInputTitle] = useState('')
    const [inputDescription, changeInputDescription] = useState('')
    const [inputColor, changeInputColor] = useState('')
    const [todoId, changeTodoId] = useState('')
    const [data, setData] = useState(false)
    const dispatch = useDispatch();
    const todos = useSelector(state => state)
    useEffect(() => {
        if (sessionStorage.getItem('data')) {
            let sessionStorageData = JSON.parse(sessionStorage.getItem('data'))
            sessionStorageData.forEach(item => {
                dispatch(deletTodo(item._id));
                dispatch(createTodo({
                    title: item.title,
                    description: item.description,
                    color: item.color
                }));
            })
        }
    }, [])
    useEffect(() => {
        setTimeout(() => {
            axios.get(API_URL_GET_CREATE)
                .then(resp => {
                    dispatch(getTodo({
                        type: GET_TODO,
                        payload: resp.data
                    }))
                })
                .catch(rej => {
                    return console.log(rej)
                })
        }, 1500)
    }, [data])
    useEffect(() => {
        const onbeforeunloadFn = () => {
            if(todos){
                sessionStorage.setItem('data', `${JSON.stringify(todos)}`);
            }
        }
        window.addEventListener('beforeunload', onbeforeunloadFn);
        return () => {
            window.removeEventListener('beforeunload', onbeforeunloadFn);
        }
    }, [todos])
    return (
        <div>
            <SearchTodo
                data={data}
                todos={todos}
                setData={setData}
            />
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
                            data={data}
                            isOpen={isOpen}
                            todoId={todoId}
                            setData={setData}
                            setIsOpen={setIsOpen}
                            inputTitle={inputTitle}
                            inputColor={inputColor}
                            changeTodoId={changeTodoId}
                            buttonContext={buttonContext}
                            inputDescription={inputDescription}
                            changeInputTitle={changeInputTitle}
                            changeInputColor={changeInputColor}
                            changeInputDescription={changeInputDescription}
                        />
                        {
                            todos ? todos.map((todo, index) => {
                                return (
                                    <TodoItem
                                        key={index}
                                        data={data}
                                        todo={todo}
                                        isOpen={isOpen}
                                        setData={setData}
                                        setIsOpen={setIsOpen}
                                        changeTodoId={changeTodoId}
                                        setButtonContext={setButtonContext}
                                        changeInputTitle={changeInputTitle}
                                        changeInputColor={changeInputColor}
                                        changeInputDescription={changeInputDescription}
                                    />)
                            }) : ""
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoList;