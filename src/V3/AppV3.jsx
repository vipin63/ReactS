//import { SideEffect } from "./components/SideEffect";
//import { SideEffectEx1 } from "./components/SideEffectEx1";
import { AsyncEffect } from "./components/AsyncEffect";
import { useEffect, useState } from "react";

export const AppV3 =()=>{
    const [show ,setshow]=useState(true);
    return(
        <>
            <h1>App V3</h1>
            {/* <SideEffect/> */}
            {/* <SideEffectEx1/> */}
            {show && <AsyncEffect />}
            <button onClick={()=>{setshow(!show)}}>{show?"hide":"show"}</button>
            
        </>
    )
}