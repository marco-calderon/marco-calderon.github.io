'use client';

import Products from '@/app/components/products';
import { ProductModel } from '@/lib/models/product.model';
import { useTina } from 'tinacms/dist/react';

type StorePageContentProps = {
  query: string;
  variables: Record<string, any>;
  data: any;
};

export default function StorePageContent({ ...props }: StorePageContentProps) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const productsList = data.productsConnection.edges as {
    node: ProductModel;
  }[];

  return (
    <>
      <section
        id="header"
        className="w-full flex flex-col items-center justify-center h-[40vh]"
      >
        <h1 className="mb-8 font-extrabold text-transparent text-7xl bg-clip-text bg-linear-to-r from-green-300 to-blue-300">
          Store
        </h1>
        <h2 className="text-xl text-center text-gray-700 dark:text-white">
          Buy or try some of the products I&apos;ve worked on to fulfill your
          needs.
          <br />
          Crafted with the latest technologies.
        </h2>
      </section>

      <section id="store" className="px-4 md:px-10 lg:px-20">
        <Products
          products={
            productsList?.map((p) => p?.node as unknown as ProductModel) ?? []
          }
        />
      </section>
    </>
  );
}
