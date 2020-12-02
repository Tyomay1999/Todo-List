import { CREATE_TODO, UPDATE_TODO, DELET_TODO, GET_TODO } from './action';
import axios from 'axios';
import { API_URL_GET_CREATE, API_URL_GET_ID_UPDATE_DELETE } from '../../config';

const todos = [];

export const reducer = (state = todos, action) => {
    let updatedTodos;
    switch (action.type) {
        case GET_TODO:
            updatedTodos = action.payload.payload
            return updatedTodos
        case CREATE_TODO:
            axios.post(API_URL_GET_CREATE,{
                title:action.payload.title,
                description: action.payload.description,
                color:action.payload.color
            })
            break;
        case UPDATE_TODO:
            const { title, description, color, _id } = action.payload
            axios.patch(API_URL_GET_ID_UPDATE_DELETE(_id),{
                title:title,
                description:description,
                color:color
            })           
            break;
        case DELET_TODO:
            axios.delete(API_URL_GET_ID_UPDATE_DELETE(action.payload))
            break;
            default:
                return updatedTodos;
        }
    return state
}