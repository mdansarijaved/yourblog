import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    uid: null,
    error: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action) {
      if (!checkPassword(action.payload.password)) return setError(state, 'PASSWORD_MISMATCH');
      if (!validateUID(action.payload.uid)) return setError(state, 'INVALID_UID');

      state.uid = action.payload.uid;
      state.error = null;
    },
    logout(state) {
      state.uid = null;
    },
  },
})

function setError(state, error) {
  state.error = error;
  state.uid = null;
}

function checkPassword(password) {
  return password === 'xyz'
}

function validateUID(uid) {
  const pattern = /(([1-9]{2})+([A-Za-z]{3})+([1-9]{4,5}))/
  console.log(uid, pattern.test(uid))
  return pattern.test(uid)
}

export const { login, logout } = userSlice.actions
export default userSlice.reducer