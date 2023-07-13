export const UserStatus= ()=>{
    const login=true;
    const glosary=true;
    if(!login){
        return <div>please login first</div>
    }
    if(glosary){
        return(
            <div>
                <h3>RS. 1 Deal</h3>
                <p>Namkeen</p>
                <p>Cool Drink</p>
            </div>
        )

    }
    return(
        <div>
            <h2>Shopping site</h2>
            <p>Mobile</p>
            <p>electronic</p>
            <p>slider</p>
            <p>book a flight</p>
        </div>
    )
}