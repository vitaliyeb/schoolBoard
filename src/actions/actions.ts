import { createAction } from "@reduxjs/toolkit";
import { setSizePayloadInterface, setContextPayloadType } from "../actions/actionInterface";

const setSizeAction = createAction<setSizePayloadInterface> ('SET_SIZE');
const setContextAction = createAction<setContextPayloadType> ('SET_CONTEXT');

export {
    setSizeAction,
    setContextAction
};