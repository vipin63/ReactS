import { useEffect, useState } from "react";
export const SideEffect=()=>{
    const [Counter, setCounter]=useState(0);
    const [notype, setnotype]=useState("default")
    useEffect(()=>{
        console.log("running UseEffect-1");
    });
    useEffect(()=>{
        console.log("running UseEffect-2");
    },[]);
    useEffect(()=>{
        const type=Counter%2===0?"even":"odd";
        setnotype(type);
       console.log("running UseEffect-3");
    },[Counter]);
    const increment=()=>{
        setCounter(Counter+1);
       // console.log("counter--", Counter);
       // const type=Counter%2===0?"even":"odd";
       // setnotype(type);
    }
    return(
        <>
        <h3>SideEffect</h3>
        <div>Count:{Counter}</div>
            <button onClick={increment}>+</button>
            <div>{notype}</div>
        </>
    )

}