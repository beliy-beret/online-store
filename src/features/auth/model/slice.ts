import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { authApi, type LoginData } from 'features/auth/api/authApi'

type AuthState = {
  isLoading: boolean
  errorMessage: string | null
  isLogged: boolean
}

export const signIn = createAsyncThunk<{ token: string }, LoginData>(
  'auth/signIn',
  async (authData, { rejectWithValue }) => {
    try {
      const res = await authApi.login(authData)
      return res.data
    } catch (err) {
      const errorMessage = (err as AxiosError).message
      return rejectWithValue(errorMessage)
    }
  },
)

const hasAccessToken = !!sessionStorage.getItem('token')

const initialState: AuthState = {
  isLoading: false,
  errorMessage: null,
  isLogged: hasAccessToken,
}

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.isLoading = true
      })
      .addCase(signIn.fulfilled, (state, action) => {
        sessionStorage.setItem('token', action.payload.token)
        state.isLogged = true
        state.isLoading = false
        state.errorMessage = null
      })
      .addCase(signIn.rejected, (state, action) => {
        state.errorMessage = action.error.message ? action.error.message : null
        state.isLoading = false
      })
  },
})

export default slice.reducer
