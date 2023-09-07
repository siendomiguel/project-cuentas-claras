'use client'

import styles from './BtnStyles.module.css'
import { useState } from 'react'
import  BasicModal  from './Modal'
import FormLoss from '@/components/Forms/FormLoss'

const BtnModalNewLoss = () => {
  const [showModal, setShowModal] = useState(false)

  return <>
      <button className={styles.NuevoEgreso} onClick={() =>{
        setShowModal(true)
      }}>
        Nuevo egreso
      </button>
      {showModal && <BasicModal setShowModal={setShowModal}>
        <FormLoss />
      </BasicModal>}
    </>
}

export default BtnModalNewLoss
