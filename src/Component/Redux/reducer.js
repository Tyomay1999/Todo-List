import { CREATE_TODO, UPDATE_TODO, DELET_TODO } from './action';
import { todos } from './states';

export const reducer = (state = todos, action) => {
    let updatedTodos;
    switch (action.type) {
        case CREATE_TODO:
            updatedTodos = [...state];
            updatedTodos.push(action.payload)
            return updatedTodos
        case UPDATE_TODO:
            const { title, description, color, todoIndex } = action.payload
            updatedTodos = [...state];
            updatedTodos = updatedTodos.map((item, index) => {
                if (index === todoIndex) {
                    item = {
                        title,
                        description,
                        color
                    }
                }
                return item
            })
            return updatedTodos            
        case DELET_TODO:
            updatedTodos = [...state];
            updatedTodos = updatedTodos.filter(todo => todo.title !== action.payload)
            return updatedTodos
        }
    return state
}