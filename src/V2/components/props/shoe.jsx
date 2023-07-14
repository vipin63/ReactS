import { Seller } from "./Seller"
{/*export function Shoe(props){
const {brand, productName, instock, price, sizes, seller: {name, rating}}=props;*/}
export function Shoe({brand, productName, instock, price, sizes, seller: {name, rating}}){
    return(
        <section style={{border:'1px solid black', padding:'10px',margin:'10px 40px'}}>
            <div>Brant: {brand} </div>
            <div>Product Name: {productName}</div>
            <div>Price: {price}</div>
            <div>Instock: {instock?"available":"not available"} </div>
            <div>Size: {sizes.map((size ,i)=>{ 
                return <span key={i}>{size} </span>
                })}</div> 
                <Seller name={name} rating={rating}/>
        </section>
    )
}