import React from 'react';
import { useDispatch } from 'react-redux';
import { deletTodo } from '../Redux/action';
import todoItemModule from './todoItem.module.css';
const TodoItem = ({ isOpen, setIsOpen, setButtonContext, todo, changeInputTitle, changeInputDescription, changeInputColor, num, setTodoIndex }) => {
    const { title, description, color } = todo;
    const dispatch = useDispatch();

    return (
        <div className={todoItemModule.item}>
            <div className={todoItemModule.wrapper}>
                <div className={todoItemModule.cols}>
                    <div className={todoItemModule.col} >
                        <div className={todoItemModule.container}>
                            <div className={todoItemModule.front} >
                                <div className={todoItemModule.inner}>
                                    <p>{title}</p>
                                </div>
                            </div>
                            <div className={todoItemModule.back}>
                                <div className={todoItemModule.inner}>
                                    <p className={todoItemModule.innerP}> {description} </p>
                                    <div className={todoItemModule.buttons}>
                                        <button
                                            className={`${todoItemModule.edit} ${todoItemModule.button}`}
                                            onClick={() => {
                                                setTodoIndex(num)
                                                changeInputTitle(title)
                                                changeInputDescription(description)
                                                changeInputColor(color)
                                                setButtonContext('Update')
                                                setIsOpen(!isOpen);
                                            }}
                                        >Edit</button>
                                        <button 
                                        className={`${todoItemModule.delet} ${todoItemModule.button}`}
                                        onClick={() => { dispatch(deletTodo(title)) }}
                                        >Delet</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoItem;
