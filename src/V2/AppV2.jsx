import { Header } from "./components/composition/Header"
import "./AppV2.css";
import { Footer } from "./components/composition/Footer";

export const AppV2 =()=>{
    return(
        <main>
            {/*<Header bgColor={'#ddd'}>*/}
           {/*  <Header device={"mobile"} >*/}
            <Header theme={'dark'} device={"mobile"} logoDesign={'circular-logo'} >
                <div>
                <label htmlFor="searchBar"></label>
                <input type="text" id="searchBar" placeholder="serch here"/>
                <button>search</button>
                </div>  
            </Header>
          <Header device={"mobile"} logoDesign={'square-logo'}/>
            <br/>
            <Footer/>
           {/* <Header theme={'dark'}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#home">Cart</a></li>
                    <li><a href="#home">Login</a></li>
                </ul>
    </Header>*/}
        </main>
    )
}