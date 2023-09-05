import styles from './SidebarMenu.module.css'
import Link from 'next/link'

const SidebarMenu = () => {
  return (
    <div className={styles.SidebarMenuContainer}>
      <Link href="/">
        <section className={styles.topMenu}>
          <h1>Cuentas Claras</h1>
          <p className={styles.version}>1.0.0</p>
        </section>
      </Link>
      <hr />
      <ul className={styles.listMenu}>
        <Link href="/movimientos">
          <li>Movimientos</li>
        </Link>
        <li>Inventario</li>
        <li>Empleados</li>
        <li>Ingresos extra</li>
        <li>Clientes</li>
        <li>Proveedores</li>
      </ul>
      <hr />
      <section className={styles.logoutContainer}>
        <h3>Cerrar sesión</h3>
      </section>
    </div>
  )
}

export default SidebarMenu
