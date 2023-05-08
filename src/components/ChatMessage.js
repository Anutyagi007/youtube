import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center p-1 '>
        <img
          className="h-6 mx-2 cursor-pointer"
          src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
          alt="user"
        />
        <span className='font-bold px-2'>{name}</span> :-
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage