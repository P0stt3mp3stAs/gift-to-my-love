import React from 'react'
import './Yeey.css';
import us from '../../Assets/us.png'
import { Link } from 'react-router-dom';

const Yeey = () => {
  return (
    <div className='allyeey'>
      <h1 className='yey'>Yeeeeeyyyyyy 😍😍😍😍</h1>
      <img src={us} alt='us' id='us' />
      <Link to='/Find_The_Heart'>
        <button className='gofind'>Find the heart</button> 
      </Link>
    </div>
  )
}

export default Yeey
