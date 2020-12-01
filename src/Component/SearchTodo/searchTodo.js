import React, { useState } from 'react';
import searchTodoModule from './searchTodo.module.css';

const SearchTodo = (props) => {
    const [searchTodo,setSearchTodo] = useState('')
    return (
        <div className={searchTodoModule.searchImput}>
            <form className={searchTodoModule.form}>
                <label className={searchTodoModule.label}>Search</label>
                <input
                    id={searchTodoModule.search}
                    type="search"
                    placeholder="     Write Todo name"
                    onChange={(e) => { setSearchTodo(e.target.value) }}
                    required
                />
                <span className={searchTodoModule.caret}></span>
            </form>
            <div className={searchTodo ? `${searchTodoModule.searchDiv}` : `${searchTodoModule.searchDivNone}`}>
                <p className={searchTodoModule.searchitem}>todo</p>
                <p className={searchTodoModule.searchitem}>todo</p>
                <p className={searchTodoModule.searchitem}>todo</p>
                <p className={searchTodoModule.searchitem}>todo</p>
            </div>
        </div>
    )
}

export default SearchTodo;