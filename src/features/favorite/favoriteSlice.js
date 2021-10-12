import { createSlice } from '@reduxjs/toolkit'

const initialState = { favoriteIds: [] }

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    handleFavorite: (state, action) => {
      state.favoriteIds.includes(action.payload) ?
      state.favoriteIds = state.favoriteIds.filter(e => e !== action.payload)
        :
        state.favoriteIds.push(action.payload)
    },
  },
})
// Action creators are generated for each case reducer function
export const { handleFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer