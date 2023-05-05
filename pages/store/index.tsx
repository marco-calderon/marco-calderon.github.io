import React from 'react';
import Layout from '../../components/Layout';
import { InferGetStaticPropsType, NextPage, NextPageContext } from 'next';
import client from '../../tina/__generated__/client';
import { ProductModel } from '../../lib/models/product.model';
import Products from '../../containers/Products';

const StorePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout title="Store - Marco Calderon">
      <section
        id="header"
        className="w-full flex flex-col items-center justify-center h-[40vh]"
      >
        <h1 className="mb-8 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-300">
          Store
        </h1>
        <h2 className="text-lg text-gray-700 dark:text-gray-400">
          Projects that could help you which I&apos;ve developed.
        </h2>
      </section>

      <section id="store" className="px-4 md:px-10 lg:px-20">
        <Products products={products ?? []} />
      </section>
    </Layout>
  );
};

export async function getStaticProps(context: NextPageContext) {
  const { data } = await client.queries.productsConnection({
    sort: 'createdDate',
    last: 100,
  });
  const products = data.productsConnection.edges?.map(
    (x) => x?.node as unknown as ProductModel
  );

  return {
    props: {
      products,
    },
  };
}

export default StorePage;
