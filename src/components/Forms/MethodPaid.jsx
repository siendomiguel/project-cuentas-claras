'use client'
import styles from './MethodPaid.module.css';
import { useState } from 'react';
import { IconBuildingBank, IconCash, IconReceipt2 } from '@tabler/icons-react';

const MethodPaid = ({ setSelectedOption, selectedOption }) => {
  const [botones, setBotones] = useState([
    { id: 1, value: 'Efectivo', texto: 'Efectivo', icon: <IconBuildingBank />, seleccionado: false },
    { id: 2, value: 'Transferencia bancaria', texto: 'Transferencia bancaria', icon: <IconCash />, seleccionado: false },
    { id: 3, value: 'Otro', texto: 'Otro', icon: <IconReceipt2 />, seleccionado: false },
  ]);

  const handleBotonClick = (id, value) => {
    // Actualiza el estado para marcar el botón seleccionado
    setBotones((prevBotones) =>
      prevBotones.map((boton) => ({
        ...boton,
        seleccionado: boton.id === id
      }))
    );

    // Llama a setSelectedOption para actualizar el estado en el componente principal
    setSelectedOption(value);
  };

  return (
    <section className={styles.containerMethodPaid}>
      {botones.map((boton) => (
        <div
          key={boton.id}
          className={
            boton.seleccionado
              ? styles.MethodPaidBodySelect
              : styles.MethodPaidBody
          }
          onClick={() => handleBotonClick(boton.id, boton.value)} // Pasa el valor como argumento
        >
          <span >{boton.icon}</span>
          <p className={styles.titleMethodPaid}>{boton.texto}</p>
        </div>
      ))}
    </section>
  );
};

export default MethodPaid;
