import { configureStore } from '@reduxjs/toolkit'
import GamesDataSlice from './GamesDataSlice'
const store = configureStore({
    reducer: {
        Data: GamesDataSlice.reducer
    }
})

export default store