import React from 'react';

export const datePickerArrow = () => {
  return (
    <svg className="arrow" viewBox="0 0 400 400" version="1.1">
      <line x1="75" y1="150" x2="300" y2="150" stroke="#545454" strokeWidth="4"/>
      <line x1="300" y1="150" x2="225" y2="75" stroke="#545454" strokeWidth="4"/>
      <line x1="300" y1="150" x2="225" y2="225" stroke="#545454" strokeWidth="4"/>
    </svg>
  )
}

export const calendarPointer = () => {
  return (
    <svg className="cal-pointer" height="10" width="20">
      <polygon points="10 0, 35 20, -15 20" stroke="#dadada" strokeWidth="1" fill="white"></polygon>
    </svg>
  )
}

export const calendarLeftArrow = () => {
  return (
    <svg className="left-arrow" height="30" width="40">
      <line x1="10" y1="15" x2="30" y2="15" stroke="#545454" strokeWidth="1"/>
      <line x1="10" y1="15" x2="15" y2="20" stroke="#545454" strokeWidth="1"/>
      <line x1="10" y1="15" x2="15" y2="10" stroke="#545454" strokeWidth="1"/>
    </svg>
  )
}

export const calendarRightArrow = () => {
  return (
    <svg className="left-arrow" height="30" width="40">
      <line x1="10" y1="15" x2="30" y2="15" stroke="#545454" strokeWidth="1"/>
      <line x1="30" y1="15" x2="25" y2="20" stroke="#545454" strokeWidth="1"/>
      <line x1="30" y1="15" x2="25" y2="10" stroke="#545454" strokeWidth="1"/>
    </svg>
  )
}
