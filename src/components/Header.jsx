import React from 'react';
import './styles/Header.css';

const Header = ({count, setCount}) => {
  return (
    <header className='header'>
      <div className='header__top'>
         <img className='header__logo' src="../assets/logo-impormedical.png" alt="logo Impormedical" />
         <div className='header__top-container'>
            <input className='header__input' type="text" placeholder='¿QUÉ ESTÁS BUSCANDO? ESCRÍBELO AQUÍ...' />
            <i className="header__search fa-solid fa-magnifying-glass"></i>
         </div>
         <a className='header__purchases'>MIS PEDIDOS</a>
         <a className='header__login'>HOLA ALIAD@
            <span className='header__login-span'>INGRESA</span>
         </a>
         <a className='header__cart' onClick={()=>setCount(0)}>
            <i className="header__cart-icon fa-solid fa-cart-shopping">
               <div className='header__count'>{count}</div>
            </i>
            CARRITO
         </a>
      </div>
      <div className='header__bottom'>
      <i className="header__menu fa-solid fa-bars"></i>
      <div className='header__container-bottom'>
         <a className='header__mobility' href='#'>
            <i className="header__icon fa-solid fa-wheelchair"></i>MOVILIDAD
         </a>
         <a className='header__home' href='#'>
            <i className="header__icon fa-solid fa-heart-circle-plus"></i>CUIDADO EN EL HOGAR
         </a>
         <a className='header__health' href='#'>
            <i className="header__icon fa-solid fa-user-tie"></i>PROFESIONALES DE LA SALUD
         </a>
         <a className='header__protection' href='#'>
            <i className="header__icon fa-solid fa-hands-bubbles"></i>TAPABOCAS Y DESINFECCIÓN
         </a>
      </div>
      </div>
    </header>
  )
}

export default Header;