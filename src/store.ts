import { configureStore } from '@reduxjs/toolkit';

import boardReduser from './redusers/board';

const store = configureStore({
    reducer: boardReduser,
})

export default store;
export type RootStore = ReturnType<typeof store.getState>