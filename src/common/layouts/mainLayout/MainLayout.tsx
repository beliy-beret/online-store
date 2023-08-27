import { Header } from 'app/components/header/Header'
import { FC, ReactNode } from 'react'
import style from './mainLayout.module.scss'

type Props = {
  children: ReactNode
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <div className={style.content}>
        <nav>Navbar</nav>
        <main className={style.main}>{children}</main>
      </div>
    </>
  )
}
