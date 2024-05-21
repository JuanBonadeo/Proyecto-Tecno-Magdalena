import React from 'react';
import { useEffect,useRef, useState } from 'react';
import { motion, spring } from 'framer-motion';
import Button from '../Button/Button';
import '../Hero3/hero3.css';
import { Link } from 'react-router-dom';

export const Hero3 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const categoriasContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const topOffset = categoriasContainerRef.current.offsetTop;
      const bottomOffset = topOffset + categoriasContainerRef.current.offsetHeight;

      const scrollPosition = window.scrollY + window.innerHeight;

      if (scrollPosition > topOffset && scrollPosition < bottomOffset) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const categorias = [
    {
      link: '/categoria/tecnologia/subcategoria/pavas',
      imagen: 'https://firebasestorage.googleapis.com/v0/b/tecnomagdalena-4007d.appspot.com/o/pava.jpg?alt=media&token=6152fbbd-b799-47d8-9e9c-fd7e19f30dad',
      nombre: 'Pavas'
    }, 
    {
      link: '/categoria/bazar/subcategoria/termos',
      imagen: 'https://firebasestorage.googleapis.com/v0/b/tecnomagdalena-4007d.appspot.com/o/combo.jpg?alt=media&token=6fa53a5b-198f-4ff3-a4a7-0dc3b46f7450',
      nombre: 'Termos'
    },
    {
      link: '/categoria/tecnologia/subcategoria/relojes',
      imagen: 'https://firebasestorage.googleapis.com/v0/b/tecnomagdalena-4007d.appspot.com/o/reloj.jpg?alt=media&token=d7174c67-aa47-4acc-a097-22f752c6a711',
      nombre: 'Relojes'
    },
    {
      link: '/categoria/tecnologia/ferreteria',
      imagen: 'https://firebasestorage.googleapis.com/v0/b/tecnomagdalena-4007d.appspot.com/o/OIP.jpg?alt=media&token=91299c1c-68ce-4b9c-9c8f-f8d641101b3e',
      nombre: 'Ferreteria'
    },
    {
      link: '/categoria/tecnologia/subcategoria/parlantes',
      imagen: 'https://firebasestorage.googleapis.com/v0/b/tecnomagdalena-4007d.appspot.com/o/parlante.jpg?alt=media&token=7f1bb126-3318-4a53-9dec-8056a1d417bb',
      nombre: 'Parlantes'
    }
  ];

  const categoriasConAnimaciones = categorias.map((categoria, index) => {
    return (
      <motion.div
        key={index}
        className="categoria"
        initial={{ opacity: 0, x: -400, scale: 0}}
        animate={isVisible && { opacity: 1, x: 0, scale: 1}}
        transition={{ duration: .5, delay: index * 0.3, type:"easeInOut", stiffness: 160, damping: 20}}
      >
        <Link to={categoria.link}>
          <div className="imgCont">
            <img src={categoria.imagen} className='imgCategory' alt={categoria.nombre} />
          </div>
        </Link>
        <h3>{categoria.nombre}</h3>
      </motion.div>
    );
  });
  return (
    <div className="categoriasContainer" ref={categoriasContainerRef}>
    {categoriasConAnimaciones}
  </div>
  );
};




