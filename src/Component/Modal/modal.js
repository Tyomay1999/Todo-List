import React from 'react';
import { useDispatch } from 'react-redux';
import { createTodo, updateTodo } from '../Redux/action';
import './modal.css'

const Modal = (prop) => {
    const { isOpen,data,setData, setIsOpen, buttonContext, inputTitle, todoId,changeTodoId } = prop
    const {inputDescription, inputColor, changeInputTitle, changeInputDescription, changeInputColor} = prop
    const dispatch = useDispatch()
    return (
        <div id="modal-container" className={isOpen ? 'four' : 'off'}  >
            <div className="modal-background">
                <div className="modal">
                    <div className="form">
                        <input
                            type="text"
                            name="Title"
                            value={inputTitle}
                            onChange={(e) => { changeInputTitle(e.target.value) }}
                            required
                        />
                        <label className="label-hoshi" >
                            <span className="content-hoshi span">
                                Title
                            </span>
                        </label>
                    </div>
                    <div className="form">
                        <input
                            type="text"
                            name="description"
                            value={inputDescription}
                            onChange={(e) => { changeInputDescription(e.target.value) }}
                            required />
                        <label className="label-hoshi" >
                            <span className="content-hoshi span">
                                Description
                            </span>
                        </label>
                    </div>
                    <div className="form">
                        <input
                            type="text"
                            name="color"
                            value={inputColor}
                            onChange={(e) => { changeInputColor(e.target.value) }}
                            required />
                        <label className="label-hoshi" >
                            <span className="content-hoshi span">
                                color
                            </span>
                        </label>
                    </div>
                    <button
                        className='buttonContext'
                        onClick={() => {
                            if (buttonContext === 'create') {
                                dispatch(createTodo({
                                    title:inputTitle,
                                    description:inputDescription,
                                    color:inputColor
                                }))
                                changeInputTitle('')
                                changeInputDescription('')
                                changeInputColor('')
                                setData(!data)
                                setIsOpen(!isOpen)
                            } else {
                                dispatch(updateTodo({
                                    _id:todoId,
                                    title:inputTitle,
                                    description:inputDescription,
                                    color:inputColor,
                                }))
                                changeInputTitle('')
                                changeInputDescription('')
                                changeInputColor('')
                                changeTodoId('')
                                setData(!data)
                                setIsOpen(!isOpen)
                            }
                        }}
                    >{buttonContext}</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;