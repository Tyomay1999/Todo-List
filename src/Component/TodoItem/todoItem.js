import React from 'react';
import { useDispatch } from 'react-redux';
import { deletTodo } from '../Redux/action';
import todoItemModule from './todoItem.module.css';
const TodoItem = (prop) => {
    const { isOpen, setIsOpen,setData,data, setButtonContext,changeTodoId} = prop;
    const { todo, changeInputTitle, changeInputDescription, changeInputColor } = prop
    const { _id,title, description, color } = todo;
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
                            <div className={todoItemModule.back} style={color? { background: `${color}`}:{background : `linear-gradient(45deg,  #081d57 0%, #28427a 100%)`} }>
                                <div className={todoItemModule.inner}>
                                    <p className={todoItemModule.innerP}> {description} </p>
                                    <div className={todoItemModule.buttons}>
                                        <button
                                            className={`${todoItemModule.edit} ${todoItemModule.button}`}
                                            onClick={() => {
                                                changeInputTitle(title)
                                                changeInputDescription(description)
                                                changeInputColor(color)
                                                changeTodoId(_id)
                                                setButtonContext('Update')
                                                setIsOpen(!isOpen);
                                            }}
                                        >Edit</button>
                                        <button 
                                        className={`${todoItemModule.delet} ${todoItemModule.button}`}
                                        onClick={() => { 
                                            dispatch(deletTodo(_id));
                                            setData(!data)
                                        }}
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
