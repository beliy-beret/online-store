import { FC } from 'react'

import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, Controller } from 'react-hook-form'

import css from './signIn.module.scss'
import { loginSchema, type FormValues } from './validation'

type Props = {
  onSubmit: (data: FormValues) => void
}

export const SignIn: FC<Props> = ({ onSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: 'email',
      password: 'password',
      rememberMe: false,
    },
    resolver: zodResolver(loginSchema),
  })

  const submit = (data: FormValues) => onSubmit(data)

  return (
    <form className={css.form} onSubmit={handleSubmit(submit)}>
      <DevTool control={control} />
      <h2 className={css.title}>Sign In</h2>
      <div>
        <Controller
          name="email"
          control={control}
          render={({ field }) => <input {...field} />}
        />
      </div>
      <div>
        <Controller
          name="password"
          control={control}
          render={({ field }) => <input {...field} />}
        />
      </div>
      <div className={css.btnBlock}>
        <button type="submit">Sign In</button>
        <p className={css.title}>Don&apos;t have an account?</p>
        <a className={css.signUpLink} href="/">
          Sign Up
        </a>
      </div>
    </form>
  )
}
