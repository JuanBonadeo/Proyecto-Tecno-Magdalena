import React from 'react';
import { motion, spring } from 'framer-motion';
import Button from '../Button/Button';
import '../Hero2/hero2.css';

 export const Hero2 = () => {

  return (
    <motion.div
      className="CombosContainer"
      initial={{ opacity: 0, scale: 0}}
      animate={{ opacity: 1 , scale: 1 }}
      transition={{ duration: 4, delay: 1,type:"spring", stiffness: 160, damping: 20}}
    >
      <div className="info">
        <h2>¡Tu Termo Stanley Adventure te Espera para tu Próxima Aventura!</h2>
        <p>
        Al planificar una escapada con la familia, cada detalle cuenta para hacer la experiencia lo más placentera posible. Entre snacks, juegos para el camino y el itinerario perfecto, hay un elemento que no debe faltar: el termo Stanley Adventure.
        </p>
        <Button label='Comprar' to='todo' />
      </div>
      <img
        src='https://firebasestorage.googleapis.com/v0/b/tecnomagdalena-4007d.appspot.com/o/termo.jpg?alt=media&token=a3eda4f0-d1f9-41c1-a086-0241c5e2ad5d'
        alt='termo stanley adventure'
        className='combosImg'
      />
    </motion.div>
  );
};




