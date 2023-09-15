import BtnLogin from '@/components/Buttons/BtnLogin'
import styles from './page.module.css'

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

import { GithubAuth } from '@/components/auth/GithubAuthClient'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.from('posts').select()
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Bienvenido a Cuentas Claras!!</h1>
      <h3 className={styles.subtitle}>Intenta iniciar sesión para comenzar</h3>
      <section className={styles.btnLogin}>
        <BtnLogin />
        <GithubAuth />
      </section>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  )
}
