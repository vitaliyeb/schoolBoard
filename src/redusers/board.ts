import {createReducer, PayloadAction} from '@reduxjs/toolkit'
import { setSizeAction } from "../actions/actions"
import boardState from './boardInterface'
import { setSizePayloadInterface } from "../actions/actionInterface";

const initialState: boardState = {
    size: {
        width: 0,
        height: 0
    },
    properties: {
        color: '#000',
        weight: 3
    },
    events: {}
}

export default createReducer(initialState, (builder) => {
    builder
        .addCase(setSizeAction, (state, action: PayloadAction<setSizePayloadInterface> ) => {
            state.size = action.payload;
        })
});