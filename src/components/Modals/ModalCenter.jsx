'use client'
import { IconSquareRoundedX } from '@tabler/icons-react'
import styles from './ModalCenter.module.css'

export default function CenterModal({ setShowModal, children }) {
  const handleClose = (e) => {
    if (e.target.id === 'modal') setShowModal(false)
  }

  return (
    <div className={styles.modalContainer} id={'modal'} onClick={handleClose}>
      <div className={styles.modalBody}>
        <IconSquareRoundedX className={styles.CloseModal} onClick={() => {
            setShowModal(false)
          }}/>
          {children}
      </div>
    </div>
  )
}
