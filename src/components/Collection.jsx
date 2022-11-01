import React from 'react';
import './styles/Collection.css';

const Collection = ({count, setCount}) => {

   const handleClick = () => {
      setCount(count + 1);
   }

  return (
    <div className='collection'>
      <h2 className='collection__title'>NUEVA COLECCIÓN</h2>
      <div className='collection__container'>
         <div className='collection__item'>
            <img className='collection__img' src="../collection/g5_anterior.png" alt="g5_anterior" />
            <p className='collection__p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, vitae?</p>
            <button className='collection__btn' onClick={handleClick}>AÑADIR AL CARRITO</button>
         </div>
         <div className='collection__item'>
            <img className='collection__img' src="../collection/KBE911F-(medioperfil).jpg" alt="KBE911F-(medioperfil)" />
            <p className='collection__p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, vitae?</p>
            <button className='collection__btn' onClick={handleClick}>AÑADIR AL CARRITO</button>
         </div>
         <div className='collection__item'>
            <img className='collection__img' src="../collection/KBE1432RF-MP23L.jpg" alt="KBE1432RF-MP23L" />
            <p className='collection__p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, vitae?</p>
            <button className='collection__btn' onClick={handleClick}>AÑADIR AL CARRITO</button>
         </div>
         <div className='collection__item'>
            <img className='collection__img' src="../collection/m2000medioperfil.jpg" alt="m2000medioperfil" />
            <p className='collection__p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, vitae?</p>
            <button className='collection__btn' onClick={handleClick}>AÑADIR AL CARRITO</button>
         </div>
      </div>
    </div>
  )
}

export default Collection;