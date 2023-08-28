import { ComponentProps, FC } from 'react'
import style from './categories.module.scss'

type Props = ComponentProps<'section'>

export const Categories: FC<Props> = (props) => {
  return (
    <section className={style.categories} {...props}>
      <h2 className={style.title}>Categories</h2>
      <ul className={style.list}>
        <li className={style.active}>Computers</li>
        <li>Clothes</li>
        <li>Shoes</li>
        <li>Furniture</li>
        <li>Cosmetics</li>
        <li>Travel</li>
        <li>Automotive</li>
      </ul>
    </section>
  )
}
