import React from 'react';
import SearchTodo from './Component/SearchTodo/searchTodo';
import TodoList from './Component/TodoList/todoList';

const App = () => {
    return(
        <div>
            <SearchTodo/>
            <TodoList/>
        </div>
    )
}
export default App;