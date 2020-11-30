import React from 'react';
import todoItemModule from './todoItem.module.css';
const TodoItem = () => {
    return (
        <div className={todoItemModule.item}>
            <div className={todoItemModule.wrapper}>
                <div className={todoItemModule.cols}>
                    <div className={todoItemModule.col} >
                        <div className={todoItemModule.container}>
                            <div className={todoItemModule.front} >
                                <div className={todoItemModule.inner}>
                                    <p>Title</p>
                                </div>
                            </div>
                            <div className={todoItemModule.back}>
                                <div className={todoItemModule.inner}>
                                    <p className={todoItemModule.innerP}> Description </p>
                                    <div className={todoItemModule.buttons}>
                                        <button className={`${todoItemModule.edit} ${todoItemModule.button}`}>Edit</button>
                                        <button className={`${todoItemModule.delet} ${todoItemModule.button}`}>Delet</button>
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

export default TodoItem ;
