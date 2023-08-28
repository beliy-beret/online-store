import { Link } from 'react-router-dom'
import style from './saleBlock.module.scss'
import sale from 'common/assets/images/sale.png'

export const SaleBlock = () => {
  return (
    <section className={style.sale}>
      <h2 className={style.title}>BIG SALE 20%</h2>
      <div>
        <p className={style.description}>the bestseller of 2023 </p>
        <p className={style.description}>
          LENNON r2d2 <br /> with NVIDIA 5090 TI
        </p>
        <Link className={style.link} to="/">
          Shop Now
        </Link>
      </div>
      <img src={sale} />
    </section>
  )
}
