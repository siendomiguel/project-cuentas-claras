import TopMenuPage from '@/components/Menu/TopMenuPage'
import styles from './movimientos.module.css'
import BtnModalNewGain from '@/components/Modals/BtnModalNewGain'
import BtnModalNewLoss from '@/components/Modals/BtnModalNewLoss'
import BtnModalNewCashBox from '@/components/Modals/BtnModalNewCashBox'

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

const dynamic = 'force-dynamic'

export default async function page() {
  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.from('transactions').select()
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
