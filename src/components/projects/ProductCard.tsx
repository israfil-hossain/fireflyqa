"use client";
import React from "react";


import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import { Product } from "../../../types/products";
import { Paragraph } from "../common/Paragraph";

export const Products = ({products}:{products:any}) => {

  return (
    <div>
      <div className="grid grid-cols-1  gap-20">
        {products?.map((product: Product, idx: number) => (
          <motion.div
            key={product?.href}
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.2, delay: idx * 0.1 }}
          >
            <Link
              href={product?.slug?.current ? `/projects/${product?.slug?.current}` : product?.href}
              key={product?.href}
              className="group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 bg-indigo-50 hover:bg-gray-50 rounded-2xl transition duration-200 "
            >
              <Image
                src={product?.thumbnail?.asset?.url}
                alt="product?.title"
                height="500"
                width="500"
                className=" w-96 h-[250px]"
              />
              <div className="flex flex-col justify-between px-4 py-8">
                <div>
                  <h1
                    className="font-semibold text-tintblue text-[28px] lg:text-[30px]"
                  >
                    {product?.title}
                  </h1>
                  <Paragraph className="text-sm md:text-sm lg:text-sm mt-2 max-w-xl text-start">
                    {product?.description}
                  </Paragraph>
                </div>
                <div className="flex space-x-2 md:mb-1 mt-2 md:mt-0">
                  {product?.stack?.map((stack: string) => (
                    <span
                      key={stack}
                      className="text-xs  md:text-xs lg:text-xs bg-gray-50 px-2 py-1 rounded-sm text-primary"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
