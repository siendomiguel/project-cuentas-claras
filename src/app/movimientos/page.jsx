import TopMenuPage from '@/components/Menu/TopMenuPage'
import styles from './movimientos.module.css'
import BtnModalNewGain from '@/components/Modals/BtnModalNewGain'
import BtnModalNewLoss from '@/components/Modals/BtnModalNewLoss'
import BtnModalNewCashBox from '@/components/Modals/BtnModalNewCashBox'

export default function page() {
  return (
    <main className={styles.main}>
      <TopMenuPage NamePage={'Movimientos'}>
        <BtnModalNewCashBox />
        <BtnModalNewGain />
        <BtnModalNewLoss />
      </TopMenuPage>
    </main>
  )
}
