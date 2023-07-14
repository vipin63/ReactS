export const Header=({children, theme ,device, logoDesign})=>{
   {/* let myBgColor='';
    if(!bgColor){
        myBgColor="#3d3d3d"
    }else{
        myBgColor=bgColor
    }*/}
    const Mystyle={ display:'flex',
    //flexDirection:'column',
   // gap:'10px',
    justifyContent:'space-between',
   // background:  myBgColor,
  // dynimic style
   //background: bgColor?bgColor:"#3d3d3d",
  // color:bgColor?"#3d3d3d":"#ddd",
  background:theme==='dark' ? "blue" :"gray" ,
  color:theme==='dark'?"white":"blue",
    padding:'10px',
    marginBottom:'10px'}
    if(device==='mobile'){
        Mystyle.flexDirection='column'
        Mystyle.gap="8px"
        Mystyle.alignItems="center"

    }
    
    return(
        <header style={Mystyle}
        
           /* display:'flex',
            flexDirection:'column',
            gap:'10px',
            //justifyContent:'space-between',
           // background:  myBgColor,
          // dynimic style
           //background: bgColor?bgColor:"#3d3d3d",
          // color:bgColor?"#3d3d3d":"#ddd",
          background:theme==='dark' ? "#3d3d3d" :"#ddd" ,
          color:theme==='dark'?"#ddd":"#3d3d3d",
            padding:'10px',
            marginBottom:'10px'*/
            

            
            >
            <div>Stark</div>
            {children}
          <div className={logoDesign}>Logo</div>
            {/*  <div className=".circular-logo">Logo</div>*/}
        </header>
    )
}