import React from 'react'

const Button = (props) => {
  return (
    <>
        <button className='bg-gray-200 px-4 m-2 rounded-lg'>{props.name}</button>
    </>
  )
}

export default Button