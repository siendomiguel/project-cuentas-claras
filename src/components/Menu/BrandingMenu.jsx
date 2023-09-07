import Link from "next/link"
import styles from "./BrandingMenu.module.css"

const BrandingMenu = () => {
  return (
    <section>
      <Link href="/">
        <section className={styles.topMenu}>
          <h1>Cuentas Claras</h1>
          <p className={styles.version}>1.0.0</p>
        </section>
      </Link>
      <hr />
    </section>
  )
}

export default BrandingMenu
