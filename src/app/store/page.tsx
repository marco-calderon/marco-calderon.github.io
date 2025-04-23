import React from 'react';
import client from '../../../tina/__generated__/client';
import StorePageContent from './components/store-page-content';

export default async function ProductsPage() {
  const { data, query, variables } = await client.queries.productsConnection();

  return <StorePageContent data={data} query={query} variables={variables} />;
}
