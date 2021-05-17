import { configureStore } from '@reduxjs/toolkit';

import boardReduser from './redusers/board';

export default const store = configureStore({
    reducer: boardReduser,
})



