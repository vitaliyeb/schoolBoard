import { createReducer } from '@reduxjs/toolkit'
import { setSizeAction } from "../actions/actions";

const initialState = {
    size: {
        width: 0,
        height: 0
    }
}

export default createReducer(initialState, (builder) => {
    builder
        .addCase(setSizeAction, (state, action ) => {
            state.size = action.payload;
        })
});