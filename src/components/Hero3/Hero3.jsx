import React from 'react';
import { motion, spring } from 'framer-motion';
import Button from '../Button/Button';
import '../Hero3/hero3.css';
import { Link } from 'react-router-dom';

 export const Hero3 = () => {

  return (
    <motion.div
      className="categoriasContainer"
      initial={{ opacity: 0, scale: 0}}
      animate={{ opacity: 1 , scale: 1 }}
      transition={{ duration: 4, delay: 1,type:"spring", stiffness: 160, damping: 20}}
    >
      <div className="categoria">
        <Link to='/categoria/tecnologia/subcategoria/pavas'>
          <img src='https://firebasestorage.googleapis.com/v0/b/tecnomagdalena-4007d.appspot.com/o/pava.jpg?alt=media&token=6152fbbd-b799-47d8-9e9c-fd7e19f30dad' className='imgCategory'></img>
          </Link>
        <h3 >Pavas</h3>
      </div>
      <div className="categoria">
        <Link to='/categoria/bazar/subcategoria/termos'>
          <img src='https://firebasestorage.googleapis.com/v0/b/tecnomagdalena-4007d.appspot.com/o/combo.jpg?alt=media&token=6fa53a5b-198f-4ff3-a4a7-0dc3b46f7450' className='imgCategory'>
            </img></Link>
        <h3>Termos</h3>
      </div>
      <div className="categoria">
      <Link to='/categoria/tecnologia/subcategoria/relojes'>
        <img src='https://firebasestorage.googleapis.com/v0/b/tecnomagdalena-4007d.appspot.com/o/reloj.jpg?alt=media&token=d7174c67-aa47-4acc-a097-22f752c6a711' className='imgCategory'></img>
        </Link>
        <h3 >Relojes</h3>
      </div>
      <div className="categoria">
        <Link to='/categoria/tecnologia/ferreteria'>
          <img src='https://firebasestorage.googleapis.com/v0/b/tecnomagdalena-4007d.appspot.com/o/OIP.jpg?alt=media&token=91299c1c-68ce-4b9c-9c8f-f8d641101b3e' className='imgCategory'></img>
        </Link>
        <h3 >Ferreteria</h3>
      </div>
      <div className="categoria">
        <Link to='/categoria/articulos/perfumeria'>
        <img src='https://firebasestorage.googleapis.com/v0/b/tecnomagdalena-4007d.appspot.com/o/perfume.jpg?alt=media&token=1c89c3fe-de82-4e53-9e0e-1426d2bd8241' className='imgCategory'></img>
        </Link>
        <h3 >Perfumeria</h3>
      </div>  
      <div className="categoria">
        <Link to='/categoria/tecnologia/subcategoria/parlantes'>
        <img src='https://firebasestorage.googleapis.com/v0/b/tecnomagdalena-4007d.appspot.com/o/parlante.jpg?alt=media&token=7f1bb126-3318-4a53-9dec-8056a1d417bb' className='imgCategory'></img>
        </Link>
        <h3 >Parlantes</h3>
      </div>
      
      
    </motion.div>
  );
};




