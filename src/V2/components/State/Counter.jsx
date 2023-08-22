import { useState } from "react";
export const Counter = ()=>{
    const [count1, setCount1]=useState(0);
    const [count2, setCount2]=useState(10);
    //const increment=()=>{
    //    setCount(count+1);
    //}
    //const decrement=()=>{
    //    setCount(count-1);
    //}
   // const reset=()=>{
   //     setCount(0);
    //}
    
    return(
        <>
        <p>Count1:{count1}</p>
        <button style={{backgroundColor:'green', height:'20px', width:'70px', borderRadius:'10px'}} onClick={()=>setCount1(count1+1)}>+</button>
        <br/>
        <button style={{backgroundColor:'red', height:'20px', width:'70px', borderRadius:'10px'}} onClick={()=>setCount1(count1-1)}>-</button>
        <br/>
        <button style={{backgroundColor:'yellow', height:'20px', width:'70px', borderRadius:'10px'}} onClick={()=>setCount1(0)}>Reset</button>
        <br/><br/>
        <br/><br/>
        <p>Count2:{count2}</p>
        <button style={{backgroundColor:'green', height:'20px', width:'70px', borderRadius:'10px'}} onClick={()=>setCount2(count2+2)}>+</button>
        <br/>
        <button style={{backgroundColor:'red', height:'20px', width:'70px', borderRadius:'10px'}} onClick={()=>setCount2(count2-5)}>-</button>
        <br/>
        <button style={{backgroundColor:'yellow', height:'20px', width:'70px', borderRadius:'10px'}} onClick={()=>setCount2(10)}>Reset</button>
        
        </>
    )
}