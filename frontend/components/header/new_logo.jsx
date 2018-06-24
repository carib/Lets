import React from 'react';

export const Logo = () => {
  return (
    <svg id='svg-logo' width='300' height='200' viewBox='0 0 250 250' xmlns="http://www.w3.org/2000/svg">
      <circle
        cx='120' cy='110' r='100'
        fill='#d6fdfa'
        stroke='#ff888f'
        strokeWidth='5'/>
      <text id='splash-logo-gel'
        x='115' y='135'
        fill='#ff888f'
        textAnchor='middle'
        fontFamily='Mrs Sheppards'
        fontSize='3em'>Lets!</text>
      <text id='splash-logo-text'
        x='115' y='130'
        fill='white'
        textAnchor='middle'
        fontFamily='Mrs Sheppards'
        fontSize='3em'>Lets!</text>
    </svg>
  )
}

export const SmallLogo = () => {
  return (
    <svg id='small-logo' width='300' height='200' viewBox='0 0 250 250' xmlns="http://www.w3.org/2000/svg">
      <circle
        cx='120' cy='110' r='100'
        fill='#d6fdfa'
        stroke='#ff888f'
        strokeWidth='5'/>
      <text id='small-logo-gel'
        x='105' y='165'
        fill='#ff888f'
        textAnchor='middle'
        fontFamily='Mrs Sheppards'
        fontSize='3em'>L</text>
      <text id='small-logo-text'
        x='105' y='155'
        fill='white'
        textAnchor='middle'
        fontFamily='Mrs Sheppards'
        fontSize='3em'>L</text>
    </svg>
  )
}
