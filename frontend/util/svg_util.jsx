import React from 'react';

export const datePickerArrow = () => {
  return (
    <svg className="date-selector-arrow" height="40" width="40">
      <line x1="5" y1="27" x2="30" y2="27" stroke="black" strokeWidth=".5"/>
      <line x1="30" y1="27" x2="22" y2="20" stroke="black" strokeWidth=".5"/>
      <line x1="30" y1="27" x2="22" y2="35" stroke="black" strokeWidth=".5"/>
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
      <line x1="10" y1="15" x2="28" y2="15" stroke="#565a5c" strokeWidth=".5"/>
      <line x1="10" y1="15" x2="15" y2="20" stroke="#565a5c" strokeWidth=".5"/>
      <line x1="10" y1="15" x2="15" y2="10" stroke="#565a5c" strokeWidth=".5"/>
    </svg>
  )
}

export const calendarRightArrow = () => {
  return (
    <svg className="left-arrow" height="30" width="40">
      <line x1="12" y1="15" x2="30" y2="15" stroke="#565a5c" strokeWidth=".5"/>
      <line x1="30" y1="15" x2="25" y2="20" stroke="#565a5c" strokeWidth=".5"/>
      <line x1="30" y1="15" x2="25" y2="10" stroke="#565a5c" strokeWidth=".5"/>
    </svg>
  )
}
