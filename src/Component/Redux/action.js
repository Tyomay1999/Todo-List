export const GET_TODO = 'GET_TODO';
export const CREATE_TODO = 'CREATE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELET_TODO = 'DELET_TODO';

export const getTodo = (todo) => {
    return {
        type: GET_TODO,
        payload: todo
    }
}
export const createTodo = (todo) => {
    return {
        type: CREATE_TODO,
        payload: todo
    }
}
export const updateTodo = (todo) => {
    return {
        type: UPDATE_TODO,
        payload: todo
    }
}
export const deletTodo = (todoId) => {
    return {
        type: DELET_TODO,
        payload: todoId
    }
}