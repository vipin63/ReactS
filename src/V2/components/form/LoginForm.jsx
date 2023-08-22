
export const LoginForm=()=>{
    let userName='';
    let password='';
    const getUserName=(event)=>{
        //console.log(event.target.value);
        userName=event.target.value;
           
    }
    const getPassword=(event)=>{
        password=event.target.value;
    }
    const login=(ev)=>{
        ev.preventDefault();
        console.log("12",userName);
        console.log("1",password);

    }
    return(
        <form>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" onChange={getUserName}/>
            <br />
            <label htmlFor="password">Password</label>
            <input type="passwoed" name="password" id="password" onChange={getPassword}/>
            <button onClick={login}>Login</button>
        </form>
    )
} 