import { RootState } from 'app/model/store'

const isLogged = (state: RootState) => state.auth.isLogged
const isLoading = (state: RootState) => state.auth.isLoading
const errorMessage = (state: RootState) => state.auth.errorMessage

export const authSelectors = {
  isLoading,
  isLogged,
  errorMessage,
}
