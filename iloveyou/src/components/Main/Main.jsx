import React, { useState } from 'react';
import './Main.css';
import me from '../../Assets/me.png';
import mmssg1 from '../../Assets/mssg1.png';
import mmssg2 from '../../Assets/mssg2.png';
import mmssg3 from '../../Assets/mssg3.png';

const Main = ({ showAnswer, onShowAnswer }) => {
  const [shownMessages, setShownMessages] = useState([]);
  const [buttonText, setButtonText] = useState('Show Mssg');


  const messages = [mmssg1, mmssg2, mmssg3];

  const showNextMessage = () => {
    if (shownMessages.length < messages.length) {
      const nextMessage = messages[shownMessages.length];
      setShownMessages((prevMessages) => [...prevMessages, nextMessage]);
      if (shownMessages.length === 0) {
        setButtonText('Next Mssg...'); // Change button text after the first click
      }if (shownMessages.length === 2) {
        setButtonText('Wanna answe?'); // Change button text after the first click
      }
    } else {
      onShowAnswer(); // Show Answer when all messages are displayed
    }
  };

  return (
    <div className='main'>
      <div className='content'>
        <div className='side-content'>
          <div className='messages'>
            {shownMessages.map((message, index) => (
              <img
                key={index}
                src={message}
                alt={`message${index + 1}`}
                className={`message message-${index + 1} show`}
              />
            ))}
          </div>
          <button onClick={showNextMessage} className='nextmssg'>
            {/* Next Mssg... */}
            {buttonText}
          </button>
        </div>
        <img src={me} alt='me' id='me' />
      </div>
    </div>
  );
};

export default Main;