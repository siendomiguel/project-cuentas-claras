import styles from './Modal.module.css'

export default function BasicModal({ setShowModal, children }) {
  const handleClose = (e) => {
    if (e.target.id === 'modal') setShowModal(false)
  }

  return (
    <div className={styles.modalContainer} id={'modal'} onClick={handleClose}>
      <div className={styles.modalBody}>
        <span className={styles.CloseModal} onClick={() => {
            setShowModal(false)
          }}>X</span>
          {children}
      </div>
    </div>
  )
}
