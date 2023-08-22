import { useState } from "react";
 export const PrevState=()=>{
    const [count, setCount]=useState(0);
    const increment=(no)=>{
        // setCount(count+1);
        // setCount(count+2);
        // setCount(count+3);
        // setCount(count+4);
        for(let i=1; i<=no; i++){
            setCount((prevValue)=>{
                return prevValue+i;
            });

        }
    }


    return(
        <>
        <p>Count: {count}</p>
        <button onClick={()=>increment(3)}>+3</button>
        <button onClick={()=>increment(5)}>+5</button>
        <button onClick={()=>increment(10)}>+10</button>
        </>
    )
}