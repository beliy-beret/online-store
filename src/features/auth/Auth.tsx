import { useAppDispatch, useAppSelector } from 'common/hooks'
import { signIn } from 'features/auth/model/slice'
import { FormValues, SignIn } from 'features/auth/signIn/SignIn'
import { authSelectors } from 'features/auth/model/selectors'
import { Navigate, useLocation } from 'react-router-dom'
import css from './auth.module.scss'

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

  return (
    <section className={css.section}>
      <div className={css.greeting}>
        <h2>Welcome !</h2>
        <p>
          Use test data for authorization.
        </p>
        <code>
          <p>username: <span>johnd</span></p> 
          <p>password: <span>m38rmF$</span></p> 
        </code>
      </div>
      <div className={css.form}>
        <SignIn onSubmit={submitForSignInForm} />
      </div>
    </section>
  )
}
