"use client"

import Link from "next/link";
import { FaCartArrowDown } from "react-icons/fa"
import { useSelector } from "react-redux";



const Header = () => {

    const cart = useSelector((state: any) => state.reducer.cart);

    return(
        <div className="w-full h-[80px] flex justify-center items-center  ">
           <div className="w-[95%] h-full flex justify-between items-center border-b ">

                   <p>Home</p>

              <div>
              <Link href="/cart">
          <section className="relative">
            {cart?.length > 0 && (
              <p className="absolute -top-2 left-2 text-white text-[8px] uppercase font-bold rounded-full bg-red-600 w-4 h-4 flex items-center justify-center">
                {cart?.length}
              </p>
            )}
            <FaCartArrowDown />
          </section>
        </Link>
              
              </div>
            </div> 
        </div>
    )
}

export default Header;