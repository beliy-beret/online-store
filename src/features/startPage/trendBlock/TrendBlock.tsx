import { Link } from 'react-router-dom'
import style from './trendBlock.module.scss'

export const TrendBlock = () => {
  return (
    <section className={style.trend}>
      <h2 className={style.title}>Trending</h2>
      <div></div>
      <Link className={style.link} to="/">
        See more
      </Link>
    </section>
  )
}
