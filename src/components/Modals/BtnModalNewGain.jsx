'use client'
import styles from './BtnStyles.module.css'
import { useState } from 'react'
import BasicModal from './ModalSidebar'
import FormGain from '@/components/Forms/FormGain'

const BtnModalNewGain = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <button
        className={styles.NuevoIngreso}
        onClick={() => {
          setShowModal(true)
        }}
      >
        Nuevo ingreso
      </button>
      {showModal && (
        <BasicModal setShowModal={setShowModal}>
          <FormGain />
        </BasicModal>
      )}
    </>
  )
}

export default BtnModalNewGain
