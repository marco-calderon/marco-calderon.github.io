import React from 'react';
import { ProductModel } from '../lib/models/product.model';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';

export type ProductsProps = {
  products: ProductModel[];
};

const Products = ({ products }: ProductsProps) => {
  return (
    <div className="grid w-full grid-cols-1 gap-5 mx-auto md:w-3/4 lg:w-1/2">
      {products.map((p) => (
        <Link
          href={p.storeUrl}
          key={p.storeUrl}
          className="flex flex-row items-center w-full gap-5 p-6 text-gray-700 transition-all bg-black border border-transparent border-solid rounded-xl dark:text-white hover:text-gray-700 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          {p.imgUrl ? (
            <Image
              src={p.imgUrl}
              className="w-[128px] h-auto transition-all rounded-3xl"
              alt=""
              width={128}
              height={128}
            />
          ) : null}

          <div className="flex flex-col items-start gap-4">
            <h2 className="text-2xl font-bold">{p.title}</h2>
            <p className="mb-0 text-lg">{p.description}</p>

            <button
              type="button"
              className="flex flex-row items-center font-bold bg-transparent"
            >
              View
              <Icon icon="iconamoon:arrow-top-right-1" className="text-3xl" />
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
