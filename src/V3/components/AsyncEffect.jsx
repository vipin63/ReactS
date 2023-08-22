import React, { useEffect } from "react";
export const AsyncEffect=()=>{
    useEffect(()=>{
       const interval= setTimeout(()=>{
            console.log("after 2 sec show model to login");
        },2000);
        return()=>{
            console.log('clearing timeout');
            clearInterval(interval);
        }
    }, []);
    useEffect(()=>{
const intervalid=setInterval(()=>{
            console.log("interval running");
        },1000);
        return()=>{
            console.log('clearing timer');
            clearInterval(intervalid);
        }
    }, []);
    return(
        <>
        <div>AsyncEffect</div>
        </>
    )
}
