import React from 'react'

export default function Button({buttonText, onClick}) {
  return (
    <button className='mainButton' onClick={onClick}>
        {buttonText}
    </button>
  )
}
