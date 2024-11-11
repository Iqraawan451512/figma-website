"use client";
 interface Iprops{

    
        text:string
    }

  const Button =(props:Iprops)=>{
    const handleClick=()=>{
        alert("sign uped want to stay here need to sign in again")
        

    };
    
    



    
    
    
     return(
            
<button 
onClick={handleClick}

className="button">{props.text}
</button>






    );
};
export default Button