import { MainLayout } from 'common/layouts/mainLayout/MainLayout'
import { SaleBlock } from 'features/startPage/saleBlock/SaleBlock'
import { TrendBlock } from 'features/startPage/trendBlock/TrendBlock'

export const Home = () => {
  return (
    <>
      <MainLayout>
        <SaleBlock />
        <TrendBlock />
      </MainLayout>
    </>
  )
}
