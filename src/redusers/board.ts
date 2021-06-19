import {createReducer} from '@reduxjs/toolkit'
import boardState from './boardInterface'

const initialState: boardState = {
    properties: {
        color: '#000',
        weight: 3
    }
}

export default createReducer(initialState, () => {
});