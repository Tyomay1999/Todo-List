import React from 'react';
import SearchTodo from './Component/SearchTodo/searchTodo';
import TodoList from './Component/TodoList/todoList';
// import axios from 'axios';
// import { API_URL_GET_CREATE } from './config';
// axios.get(API_URL_GET_CREATE)
// .then(data => {
//     console.log(data)
//     return data
// })
// .then(data => console.log(data))


const App = () => {
    return(
        <div>
            <SearchTodo/>
            <TodoList/>
        </div>
    )
}
export default App;