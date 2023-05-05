import React from 'react';
import { ProductModel } from '../lib/models/product.model';
import Image from 'next/image';
import Link from 'next/link';

export type ProductsProps = {
  products: ProductModel[];
};

const Products = ({ products }: ProductsProps) => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2">
      {products.map((p) => (
        <Link
          href={p.storeUrl}
          key={p.storeUrl}
          className="flex flex-row items-center justify-between w-full gap-5 p-10 text-gray-700 transition-all border border-gray-500 border-solid dark:border-gray-600 rounded-xl dark:text-white hover:text-gray-700 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-2xl font-bold">{p.title}</h2>
            <p className="text-lg">{p.description}</p>
          </div>

          {p.imgUrl ? (
            <Image
              src={p.imgUrl}
              className="w-[128px] h-auto transition-all rounded-3xl"
              alt=""
              width={128}
              height={128}
            />
          ) : null}
        </Link>
      ))}
    </div>
  );
};

export default Products;
