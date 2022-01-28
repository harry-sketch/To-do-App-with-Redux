import React from 'react'

// Styles
import styled from 'styled-components'

// Icons
import { AiTwotoneDelete } from 'react-icons/ai'
import { useDispatch } from 'react-redux'

// Redux
import { deleteItem } from '../../redux/action/todoAction'

const SingleTodo = ({ id, userInput }) => {
    // Redux
    const dispatch = useDispatch()
    console.log(userInput)
    return (
        <div>
            <SingleList>
                {userInput}
                <IconDiv>
                    <AiTwotoneDelete
                        onClick={() => {
                            dispatch(deleteItem(id))
                        }}
                    />
                </IconDiv>
            </SingleList>
        </div>
    )
}

const SingleList = styled.li`
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem;
    color: #fff;
    padding: 0.8rem;
    border-radius: 0.5rem;
    list-style-type: none;
    background: orange;
    transtion: all 300ms ease-in-out;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 500;

    &:hover {
        transtion: all 300ms ease-in-out;
        background: purple;
    }
`
const IconDiv = styled.div`
    display: flex;
    cursor: pointer;
    width: 10%;
    align-items: center;
    justify-content: space-between;
`
export default SingleTodo
