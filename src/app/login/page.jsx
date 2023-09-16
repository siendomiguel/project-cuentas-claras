import GithubAuth from "@/components/auth/GithubAuthClient"
import styles from './loginPage.module.css'

export const dynamic = 'force-dynamic'

export default function Login () {
  return (
    <div className={styles.container}>
      <div className={styles.containerLogin}>
        <h1 className={styles.title}>Iniciar sesión</h1>
        <div className={styles.containerButtonsLogin}>
            <GithubAuth />
        </div>
      </div>
    </div>
  )
}