import { useEffect, useState } from "react"
export const SideEffectEx1=()=>{
    const [count1, setcount1]=useState(0);
    const [count2, setcount2]=useState(10);
    useEffect(()=>{
        console.log("running eachTime");
    });
    useEffect(()=>{
        console.log("running one's");
    },[]);
    useEffect(()=>{
       console.log("running at count 1 and 2");
    },[count1, count2]);
    useEffect(()=>{
        console.log("running at count1");
     },[count1]);
    return(
        <>
        <div>counter 1:{count1}</div>
        <button onClick={()=>{setcount1(count1+1)}}>+</button>
        <div>counter 2:{count2}</div>
        <button onClick={()=>{setcount2(count2+1)}}>+</button>
        </>
    )

}