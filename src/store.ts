import { configureStore } from '@reduxjs/toolkit';

import boardReduser from './redusers/board';

export default configureStore({
    reducer: {
        counter: boardReduser
    },
})



