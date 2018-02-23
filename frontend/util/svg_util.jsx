import React from 'react';

export const datePickerArrow = () => {
  return (
    <svg className="arrow" viewBox="0 0 400 400" version="1.1">
      <line x1="75" y1="150" x2="300" y2="150" stroke="black" strokeWidth="3"/>
      <line x1="300" y1="150" x2="225" y2="75" stroke="black" strokeWidth="4"/>
      <line x1="300" y1="150" x2="225" y2="225" stroke="black" strokeWidth="4"/>
    </svg>
  )
}
