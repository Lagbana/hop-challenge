import React, { useState, useEffect } from 'react';
import { SpinnerCircularFixed } from 'spinners-react';
import { useGetProductsQuery, Product } from '../../generated/graphql';
import {
  ReactTabulator,
  allProductsColumns,
  tableOptions,
  getUniqueVendors,
  getInventoryValue,
  getInventoryWeight,
  Colors
} from '../../utils';
import {
  Heading,
  Card,
  Tile,
  WebView,
  MobileView,
  PageContainer,
} from '../../components';

/**
 * Inventory Screen
 */
export const Inventory: React.FC<{}> = () => {
  const { loading, data } = useGetProductsQuery({
    fetchPolicy: 'no-cache',
  });

  const [products, setProducts] = useState<Product[]>([]);

  let numberOfVendors: number = 0;
  let inventoryWeight: number = 0;
  let inventoryValue: number = 0;

  if (window.innerWidth <= 768) {
    numberOfVendors = getUniqueVendors(products);
    inventoryWeight = getInventoryWeight(products);
    inventoryValue = getInventoryValue(products);
  }

  useEffect(() => {
    if (!loading && data) {
      setProducts(data?.getAllProducts);
    }
  }, [loading]);

  return (
    <PageContainer>
      <Heading>{'Inventory'}</Heading>
      <WebView>
        {loading ? (
          <div
            style={{ width: '100%', textAlign: 'center', marginTop: '2rem' }}
          >
            <SpinnerCircularFixed size={100} color={'blue'} />
          </div>
        ) : (
          <div style={{ paddingTop: '2rem', marginBottom: '2rem' }}>
            <ReactTabulator
              columns={allProductsColumns}
              data={products}
              tooltips={true}
              layout={'fitdata'}
              options={tableOptions}
            />
          </div>
        )}
      </WebView>
      <MobileView>
        <Tile color={'white'}>
          <Card title={'Total Products'} backgroundColor={Colors.red}>
            {products.length}
          </Card>
          <Card title={'Total Vendors'} backgroundColor={Colors.green}>
            {numberOfVendors}
          </Card>
          <Card title={'Inventory Value'} backgroundColor={Colors.navyBlue}>
            $ {Math.round(inventoryValue)}
          </Card>
          <Card title={'Inventory Weight'} backgroundColor={Colors.yellow}>
            {Math.round(inventoryWeight / 1000)} kg
          </Card>
        </Tile>
      </MobileView>
    </PageContainer>
  );
};