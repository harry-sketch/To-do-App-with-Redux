import { ADD_ITEM, DELETE_ITEM, DELETE_ALL } from '../types/types'

export const addItem = (userInput) => {
    return {
        type: ADD_ITEM,
        payload: {
            id: new Date().getTime().toString(),
            userInput,
        },
    }
}

export const deleteItem = (payload) => {
    return {
        type: DELETE_ITEM,
        payload,
    }
}
export const deleteAll = () => {
    return {
        type: DELETE_ALL,
    }
}
