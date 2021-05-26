import { createReducer } from '@reduxjs/toolkit'
import { increment } from "../actions/actions";

const initialState = {
    counter: 0
}

export default createReducer(initialState, (builder) => {
    builder
        .addCase(increment, (state) => {
            ++state.counter
        })
});