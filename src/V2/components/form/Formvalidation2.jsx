import { useState } from "react";
export const Formvalidation=()=>{
    const noError={
        email:false,
        password:false,
    }
    const [error, seterror]=useState(noError);
    const [userInfo, setuserInfo]=useState({})
    const saveAndValidateInfo=(ev)=>{
        console.log(ev.target.value);
        if(ev.target.value===""){
            seterror({...error, [ev.target.name]: true});
        }else{
            seterror({...error, [ev.target.name]: false});
            setuserInfo({...userInfo, [ev.target.name]:ev.target.value})
        }
    }
    const SignUp=(ev)=>{
        ev.preventDefault();
        console.log(userInfo);
    }
    return(  
       <>
          <form onSubmit={SignUp}>
        <label htmlFor="email">Email</label>
        <input type="email"
         name="email"
         id="email"
         onBlur={saveAndValidateInfo}
         />
         {error.email &&(<div style={{color:"red", fontSize:"12px"}}>Plz enter the valid email</div>)}
        <br/><br/>
        <label htmlFor="password">Password</label>
        <input 
         type="password"
         name="password"
         id="password" 
         onBlur={saveAndValidateInfo} 
         //onChange={saveInfo}
         />
         {error.password &&(<div style={{color:'red',fontSize:'12px'}}>Plz enter the valid password</div>)}
        <br /><br/>
        <input type="submit" value="SignUp"/>
    </form>
       </>
    );
};