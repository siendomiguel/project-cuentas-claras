'use client'
import { useState } from 'react'
import styles from './FormGainStyles.module.css'
import { IconBusinessplan } from '@tabler/icons-react'
import MethodPaid from './MethodPaid'

function FormGain({ onRegisterUpdated }) {
  const [isFetching, setIsFetching] = useState(false)
  const [selectedOption, setSelectedOption] = useState('');


  const onSubmit = async (e) => {
    e.preventDefault()

    console.log('Opción seleccionada:', selectedOption);

    //    console.log(e.target)

    const requestBody = {
      name: e.target.nameServices.value,
      value: e.target.priceServices.value,
      priceMaterial: e.target.priceMaterial.value,
      paymentMethod: selectedOption,
      madeBy: e.target.selectPersonal.value,
      typeRegister: 'Ingreso',
      category: 'Servicio'
    }

    console.log(requestBody)

    setIsFetching(true)

    /*     try {
      const res = await fetch(
        'https://ohlala-server-a4bj-dev.fl0.io/api/v1/registro',
        {
          method: 'POST',
          body: JSON.stringify(requestBody),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )

      if (res.ok) {
        const data = await res.json()
        console.log(data)
        console.log(res)

        // Llama a la función onRegisterUpdated para actualizar los registros en ListRegister
        if (typeof onRegisterUpdated === 'function') {
          onRegisterUpdated()
        }
      } else {
        console.error('Error al enviar el formulario:', res.statusText)
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error)
    } finally {
      setIsFetching(false)
    } */
  }

  return (
    <div className={styles.cardFormContainer}>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.titleForm}>
          <span className={styles.bgIconColor}>
            <IconBusinessplan className={styles.ColorIcon} />
          </span>
          <h3>Registrar venta</h3>
        </div>
        <hr className={styles.divisor} />
        <p className={styles.Attention}>
          Todos los campos marcados con{' '}
          <span className={styles.obligatorio}>(*)</span> son obligatorios.
        </p>
        <label htmlFor="nameServices" className={styles.labelForm}>
          Nombre de la venta <span className={styles.obligatorio}>*</span>
        </label>
        <input
          id="nameServices"
          type="text"
          className={styles.inputForm}
          placeholder="Nombre de la venta o ingreso"
        />
        <label htmlFor="priceServices" className={styles.labelForm}>
          Valor de la venta <span className={styles.obligatorio}>*</span>
        </label>
        <input
          id="priceServices"
          type="number"
          className={styles.inputForm}
          placeholder="Coloca el valor de la venta"
        ></input>
        <label htmlFor="priceMaterial" className={styles.labelForm}>
          Gasto asociado <span className={styles.Attention}>Opcional</span>
        </label>
        <input
          id="priceMaterial"
          type="number"
          className={styles.inputForm}
          placeholder="Coloca algun gasto asociado de la venta"
        ></input>
        <label htmlFor="selectPaid" className={styles.labelForm}>
          Selecciona el metodo de pago{' '}
          <span className={styles.obligatorio}>*</span>
        </label>

        <MethodPaid setSelectedOption={setSelectedOption} selectedOption={selectedOption} />


        <label htmlFor="selectPersonal" className={styles.labelForm}>
          Selecciona el personal <span className={styles.obligatorio}>*</span>
        </label>
        <select
          name="seleccionar personal"
          id="selectPersonal"
          className={styles.selectPersonal}
        >
          <option value="Maritza Avila">Maritza Avila</option>
          <option value="Laurimar">Laurimar</option>
          <option value="Del valle">Del Valle</option>
          <option value="Genesis Paola">Genesis Paola</option>
        </select>
        <button className={styles.btnForm}>Crear registro</button>
      </form>
    </div>
  )
}

export default FormGain
