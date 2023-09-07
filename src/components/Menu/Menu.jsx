import Link from 'next/link'
import styles from './Menu.module.css'

const Menu = ({ namePage, linkName }) => {
  return (
    <Link href={`/${linkName}`} className={styles.menuContainer}>
        {namePage}
    </Link>
  )
}

export default Menu
