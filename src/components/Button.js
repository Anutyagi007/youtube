import React from 'react'

const Button = (props) => {
  return (
    <div className='flex'>
        <button className='bg-gray-200 px-4 m-2 rounded-lg'>{props.name}</button>
    </div>
  )
}

export default Button