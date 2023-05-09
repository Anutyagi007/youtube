import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { randomNameGenerator } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      //API Polling
      dispatch(
        addMessage({
          name: randomNameGenerator(),
          message: "Okay Boss",
        })
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  const [livemessage,setLivemessage]=useState("")
  return (
    <>
      <div className="m-4 p-2 border border-black w-full h-[600px] bg-slate-100 overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((mes, index) => (
            <ChatMessage name={mes.name} message={mes.message} />
          ))}
        </div>
      </div>
      <form className="w-full p-2 ml-2 border border-black flex items-center" onSubmit={(e)=>{
        e.preventDefault()
        dispatch(addMessage({
            name:"Anubhav",
            message:livemessage
        }))
        setLivemessage("")
      }}>
        <input className="w-96 p-1 m-1" type="text" placeholder="type something here.." value={livemessage} onChange={(e)=>{
            setLivemessage(e.target.value)
        }}/>
        <button className="bg-slate-300 w-12 h-8">send</button>
      </form>
    </>
  );
};

export default LiveChat;
