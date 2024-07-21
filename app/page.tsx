"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, addProductToCart } from "./global/redux";

const Page = () => {
  const adding = useDispatch();
  const data = useSelector((state: any) => state.reducer.products);
  const url = "https://669a88b39ba098ed61fffcbc.mockapi.io/stores";

  const readStore = async () => {
    return await fetch(url, {
      method: "GET",
      cache: "no-cache",
    }).then((res) => {
      return res.json();
    });
  };

  // console.log("hmm: ", readData);

  useEffect(() => {
    readStore().then((res) => {
      // console.log("show: ", res);
      adding(addProduct(res));
    });
  }, []);

  // const data = Array.from({ length: 10 });
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6  ">
      {data?.map((items: any, i: number) => (
        <div key={i} className="w-full flex justify-center items-center">
          <div className="w-[200px] min-h-[400px] border  ">
            <Image
              src={items.image}
              alt={items.title}
              width={200}
              height={200}
              className="w-full h-[300px] object-cover  "
            />

            <div className="px-2 m-3 gap-3 ">
            <p className="font-semibold text-[14px]">{items.title}</p>
            <p className=" text-[14px] text-green-400 underline">₦{items.price}</p>

            <Button
              onClick={() => adding(addProductToCart(items))}
              className="mt-3 w-[150px] h-[40px] rounded-none  bg-slate-300 font-semibold"
              >Add to Cart</Button>
            </div>

            


          </div>
  
        </div>
      ))}
    </main>
  );
};

export default Page;
