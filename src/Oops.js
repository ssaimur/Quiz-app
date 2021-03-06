import React from 'react';
import './oops.css'
import { useGobalContext } from "./Context";

const Oops = () => {
    const {handleHome} = useGobalContext();
    return (
        <div className='oops'>
            <p className='oops__header'>Oops!</p>
            <p className='oops__body'>This set of question doesn't exist yet, try another set of question</p>
            <div className="oops__button">
                <button onClick={handleHome}>Back to home</button>
            </div>
        </div>
    )
}

export default Oops
