import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import heart from '../../Assets/heart.png'
import './Heart.css'



const Heart = () => {
  useEffect(() => {
    const hearts = document.querySelectorAll('.heart');

    const changePositionAndRotation = () => {
      hearts.forEach((heart) => {
        const randomX = Math.random() * (window.innerWidth - 60);
        const randomY = Math.random() * (window.innerHeight - 60);
        const randomRotation = Math.random() * 360;

        heart.style.left = `${randomX}px`;
        heart.style.top = `${randomY}px`;
        heart.style.transform = `rotate(${randomRotation}deg)`;
      });
    };

    const interval = setInterval(changePositionAndRotation, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='heart-container'>
      <Link to='/I_love_u'>
        <img src={heart} alt='heart' className='heart' />
      </Link>
      <img src={heart} alt='heart' className='heart' />
      <img src={heart} alt='heart' className='heart' />
      <img src={heart} alt='heart' className='heart' />
      <img src={heart} alt='heart' className='heart' />
    </div>
  )
}

export default Heart