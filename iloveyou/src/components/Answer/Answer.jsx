import React from 'react';
import './Answer.css';
import { Link } from "react-router-dom";

const Answer = () => {

  return (
    <div className='Answer'>
      <div className='answer-section'>
        <button  className='answer-btn'>
          Answer him
        </button>
          <div className='options'>
            <Link to='/Yey'>
              <button className='love-button'>
                I love youu tooo ❤️❤️
              </button> 
            </Link>
            <button className='thank-button' >
              Thank you but i don’t 😕
            </button>
          </div>
      </div>

    </div>
  );
};

export default Answer;