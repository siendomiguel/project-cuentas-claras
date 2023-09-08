import TopMenuPage from '@/components/Menu/TopMenuPage'
import styles from './movimientos.module.css'
import BtnModalNewGain from '@/components/Modals/BtnModalNewGain'
import BtnModalNewLoss from '@/components/Modals/BtnModalNewLoss'
import BtnModalNewCashBox from '@/components/Modals/BtnModalNewCashBox'
import BasicModal from '@/components/Modals/Modal'
import FormGain from '@/components/Forms/FormGain'

export default function page() {
  return (
    <main className={styles.main}>
      <TopMenuPage NamePage={'Movimientos'}>
        <BtnModalNewCashBox />
        <BtnModalNewGain />
        <BtnModalNewLoss />
      </TopMenuPage>
      <BasicModal setShowModal={true}>
        <FormGain />
      </BasicModal>
    </main>
  )
}
