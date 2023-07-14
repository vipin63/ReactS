import { Seller } from "./Seller"

export const Bag= ({brand, type, price,name,rating}) =>{
    return(
        <section style={{border:'1px solid black', padding:'10px',margin:'10px 40px'}}>
            <div>Brant: {brand} </div>
            <div>Type: {type}</div>
            <div>Price: {price}</div>
            <Seller name={name} rating={rating}/>
        </section>
    )
}