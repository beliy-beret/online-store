import { Header } from './header/Header'
import { FC, ReactNode } from 'react'
import style from './mainLayout.module.scss'
import { Categories } from 'common/layouts/mainLayout/categories/Categories'

type Props = {
  children: ReactNode
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={style.content}>
        <Categories />
        {children}
      </main>
    </>
  )
}
