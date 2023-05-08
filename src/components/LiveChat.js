import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';


const LiveChat = () => {
    const dispatch=useDispatch();
    const chatMessages=useSelector(store=>store.chat.messages)

    useEffect(()=>{
        const interval=setInterval(()=>{

            //API Polling
            dispatch(addMessage({
                name:"Anubhav",
                message:"Okay Boss"
            }))
        },2000)
        return()=>clearInterval(interval)
    },[])
  return (
    <div className='m-4 p-2 border border-black w-full h-[600px] bg-slate-100 overflow-y-scroll'>
        {
            chatMessages.map((mes,index)=>(<ChatMessage name={mes.name} message={mes.message}/>))
        }
    </div>
  )
}

export default LiveChat