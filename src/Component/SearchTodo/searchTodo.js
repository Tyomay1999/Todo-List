import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletTodo } from '../Redux/action';
import searchTodoModule from './searchTodo.module.css';

const SearchTodo = ({todos,setData,data}) => {
    const [searchTodo,setSearchTodo] = useState('')
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
                {todos && todos.map((item,index)=> {
                    if(item.title === searchTodo){
                        return(
                            <div className={searchTodoModule.modalDiv} key={index}>
                                <p className={searchTodoModule.searchitem}>{searchTodo}</p>
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