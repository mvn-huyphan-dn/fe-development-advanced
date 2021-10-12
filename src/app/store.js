import { configureStore } from '@reduxjs/toolkit'
import favoriteSlice from '../features/favorite/favoriteSlice'

export const store = configureStore({
  reducer: {
    favorite: favoriteSlice,
  },
})
