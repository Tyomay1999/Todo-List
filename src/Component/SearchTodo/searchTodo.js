import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletTodo } from '../Redux/action';
import searchTodoModule from './searchTodo.module.css';

const SearchTodo = ({ todos, setData, data }) => {
    const [searchTodo, setSearchTodo] = useState('')
    const dispatch = useDispatch()
    return (
        <div className={searchTodoModule.searchImput}>
            <form className={searchTodoModule.form}>
                <label className={searchTodoModule.label}>Search</label>
                <input
                    id={searchTodoModule.search}
                    type="search"
                    placeholder="     Write Todo title"
                    onChange={(e) => { setSearchTodo(e.target.value) }}
                    required
                />
                <span className={searchTodoModule.caret}></span>
            </form>
            <div className={searchTodo ? `${searchTodoModule.searchDiv}` : `${searchTodoModule.searchDivNone}`}>
                {todos && searchTodo && todos.map((item, index) => {
                    let x = 0;
                    let title = item.title
                    for(let i = 0; i < title.length; i++){
                        if(title[i].toLocaleLowerCase() == searchTodo[i]){
                            x++
                        }
                    }
                    if ( x > 2 ) {
                        return (
                            <div className={searchTodoModule.modalDiv} key={index}>
                                <p className={searchTodoModule.searchitem}>{title}</p>
                                <button
                                    className={searchTodoModule.modalButtons}
                                    onClick={() => {
                                        setData(!data)
                                        dispatch(deletTodo(item._id))
                                    }}
                                >Delete</button>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default SearchTodo;