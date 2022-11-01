import React from 'react';
import './styles/Banner.css';

const Banner = () => {
  return (
    <section className='banner'>
      <img
         className='banner__img'
         src="/assets/banner-impormedical.png"
         alt="Banner impormedical"
      />
      <button className='banner__btn'>VER PRODUCTOS</button>
    </section>
  )
}

export default Banner;