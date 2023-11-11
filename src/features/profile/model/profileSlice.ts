import { createSlice } from '@reduxjs/toolkit'

type ProfileState = {
  isLoading: boolean
  errorMessage: string | null
  user: User | null
}

const initialState: ProfileState = {
  isLoading: false,
  errorMessage: null,
  user: null,
}

export const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
})

export default slice.reducer

type User = {
  id: number
  email: string
  username: string
  password: string
  phone: string
  name: Name
  address: Address
}

type Name = Record<'firstname' | 'lastname', string>
type Geolocation = Record<'lat' | 'long', string>

type Address = {
  city: string
  street: string
  number: number
  zipcode: string
  geolocation: Geolocation
}
