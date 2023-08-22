import { useState } from "react";
export const AsyncStateEx=()=>{
    const [count, setCount]= useState(10);
    const add=()=>{
      //  console.log(count);
        setCount(count+1);
       // console.log(count);

    }
    return(
        <>
        <p>Count:{count}</p>
        <button onClick={add}>add</button>
        </>
    )
}