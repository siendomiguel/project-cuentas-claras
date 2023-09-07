import BtnSignOut from '../Buttons/BtnSignOut'
import BrandingMenu from '../Menu/BrandingMenu'
import DataAccount from '../Menu/DataAccount'
import Menu from '../Menu/Menu'
import styles from './SidebarMenu.module.css'

const SidebarMenu = () => {
  return (
    <div className={styles.SidebarMenuContainer}>
      <div className={styles.SidebarMenuContent}>
        <BrandingMenu />
        <section className={styles.midSection}>
          <DataAccount />
          <nav>
            <Menu namePage="Movimientos" linkName="movimientos" />
            <Menu namePage="Inventario" linkName="inventario" />
            <Menu namePage="Empleados" linkName="empleados" />
            <Menu namePage="Ingresos extra" linkName="ingresos-extra" />
            <Menu namePage="Clientes" linkName="clientes" />
            <Menu namePage="Proveedores" linkName="proveedores" />
          </nav>
        </section>
        <BtnSignOut />
      </div>
    </div>
  )
}

export default SidebarMenu
