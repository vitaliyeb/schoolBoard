import { createAction } from "@reduxjs/toolkit";
import { setSizePayloadInterface } from "../actions/actionInterface";

const setSizeAction = createAction<setSizePayloadInterface> ('SET_SIZE');

export {
    setSizeAction
};