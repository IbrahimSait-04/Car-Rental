import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../Redux/CartSlice'
import themeReducer from '../Redux/ThemeSlice'


export default configureStore({
    reducer: {
        cart: cartReducer,
        theme: themeReducer

    }
})