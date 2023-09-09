import TopMenuPage from '@/components/Menu/TopMenuPage'
import styles from './movimientos.module.css'
import BtnModalNewGain from '@/components/Modals/BtnModalNewGain'
import BtnModalNewLoss from '@/components/Modals/BtnModalNewLoss'
import BtnModalNewCashBox from '@/components/Modals/BtnModalNewCashBox'
import BasicModal from '@/components/Modals/Modal'
import FormGain from '@/components/Forms/FormGain'
import { IconArrowBigUpLines, IconCashBanknote, IconArrowAutofitRight } from '@tabler/icons-react'

export default function page() {
  return (
    <main className={styles.main}>
      <TopMenuPage NamePage={'Movimientos'}>
        <BtnModalNewCashBox />
        <BtnModalNewGain />
        <BtnModalNewLoss />
      </TopMenuPage>
      <section className={styles.ContainerListFilter}>
        <button>Transacciones</button>
        <button>Cierres de caja</button>
      </section>
      <section className={styles.ContainerTotales}>
        <div className={styles.ContainerTotalBody}>
          <span className={styles.icon}>
            <IconArrowBigUpLines />
          </span>
          <span className={styles.TitleAndTotal}>
            <p>Balance</p>
            <p>$ 123.5</p>
          </span>
        </div>
        <div className={styles.ContainerTotalBody}>
          <span className={styles.icon}>
            <IconCashBanknote />
          </span>
          <span className={styles.TitleAndTotal}>
            <p>Ventas totales</p>
            <p>$ 123.5</p>
          </span>
        </div>
        <div className={styles.ContainerTotalBody}>
          <span className={styles.icon}>
            <IconCashBanknote />
          </span>
          <span className={styles.TitleAndTotal}>
            <p>Gasto de material</p>
            <p>$ 123.5</p>
          </span>
        </div>
        <div className={styles.ContainerTotalBody}>
          <span className={styles.icon}>
            <IconArrowAutofitRight />
          </span>
          <span className={styles.TitleAndTotal}>
            <p>Gasto totales</p>
            <p>$ 123.5</p>
          </span>
        </div>
      </section>
      <section className={styles.ContainerEncabezados}>
        <p>Concepto</p>
        <p>Valor</p>
        <p>Medio de pago</p>
        <p>Fecha y hora</p>
        <p>Estado</p>
      </section>
      {/*<BasicModal setShowModal={true}>
        <FormGain />
  </BasicModal>*/}
    </main>
  )
}
