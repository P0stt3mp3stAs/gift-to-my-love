import React from 'react'
import { Link } from 'react-router-dom';
import './End.css'

const End = () => {
  return (
    <div className='end'>
      <h1 className='kiss'>MOUAH 😘😘😘😘</h1>
      <Link to='/'>
        <button className='infinity'>I LOVE YOU ♾️ + 0.5</button>
      </Link>
    </div>
  )
}

export default End
