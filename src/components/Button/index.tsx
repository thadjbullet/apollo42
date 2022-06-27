import React, { useState } from 'react';
import arrow from '../../assets/arrow.png';

const Button = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div className="flex justify-center align-middle border border-transparent bg-gradient-to-br from-purple-400 via-purple-500 to-blue-700 text-white rounded-full w-48 p-px">
      <button onClick={handleClick} type="button" className="flex justify-center items-center bg-black w-full rounded-full bg-opacity-60 hover:bg-transparent transition-colors">
        <span className="text-white font-thin">1 month</span>
        <img className={`ml-5 ${ click ? 'rotate-180' : ''}`} alt="arrow" src={arrow}/>
      </button>
    </div>
  )
};

export default Button;
