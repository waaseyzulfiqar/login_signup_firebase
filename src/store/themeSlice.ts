import { createSlice } from '@reduxjs/toolkit'

export interface themeState {
  color: string
}

const initialState: themeState = {
  color: ''
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, data) => {
      
      state.color = data.payload
    },
  },
})

export const { setTheme } = themeSlice.actions

export default themeSlice.reducer