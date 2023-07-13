export const ConditionalEx2= ()=>{
    const Forgotpassword=false;
    let loginContent;
    if(Forgotpassword){
        loginContent=(
            <>
            <p>who is your fav pet?</p>
             <select name="" id="">
                <option value="">Dog</option>
                <option value="">cat</option>
                <option value="">lion</option>
                <option value="">tiger</option>
             </select>
            </>
        );
    }
    else{
        loginContent=(
            <>
            <label htmlFor="password">Password</label>
            <input type="text" id="password"/>
            </>
        );

    }
    return(
        <form action="">
            <label htmlFor="password">Password</label>
            <input type="text" id="password"/>
            {loginContent}
            
        </form>
    )
}