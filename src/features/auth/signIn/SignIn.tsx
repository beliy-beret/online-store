import { FC } from 'react'

import { DevTool } from '@hookform/devtools'
import { useForm, Controller } from 'react-hook-form'

import css from './signIn.module.scss'

export type FormValues = {
  username: string
  password: string
}

type Props = {
  onSubmit: (data: FormValues) => void
}

export const SignIn: FC<Props> = ({ onSubmit }) => {
  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      username: '',
      password: '',
    },
  })

  const submit = (data: FormValues) => onSubmit(data)

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit(submit)}>
        <DevTool control={control} />
        <h2 className={css.title}>Sign In</h2>
        <div>
          <Controller
            name="username"
            control={control}
            render={({ field }) => <input {...field} placeholder="User name" />}
          />
        </div>
        <div>
          <Controller
            name="password"
            control={control}
            render={({ field }) => <input {...field} placeholder="Password" />}
          />
        </div>
        <div className={css.btnBlock}>
          <button type="submit">Sign In</button>
        </div>
      </form>
      <p>
        <span>Use test data:</span>
        <code>
          "username": "johnd"
          <br />
          "password": "m38rmF$"
        </code>
        <code>
          "username": "mor_2314"
          <br />
          "password": "83r5^_"
        </code>
      </p>
    </div>
  )
}
