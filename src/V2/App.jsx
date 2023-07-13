import ProductList from "./components/ProductList";
import { UserStatus } from "./components/conditionals/UserStatus";
import { ConditionalEx2 } from "./components/conditionals/conditionalEX2";
export const App = () =>{
    return(
        <>
        <h3>Stark App V2</h3>
        <UserStatus/>
        <ProductList/>
        <ConditionalEx2/>

        </>
    );
};