import {createReducer, PayloadAction} from '@reduxjs/toolkit'
import { setSizeAction, setContextAction } from "../actions/actions"
import boardState from './boardInterface'
import { setSizePayloadInterface, setContextPayloadType } from "../actions/actionInterface";

const initialState: boardState = {
    size: {
        width: 0,
        height: 0
    },
    context: null
}

export default createReducer(initialState, (builder) => {
    builder
        .addCase(setSizeAction, (state, action: PayloadAction<setSizePayloadInterface> ) => {
            state.size = action.payload;
        })
        .addCase(setContextAction, (state, action: PayloadAction<setContextPayloadType> ) => {
            state.context = action.payload.context;
        })
});