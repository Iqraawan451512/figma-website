"use client";
 interface Iprops{

    
        text:string
    }

  const Btn =(props:Iprops)=>{
    const handleClick=()=>{
        alert(" welcome! you are one step closer to amazing deals")
        

    };

     return(
            
<button 
onClick={handleClick}

className="button">{props.text}
</button>
    );
};
export default Btn