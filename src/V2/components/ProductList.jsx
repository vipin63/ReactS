import { Products } from "./ProductData";
import "./App.css";
function ProductList(){
    return(
        <main className="productList">
            <h1>Product List</h1>
           { Products.map((product)=>{
            const {name,brand,cetegory,price,id}=product;

            return(
                <section key={id} className="Product-Container">
                    <div>Name - <span style={{color:'red'}}>{name}</span></div>
                    <div>Brand - <span style={{color:'blue'}}>{brand}</span></div>
                    <div>Cetegory- <span style={{color:'green'}}>{cetegory}</span></div>
                    <div>Price - <span style={{color:'orange'}}>{price}</span></div>
                    <br/>
                    <div>
                        {/*  {price>10000?<div>Expensive</div>:null}*/}
                         {/*  {price>10000?<div>Expensive</div>:<div>Cheap</div>}*/}
                       {/*  {price>10000?<div>Expensive</div>:""} */}
                       {price>=10000 && <div>Expensive</div> }
                    </div>
            
                </section>
            )

           })}
           {/* return(
                <section key={product.id}>
                    <div>Name - <span style={{color:'red'}}>{product.name}</span></div>
                    <div>Brand - <span style={{color:'blue'}}>{product.brand}</span></div>
                    <div>Cetegory- <span style={{color:'green'}}>{product.cetegory}</span></div>
                    <div>Price - <span style={{color:'orange'}}>{product.price}</span></div>
                    <br/>
            
                </section>
            )

           })} */}
        </main>
    )
}
export default ProductList;
