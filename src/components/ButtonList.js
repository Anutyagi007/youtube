import React from "react";
import Button from "./Button";

const ButtonList = () => {
  let box=document.querySelector('.my_class')
  const btnpressprev=()=>{
    let width=box.clientWidth;
    box.scrollLeft=box.scrollLeft-width;
  }
  const btnpressnext=()=>{
    let width=box.clientWidth;
    box.scrollLeft=box.scrollLeft+width;
  }
  return (
    <div className="relative overflow-hidden p-2">
      <button onClick={btnpressprev} className="h-16 w-10 absolute flex justify-center left-0"> <p className="text-2xl  text-white">&lt;</p></button>
      <button onClick={btnpressnext} className="h-16 w-10 absolute flex justify-center align-middle right-0"> <p className="text-2xl text-white">&gt;</p></button>
      <div className="flex overflow-hidden scroll-smooth my_class">
        <Button name="All" />
        <Button name="Gaming" />
        <Button name="Live" />
        <Button name="Music" />
        <Button name="Dota 2" />
        <Button name="valorant" />
        <Button name="Web Development" />
        <Button name="React-Routers" />
        <Button name="Body-Buliding" />
        <Button name="Comedy" />
        <Button name="PUBG Mobile" />
        <Button name="Conversation" />
        <Button name="Indian Music" />
        <Button name="Web Development" />
        <Button name="React-Routers" />
        <Button name="Body-Buliding" />
        <Button name="Comedy" />
        <Button name="PUBG Mobile" />
        <Button name="Conversation" />
        <Button name="Indian Music" />
      </div>
      
    </div>
  );
};

export default ButtonList;
