import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'newUser',
  initialState: {
    email: '',
    password: '',
    nip: '',
    phone: '',
    role: '',
  },
  reducers: {
    update: (state, action) => {
      state.email = action.payload.email
      state.password = action.payload.password
      state.nip = action.payload.nip
      state.phone = action.payload.phone
      state.role = action.payload.role
    },
  },
})

export const { update } = userSlice.actions
export default userSlice.reducer
