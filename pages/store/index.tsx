import React from 'react';
import Layout from '../../components/Layout';
import { InferGetStaticPropsType, NextPage, NextPageContext } from 'next';
import client from '../../tina/__generated__/client';
import { ProductModel } from '../../lib/models/product.model';
import Products from '../../containers/Products';
import { useTina } from 'tinacms/dist/react';

const StorePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  ...props
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const productsList = data.productsConnection.edges;

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
          Buy some of the products I&apos;ve worked on to fulfill your needs.
        </h2>
      </section>

      <section id="store" className="px-4 md:px-10 lg:px-20">
        <Products
          products={
            productsList?.map((p) => p?.node as unknown as ProductModel) ?? []
          }
        />
      </section>
    </Layout>
  );
};

export async function getStaticProps(context: NextPageContext) {
  const { data, query, variables } = await client.queries.productsConnection();

  return {
    props: {
      data,
      query,
      variables,
    },
  };
}

export default StorePage;
