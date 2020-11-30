import { CREATE_TODO, UPDATE_TODO, DELET_TODO } from './action';
import { todos } from './states';

export const reducer = (state = todos, action) => {
    switch (action.type) {
        case CREATE_TODO:
           break;
        case UPDATE_TODO:
            break;            
        case DELET_TODO:
            break;
    }
    return state
}