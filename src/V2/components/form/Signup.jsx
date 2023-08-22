export const Signup=()=>{
    let UserInfo={}
    const saveInfo=(ev)=>{
        // if(ev.target.name==='firstName'){
        //     UserInfo.firstName=ev.target.value
        // }
        // if(ev.target.name==='lastName'){
        //     UserInfo.lastName=ev.target.value
        // }
        // if(ev.target.name==='email'){
        //     UserInfo.email=ev.target.value
        // }
        const {name, value}=ev.target
        UserInfo [name]=value;

    }
    const SignUp=(ev)=>{
        ev.preventDefault();
        console.log(UserInfo);
        

    }
    return(
        <form>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" name="firstName" id="firstName" onChange={saveInfo}/>
            <br />
            <label htmlFor="lastName">Password</label>
            <input type="text" name="lastName" id="lastName" onChange={saveInfo}/>
            <br />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" onChange={saveInfo}/>
            <br/>
            <button onClick={SignUp}>SignUp</button>
        </form>
    )
}