import styles from './TopMenuPage.module.css'

const TopMenuPage = ({ children, NamePage }) => {
  return (
    <div className={styles.TopMenuContainer}>
      <h1>{NamePage}</h1>
      <section>
        {children}
      </section>
    </div>
  )
}

export default TopMenuPage
