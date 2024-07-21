"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToCart,
  deleteProduct,
  removeProductToCart,
} from "../global/redux";

const page = () => {
  //   const data = Array.from({ length: 10 });
  const data = useSelector((state: any) => state.reducer.cart);
  const adding = useDispatch();

  const cost = data
    .map((el: any) => {
      return el.qty * parseInt(el.price);
    })
    .reduce((a: number, b: number) => {
      return a + b;
    }, 0);

  return (
    <main>
      <section className="my-10 flex border-b pb-5 items-center ">
        <p className="border-r pr-3 md:pr-5 text-[14px] md:">Total Items: {data?.length} </p>
        <p className="border-r px-3 md:pr-5 text-[14px]">Total Cost: ₦{cost.toLocaleString()} </p>
        <Button >Process to Payment</Button>
      </section>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ">
      {data?.map((items: any, i: number) => (
        <div key={i} className="w-[300px] min-h-[500px] ">
          <div  className="w-[260px] min-h-[400px] border  ">
            <Image
              src={items.image}
              alt={items.title}
              width={200}
              height={200}
              className="w-full h-[300px] object-cover  "
            />

          <div className="px-2 my-3 gap-3 f">
            <p className="font-semibold text-[14px]">{items.title}</p>
            <p className="font-semibold mt-2 text-[15px] text-green-400 underline ">
                  ₦{(parseInt(items.price) * items.qty).toLocaleString()}
                </p>

              <div className="w-full flex mt-3 gap-3 lex justify-between items-center">

              <div className="gap-3 flex flex-col">
                <Button className="w-[100px] h-[40px] bg-slate-400 text-white hover:bg-slate-300">
                  Buy now
                </Button>
                <Button className="w-[100px] h-[40px] bg-green-300  hover:bg-green-300"  onClick={() => {
                      adding(deleteProduct(items));
                    }}
                  >
                  Delete
                </Button>
              </div>

              <p className="text-[20px] font-bold">{items.qty}</p>

              <div className="gap-3 flex flex-col">
                 <Button className="w-[60px] h-[40px] bg-green-400 text-white font-bold" onClick={() => {
                      adding(addProductToCart(items));
                    }}>
                   +
                 </Button>

                 <Button className="w-[60px] h-[40px] bg-slate-400 text-white font-bold"   onClick={() => {
                      adding(removeProductToCart(items));
                    }}>
                   -
                 </Button>
              </div>

              </div>

            </div>

            
        </div>
        </div>
      ))}
      </main>
    </main>
  );
};

export default page;




// {data?.map((items: any, i: number) => (
//   <div key={i} className="border rounded-md p-1 flex flex-col min-h-[400px] gap-4">
//     <Image
//       src={items.image}
//       alt="My Image"
//       width={100}
//       height={100}
//       className="h-[200px] w-full object-cover rounded-md"
//     />

//     <div className="flex text-[12px] justify-between mt-2 px-2 ">
//       <div className="flex flex-col">
//         <h1 className="font-bold ">{items.title}</h1>
//         {/* <p className="flex-1">{items.description}</p> */}
//         <p className="font-semibold mt-2 text-[15px]">
//           ₦{(parseInt(items.price) * items.qty).toLocaleString()}
//         </p>
//         <div className="flex-1 flex gap-3">
//           <Button
//             className="text-[12px] mb-2"
//             onClick={() => {
//               console.log("Amount to Pay: ", items.price * items.qty);
//             }}
//           >
//             Buy Now
//           </Button>
//           <Button
//             variant={"destructive"}
//             className="text-[12px] mb-2"
//             onClick={() => {
//               dispatch(deleteProduct(items));
//             }}
//           >
//             Delete
//           </Button>
//         </div>
//       </div>
//       <div className="flex items-center gap-4">
//         <p className="text-[20px] font-bold">{items.qty}</p>

//         <div className="flex flex-col">
//           <Button
//             className="text-[12px] mb-2"
//             onClick={() => {
//               dispatch(addProductToCart(items));
//             }}
//           >
//             +
//           </Button>
//           <Button
//             variant={"destructive"}
//             className="text-[12px] mb-2"
//             onClick={() => {
//               dispatch(removeProductToCart(items));
//             }}
//           >
//             -
//           </Button>
//         </div>
//       </div>
//     </div>
//   </div>
// ))}