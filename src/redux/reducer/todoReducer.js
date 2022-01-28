import { ADD_ITEM, DELETE_ITEM, DELETE_ALL } from '../types/types'

const initialState = {
    todolist: [],
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                todolist: [
                    ...state.todolist,
                    {
                        id: action.payload.id,
                        userInput: action.payload.userInput,
                    },
                ],
            }

        case DELETE_ITEM:
            return {
                ...state,
                todolist: [
                    ...state.todolist.filter(({ id }) => id !== action.payload),
                ],
            }

        case DELETE_ALL:
            return {
                ...state,
                todolist: [],
            }

        default:
            return { ...state }
    }
}
