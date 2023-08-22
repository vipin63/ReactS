import { useState } from "react";
export const Formvalidat=()=>{
    const initialState={
        firstName:'',
        lastName:'',
        email:'',
        batch:'',
        remember:false,
    };
    const [userInfo, setuserInfo]=useState(initialState);
    const [isSubmitted, setisSubmitted]=useState(false);
    //const [showError, setshowError]=useState(false);
    const [Error, setError]=useState([]);
    const saveInfo=(ev)=>{
        const {name, value}=ev.target;
        if(name==="remember"){
            userInfo[name]=ev.target.checked
        }
        else{
            userInfo[name]=value;
        }
        setuserInfo({...userInfo})
    };
    const SignUp=(ev)=>{
        ev.preventDefault();
       // const result=Object.values(userInfo);
       // console.log(result);
       // const showError=result.includes("");
       // setshowError(showError);
         
        let errorArr = []
        for(let key in userInfo){
            if(userInfo[key]===""){
                errorArr.push(key)
            }
        }
        console.log(errorArr);  
        setError(errorArr)   
        setuserInfo(initialState);  
        setisSubmitted(true);
 

    }
    return(  
       <>
          <form onSubmit={SignUp}>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" name="firstName" id="firstName" value={userInfo.firstName} onChange={saveInfo}/>
        <br /><br/>
        <label htmlFor="lastName">Password</label>
        <input type="text" name="lastName" id="lastName" value={userInfo.lastName} onChange={saveInfo}/>
        <br /><br/>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={userInfo.email} id="email" onChange={saveInfo}/>
        <br/><br/>
        <label htmlFor="batch">Batch</label>
        <input type="text" name="batch" id="batch" value={userInfo.batch} onChange={saveInfo}/>
        <br /><br/>
        <input type="checkbox" name="remember" id="remember" value="remember" checked={userInfo.remember} onChange={saveInfo}/>
        <lebel htmlFor="remember">Remember Me</lebel>
        <br/><br/>
        {/*<button onClick={SignUp}>SignUp</button>*/}
        <input type="submit" value="SignUp"/>
    </form>
   {/* {showError&&
    <h1 style={{color:'red'}}>plz fill all the field carefully</h1>}
   */}
   {
   Error.length>0? Error.map((err,i)=>{
        return <div key={i} style={{color:'red', fontSize:'50px'}}>{err} can't be empty</div>
    }): isSubmitted && <div style={{color:'green', fontSize:'80px'}}>Success</div>
   }
       </>
    );
};