import React from 'react';
import './loading.css';

const Loading = () => {
  return (
    <div className='loading'>
      <div className='loading__div'>
        <div className='loading-1 load'></div>
        <div className='loading-2 load'></div>
        <div className='loading-3 load'></div>
        <div className='loading-4 load'></div>
        <div className='loading-5 load'></div>
      </div>
    </div>
  );
};

export default Loading;
