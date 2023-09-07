import styles from './movimientos.module.css'
import TopMenuPage from '@/components/Menu/TopMenuPage'

export default function page() {
  return (
    <main className={styles.main}>
      <TopMenuPage NamePage={'Proveedores'}></TopMenuPage>
    </main>
  )
}
