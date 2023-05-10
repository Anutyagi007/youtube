import React from 'react'
import { useState,useRef } from 'react';

const Demo = () => {
    const[number,setNumber]=useState(0)
    const ref=useRef(0);
    let v=0;
    console.log("refs",ref.current)
    console.log("state",number)
    
    return (
      <div className="App">
        <h1>State:-{number}</h1>
        <button onClick={()=>setNumber(number+1)}>State Increment</button>
        <h1>Ref:-{ref.current}</h1>
        <button onClick={()=>ref.current+=1}> Ref Increment</button>
        <h1>Normal Variable:-{v}</h1>
        <button onClick={()=>{
           v+=1;
           console.log(v);
        }}>V Increment</button>
      </div>
    );
}

export default Demo