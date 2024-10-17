import { FaPhone } from "react-icons/fa6";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";


import { FaWhatsapp } from "react-icons/fa";

import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-slate-700 text-white py-8">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-evenly items-center">
        
        {/* Footer Section 1: Logo and Social Media Icons (with links) */}
        <div className="mb-10 md:mb-0 font-serif">
         <Link href="#"> <div className="text-3xl font-bold mb-1 hover:text-zinc-400">MegaMart</div></Link> 
          <div className=" flex gap-6"> 
          <ol className="mb-10 space-x-2 space-y-2">
            <li className="text-white">Contact us </li> 
            <li className=" flex gap-2 text-white  cursor-pointer">
              <FaPhone 
              className="text-2xl" /> 
              <p className="hover:text-red-200"> Call us<br />+923-123-12345</p>
            </li>
            <li className="text-white  cursor-pointer flex gap-2 ">
              <FaWhatsapp 
              className="text-2xl mt-3"/>
               <p className="hover:text-red-200 mt-2"> Whats up<br />+923-123-12345</p>
                          </li>
            </ol>
            
          </div> 
          <div className="flex gap-1 ">
          <div className="play w-24 h-10 p-2 cursor-pointer bg-black rounded flex">
            <BiLogoPlayStore className="text-yellow-500 text-[1.5rem]" />
            <p className="text-[0.3rem]">Get It on <br /><span className="text-[0.6rem]">  Google play </span></p>

            </div>
            <div className="play w-24 h-10 p-2 cursor-pointer bg-black rounded flex">
            <FaApple className="text-yellow-50-500 text-[1.5rem]" />
            <p className="text-[0.4rem]">for downloads<br /> <span className="font-serif text-[0.7rem]">App Store </span></p>

            </div>
            </div>
        </div>

        {/* Footer Section 2: Most Popular Categories */}
        <div className="mb-6 md:mb-0">
          <p className="text-lg font-semibold mb-4">Most Popular Categories</p>
          <ul className="space-y-4 pb-12 ">
            <Link href="https://themothercare.pk/?srsltid=AfmBOopOM7cHmmKsYPChXlHOC0IoQYiRHKet_ZsFnwH79TIFRPmq-deS" target="_blank"><li className="hover:text-red-200 font-serif">Baby Care Items</li></Link>
            <Link href="https://www.drdoppelt.com/skincare-products/" target="_blank"><li className="hover:text-red-200 font-serif">Skin Care Items</li></Link>
            <Link href="https://qne.com.pk/collections/grocery?srsltid=AfmBOooQrBnIFaf-68b3amX0tB3AReEs1iDBlXXMyTibCUeC-s8cqwYS"target="_blank"> <li className="hover:text-red-200 font-serif">Groceries</li></Link>
            <Link href="https://en.wikipedia.org/wiki/Sports_equipment"target="_blank"> <li className="hover:text-red-200 font-serif">Sports</li></Link>
            <Link href="https://www.idealancy.pk/kitchen-accessories?srsltid=AfmBOoqiwL8ttHGX6hfzPJVvsUi2jwy_7zKckfwZZVQ4hX2KcJ-qdCn0"target="_blank"> <li className="hover:text-red-200 font-serif">Kitchen Items</li></Link>
            <Link href="https://rawayat.com.pk/collections/all?gad_source=1&gclid=Cj0KCQjwyL24BhCtARIsALo0fSDUburbZSQjHhjfTswWyus4nA3C55poDwxXj7lOFoZ3ZGTseoX6lmkaApXHEALw_wcB"target="_blank"> <li className="hover:text-red-200 font-serif">Jewelry</li></Link>
          </ul>
        </div>

        {/* Footer Section 3: Customer Service */}
        <div>
          <p className="text-lg font-semibold mb-4">Customer Service</p>
          <ol className="space-y-2 font-serif mb-4">
           <Link href="#"> <li className="hover:text-red-200 font-serif">About</li></Link>
            <li className="cursor-pointer hover:text-red-200 ">Terms and Conditions</li>
            <li className="cursor-pointer hover:text-red-200">Our Services</li>
            <li className="cursor-pointer hover:text-red-200">E-Waste Policy</li>
            <li className="cursor-pointer hover:text-red-200 ">Cancellation and Return Policy</li>
            <li className="cursor-pointer hover:text-red-200">FAQ</li>
          </ol>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
