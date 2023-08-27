import { SignIn } from 'features/auth/signIn/SignIn'

export const Auth = () => {
  const submit = () => {}

  return (
    <div>
      <SignIn onSubmit={submit} />
    </div>
  )
}
