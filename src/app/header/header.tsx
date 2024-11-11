import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
import { AiFillProfile } from "react-icons/ai";
import { BsCartFill } from "react-icons/bs";
import Button from "../component/button";
import Btn from "../component/button-2";

function Header_main() {
  return (
    <main className="bg-white w-full border-b border-gray-200"> 
      <nav className="flex justify-between items-center p-3 lg:px-6">
        {/* Logo and Hamburger Menu */}
        <div className="flex items-center gap-2 font-extrabold text-xl text-blue-950">
          <FaBars className="text-2xl hidden " /> {/* Hamburger only on small screens */}
          <Link href="" className="text-2xl ">
            MegaMart
          </Link>
        </div>

        {/* Search bar */}
        <div className="relative flex-1 max-w-full sm:w-[300px] md:w-[70%] mx-4 lg:mx-10">
          <Link href="" className="absolute left-2 top-2">
            <BsSearch className="text-gray-600 cursor-zoom-in" />
          </Link>
          <input
            type="text"
            placeholder="what you want?"
            className=" place border  text-xs border-gray-400 w-full py-2 pl-6 pr-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
          />
          <AiFillProfile className="absolute right-2 top-2 text-gray-600 h-6 font-bold " />
        </div>

        {/* Account and Cart */}
        <div className="flex items-center gap-6 mr-4">
          {/* Sign Up / Sign In */}
          <div className="flex items-center gap-2">
            <RiAccountCircleFill className="text-gray-600  hover:text-[#f6aa1c]  cursor-wait  font-bold " />
            <span className="text-sm text-black hidden lg:block hover:text-[#f6aa1c] cursor-grabbing font-bold font-serif"> 
            <Button text="Sign UP/"/></span>
            
            <span className="text-sm text-black hidden lg:block hover:text-[#f6aa1c]  cursor-help font-bold font-serif">
              <Btn text="Sign In"/> </span>

          </div>

          {/* Cart */}
          <div className="flex items-center gap-2">
            <BsCartFill className="text-gray-600 hover:text-[#f6aa1c]" />
            <Link href="" className="text-sm  hidden lg:block hover:text-[#f6aa1c] font-serif font-bold">
              Cart
            </Link>
          </div>
        </div>
      </nav>
    </main>
  );
}

export default Header_main;
