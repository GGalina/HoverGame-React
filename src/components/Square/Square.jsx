import React from 'react';
import s from './Square.module.scss';

export const Square = ({ color, onHover }) => {
  const style = {
    backgroundColor: color,
  };

  return (
    <div className={s.square} style={style} onMouseOver={onHover}/>
  );
};

