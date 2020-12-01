import React from 'react';
import { useDispatch } from 'react-redux';
import { createTodo, updateTodo } from '../Redux/action';
import './modal.css'

const Modal = ({ isOpen, setIsOpen, buttonContext, inputTitle, inputDescription, inputColor, changeInputTitle, changeInputDescription, changeInputColor, todoIndex }) => {
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
                                setIsOpen(!isOpen)
                            } else {
                                changeInputTitle('')
                                changeInputDescription('')
                                changeInputColor('')
                                dispatch(updateTodo({
                                    // ...inputValues,
                                    title:inputTitle,
                                    description:inputDescription,
                                    color:inputColor,
                                    todoIndex
                                }))
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