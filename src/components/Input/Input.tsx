import React from 'react';
import style from './Input.module.css';

const Input: React.FC = () => {
  return (
    <input type="text" className={style.red} />
  );
}

export default Input;
