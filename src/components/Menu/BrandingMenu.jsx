import Link from "next/link"
import styles from "./BrandingMenu.module.css"
import Logo from "../../../public/Cuentas Claras.png"
import Image from "next/image"

const BrandingMenu = () => {
  return (
    <section>
      <Link href="/">
        <section className={styles.topMenu}>
        <Image src={Logo} alt="Logo" width={30} height={30} />
          <h1>Cuentas Claras</h1>
          <p className={styles.version}>1.0.0</p>
        </section>
      </Link>
      <hr />
    </section>
  )
}

export default BrandingMenu
