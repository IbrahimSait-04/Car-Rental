import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './CartSlice'
import themeReducer from './ThemeSlice'


export default configureStore({
    reducer: {
        cart: cartReducer,
        theme: themeReducer

    }
})