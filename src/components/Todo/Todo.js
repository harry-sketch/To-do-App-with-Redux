import React, { useState, useRef, useEffect } from 'react'

//Ṣtyles
import styled from 'styled-components'
import SingleTodo from '../SingleTodo/SingleTodo'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { addItem, deleteAll } from '../../redux/action/todoAction'

const Todo = () => {
    const [userInput, setUserInput] = useState('')
    const inputRef = useRef()
    useEffect(() => {
        inputRef.current.focus()
    }, [])

    // Redux
    const dispatch = useDispatch()
    const todoList = useSelector((state) => state.todoReducer.todolist)
    return (
        <div>
            <Input>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Add Todo"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                />
                <AddBtn
                    onClick={() => {
                        if (!userInput) {
                            return alert('Please add a Todo ❌')
                        }
                        dispatch(addItem(userInput))
                        setUserInput('')
                    }}
                >
                    ADD Todo
                </AddBtn>
            </Input>

            {todoList.map((oneTodo) => {
                console.log(oneTodo)
                return <SingleTodo key={oneTodo.id} {...oneTodo} />
            })}

            <DeleteBtn
                onClick={() => {
                    dispatch(deleteAll())
                }}
            >
                Delete All
            </DeleteBtn>
        </div>
    )
}

const Input = styled.div`
    width: 100%;
    border: 1px solid #246bfd;
    border-radius: 0.5rem;
    padding: 0.25rem;

    & > input {
        color: #cdcdcd;
        width: 78%;
        border-radius: 0.5rem;
        outline: none;
        border: none;
        padding: 0.5rem 1rem;
        background: transparent;

        &::placeholder {
            color: #cdcdcd;
        }
    }
`
const AddBtn = styled.button`
    border-radius: 0.5rem;
    cursor: pointer;
    outline: none;
    background: #246bfd;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 0.86rem;
    font-weight: 600;

    &:hover {
        transition: all 300ms ease-in-out;
        background: purple;
    }
`
const DeleteBtn = styled.button`
    color: #fff;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 500;
    cursor: pointer;
    padding: 0.5rem 1rem;
    margin: 1rem auto 0;
    background: purple;
    border-radius: 0.5rem;
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default Todo
