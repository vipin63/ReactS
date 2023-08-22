import { useState } from "react";
export const GetUserInfo=()=>{
    const initialState={
        firstName:'',
        lastName:'',
        email:''
    }
    const[userInfo, setuserInfo]=useState(initialState)
    const [userList, setuserList]= useState([]);
    const saveInfo=(ev)=>{
        const {name ,value}=ev.target;
        let hello;
        if(name==='email'){
            hello=value.toLowerCase();
        }else{
            hello=value.toUpperCase();
        }
       // const hello=name==='email'?value.toLowerCase():value.toUpperCase();
        userInfo[name]= hello;
        setuserInfo({...userInfo})
    }
    
    const SignUp=(ev)=>{
        ev.preventDefault();
        console.log(userInfo);
        setuserList([...userList, userInfo])
        setuserInfo(initialState);
        //make a get call by default
        //we want to make POST call
        //pass a second argument to fetch;
        const url="https://jsonplaceholder.typicode.com/users";
        //required if you want to make a call other than GET
        const option={
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(userInfo),
        }
        fetch(url, option)
        .then((res) => {
            return res.json();
        })
        .then((data)=>{
            console.log(data);
        })
        .catch((err)=>{
            console.log(err);
            
        })

    };
    return(
        <>
        <form onSubmit={SignUp}>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" name="firstName" id="firstName" value={userInfo.firstName} onChange={saveInfo}/>
            <br />
            <label htmlFor="lastName">Password</label>
            <input type="text" name="lastName" id="lastName" value={userInfo.lastName} onChange={saveInfo}/>
            <br />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={userInfo.email} id="email" onChange={saveInfo}/>
            <br/>
            {/*<button onClick={SignUp}>SignUp</button>*/}
            <input type="submit" value="SignUp"/>
        </form>
        <section>
            <ul>
                 {userList.map(({firstName, lastName, email}, i)=>{
        return<li key={i}>Name:{firstName} {lastName} email:{email}</li>
        })}
            </ul>
        </section>
        </>
    )
}