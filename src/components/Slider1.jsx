import React, { useState } from 'react';
import './styles/Slider1.css';

const Slider1 = () => {

   const [indexImg, setIndexImg] = useState(0);

   const handlePrev = () => {
      if(indexImg - 1 < 0){
         setIndexImg(3);
      } else {
         setIndexImg(indexImg - 1);
      }
   }

   const handleNext = () => {
      if(indexImg + 1 > 3){
         setIndexImg(0);
      } else {
         setIndexImg(indexImg + 1);
      }
   }

  return (
   <div className='slider'>
   <button onClick={handlePrev} className='slider__prev'>&#60;</button>
   <div className='slider__static'>
      <div style={{transform: `translateX(calc(-${indexImg} / 4 * 100%))`}} className='slider__move'>
         <div className='slider__item'>
            <img
               className='slider__img'
               src="../slider1/confort.jpg"
               alt="confort"
            />
            <a className='slider__a' href='#'>Confort</a>
         </div>
         <div className='slider__item'>
            <img
               className='slider__img'
               src="../slider1/movilidad.jpg"
               alt="movilidad"
            />
            <a className='slider__a' href='#'>Movilidad</a>
         </div>
         <div className='slider__item'>
            <img
               className='slider__img'
               src="../slider1/terapia.jpg"
               alt="terapia"
            />
            <a className='slider__a' href='#'>Terapia Respiratoria</a>
         </div>
         <div className='slider__item'>
            <img
               className='slider__img'
               src="../slider1/vida.jpg"
               alt="vida"
            />
            <a className='slider__a' href='#'>Vida Diaria</a>
         </div>
      </div>
   </div>
   <button onClick={handleNext} className='slider__next'>&#62;</button>
 </div>
  )
}

export default Slider1;