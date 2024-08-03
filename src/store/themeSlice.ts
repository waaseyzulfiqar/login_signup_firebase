import { createSlice } from '@reduxjs/toolkit'

export interface themeState {
  color: any
}

const initialState: themeState = {
  color: 'red'
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state) => {
      
      state.color = 'blue'
    },
  },
})

export const { setTheme } = themeSlice.actions

export default themeSlice.reducer