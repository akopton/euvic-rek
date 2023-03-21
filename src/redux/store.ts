import { configureStore } from '@reduxjs/toolkit'
import React, { useReducer } from 'react'
import userReducer from './userSlice'

export default configureStore({
  reducer: {
    user: userReducer,
  },
})
