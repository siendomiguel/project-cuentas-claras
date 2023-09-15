'use client'
import { useState } from 'react'
import CenterModal from '@/components/Modals/ModalCenter.jsx'
import styles from './BtnLogin.module.css'
import ModalAuth from '@/components/auth/ModalAuth.jsx'

const BtnLogin = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div
        className={styles.loginContainer}
        
      >
        <p>Iniciar sesión</p>
      </div>
      {showModal && (
        <CenterModal setShowModal={setShowModal}>
          <ModalAuth />
        </CenterModal>
      )}
    </>
  )
}

export default BtnLogin
