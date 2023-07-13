import Logo from "./Logo";

function Footer(){
    const today= new Date();
    const year= today.getFullYear();
    //const val=200;
    
    
   

    return(
        <div>
            <span>All Rights Reserved &copy; </span>
            <span>{year}</span>
        </div>
    );
}
export default Footer;