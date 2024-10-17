  
  import { MdKeyboardArrowLeft } from "react-icons/md";
  import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
  
  function Slider(){
return(
    <main className="hidden md:block sm:block">
        <div className="main">
            <div className="w-[full] h-60  bg-[#003049] ml-44 rounded-lg  mt-8 relative">
<div className=" absolute pt-[5rem] text-[6rem] cursor-pointer">
<MdKeyboardArrowLeft className="errow mr-[5rem]  hover:bg-sky-200" />

</div>
<div className=" absolute text-[4rem] ml-[55rem] pr-2 pt-[5rem] cursor-pointer">
            <MdOutlineKeyboardArrowRight className="errow  hover:bg-sky-200 " />

            </div>


                <div className=" font-serif absolute mt-8 ml-20 text-white ">
                
                    <p className=" text-[1rem]  hover:text-sky-200"> Best Deal Online On Smart Watches</p>
                   <Link href="https://www.apple.com/watch/" target="_blank"> <p className="   hover:text-sky-200 text-[3rem] font-bold flex">
                    SMART WEARABLE .</p> </Link>
                    <p className="trxt-[2rem] hover:text-yellow-500">Up Tp 80% OFF</p>
                    <p className="text-[4rem]  hover:text-sky-200">........ </p>

                </div> 
                <div className="v">
               
                <img src="https://www.apple.com/v/watch/bo/images/overview/select/product_se__frx4hb13romm_large_2x.png" alt="its a watch image"   className="h-52   pr-5 ml-[45rem] mt-1"/>
             </div>
             
            
             </div>
        </div>
    </main>
)
}
export default Slider