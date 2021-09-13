import React, { useState } from 'react';
import './complete.css';
import Answers from './Answers';

import { useGobalContext } from './Context';

const Complete = () => {
  const { correctAnswer, youAnswered, info, handleHome } = useGobalContext();
  const [isAnswer, setIsAnswer] = useState(false);

  return (
    <div className='complete'>
      <div className='complete__header'>
        <h1>Quiz Done</h1>
      </div>
      <div className='complete__body'>
        <div className='complete__body__left'>
          <p>Total Questions :</p>
          <p>You Answered :</p>
          <p>Correct Answer :</p>
          <p>Wrong Answer :</p>
        </div>
        <div className='complete__body__right'>
          <p>{info.length} questions</p>
          <p>{youAnswered} questions</p>
          <p>{correctAnswer} of them</p>
          <p>{youAnswered - correctAnswer} of them</p>
        </div>
      </div>
      <div className='complete__footer'>
        <div className='complete__footer__buttons'>
          {/* <button>Take this again</button> */}

          <button onClick={() => setIsAnswer(!isAnswer)}>
            {isAnswer ? 'Hide answers' : 'Show answers'}
          </button>
        </div>
      </div>
      {isAnswer && <Answers />}
      <button onClick={handleHome} className='homeButton'>
        Back to home
      </button>
    </div>
  );
};

export default Complete;
