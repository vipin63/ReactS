import ProductList from "./components/ProductList";
import { UserStatus } from "./components/conditionals/UserStatus";
import { ConditionalEx2 } from "./components/conditionals/conditionalEX2";
import { Shoe } from "./components/props/shoe";
import { Bag } from "./components/props/Bag";
import { Mobile } from "./components/props/Mobile";
export const App = () =>{
    const spec= {screen:'14cm', battery:"4000mh", camera:"45px"};
    return(
        <>
        <h3>Stark App V2</h3>
       {/* <UserStatus/>
        <ProductList/>
    <ConditionalEx2/>*/}
    <h1>Shoes</h1>
    <Shoe brand={"Nike"} productName={"running shoe"} instock={true} price={"1700"} sizes={[7,8,9]} seller={{name:'shoes world', rating: 3}}/>
    <br/>
    <Shoe brand={"Rebook"} productName={"Formal shoe"} instock={false} price={"1000"} sizes={[4,5,7,8,9]} seller={{name:'worldclass Shoes', rating: 4}}/>
    <br/>
    <Shoe brand={"Puma"} productName={"snikers shoe"} instock={true} price={"1400"} sizes={[6,7,8]} seller={{name:'varity solution', rating: 2}}/>

    <h3>Bags</h3>
    <Bag brand={"Americam tourister"} price={1400} type={"shoulder bag"} name={"comfert bag"} rating={10}/>
<h3>Mobile</h3>
{/*<Mobile brand={"Apple"} modelName={"Iphone 13"} price={78000} Specification={{screen:'14cm', battery:"4000mh", camera:"45px"}}/>*/}
<Mobile
 brand={"Apple"}
 modelName={"Iphone 13"}
 price={78000}
 //screen={spec.screen} 
 //camera={spec.camera} 
 //battery={spec.battery}
 {...spec}
 />
        </>
    );
};