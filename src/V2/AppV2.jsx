import { Header } from "./components/composition/Header"
import "./AppV2.css";
//import { Footer } from "./components/HelpAndFeedback/Footer";
// import {Feedback} from "./components/HelpAndFeedback/Feedback"
// import { Name } from "./components/State/Names";
// import { UserInfo } from "./components/State/UserInfo";
// import { Counter } from "./components/State/Counter";
// import {PrevState} from "./components/State/PrevState"
// import { AsyncStateEx } from "./components/State/AsyncStateEx";
// import { LoginForm } from "./components/form/LoginForm";
// import {Signup} from "./components/form/Signup"
// import { GetUserInfo } from "./components/form/GetUserInfo";
import { Formvalidation } from "./components/form/Formvalidation2";
import { Formvalidat } from "./components/form/Formvalidat";

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
            { /* <Formvalidat/>*/}
            <Formvalidation/>
            
            { /*  <PrevState/>*/}
            <br/>
            <br/>
            <br/>
            
            
            { /* <GetUserInfo/>*/}
            { /*  <Signup/> */}

            {/*<LoginForm/>*/}
            { /* <AsyncStateEx/>*/}
            
            { /*  <Counter/>*/}
            
          { /* <Name/>*/}
           { /*   <UserInfo/>*/}
         {/* <Header device={"mobile"} logoDesign={'square-logo'}/>
            <br/>
            <Footer/>
            <Feedback/>*/}
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