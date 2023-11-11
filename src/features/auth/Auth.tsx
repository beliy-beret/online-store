import { useAppDispatch, useAppSelector } from 'common/hooks'
import { signIn } from 'features/auth/model/slice'
import { FormValues, SignIn } from 'features/auth/signIn/SignIn'
import { authSelectors } from 'features/auth/model/selectors'
import { Navigate, useLocation } from 'react-router-dom'
import { MAIN_PAGE } from 'app/paths'

export const Auth = () => {
  const location = useLocation()

  const isLogged = useAppSelector(authSelectors.isLogged)
  const dispatch = useAppDispatch()
  const submitForSignInForm = (data: FormValues) => {
    dispatch(signIn(data))
  }

  if (isLogged) {
    return <Navigate to={location.state} />
  }

  console.log(location)
  return (
    <div>
      <SignIn onSubmit={submitForSignInForm} />
    </div>
  )
}
