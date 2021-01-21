import React, { useState, useMemo } from 'react';
import { SpinnerCircularFixed } from 'spinners-react';
import {
  useGetBuyingParticipantsQuery,
  useGetPurchasedProductsQuery,
  Product,
  Participant,
} from '../../generated/graphql';
import {
  ReactTabulator,
  participantColumns,
  productColumns,
  tableOptions,
} from '../../utils';
import {
  Heading,
  Title,
  List,
  ListItem,
  MobileView,
  PageContainer,
  Summary,
  WebView,
} from '../../components';
import { useThemeContext } from '../../store/useThemeContext';

/**
 * Sales or Home Screen
 */
export const Sales: React.FC<{}> = () => {
  const {
    data: participantData,
    loading: loadingOne,
  } = useGetBuyingParticipantsQuery({
    fetchPolicy: 'no-cache',
  });

  const {
    data: productsData,
    loading: loadingTwo,
  } = useGetPurchasedProductsQuery({
    fetchPolicy: 'no-cache',
  });
  const {
    state: { SummaryText_COL, Summary_COL },
  } = useThemeContext();
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [totalPurchase, setTotalPurchase] = useState<number>(0);
  const [totalBalance, setTotalBalance] = useState<number>(0);

  useMemo(() => {
    if (!loadingOne && !loadingTwo && participantData && productsData) {
      setParticipants(participantData.getBuyingParticpants.buyingParticipants);
      setTotalPurchase(participantData.getBuyingParticpants.totalPurchases);
      setTotalBalance(participantData.getBuyingParticpants.totalBalances);
      setProducts(productsData.getPurchasedProducts);
    }
    return () => {};
  }, [loadingOne, loadingTwo, totalBalance, totalPurchase]);

  return (
    <PageContainer>
      <Heading>{'Event Sales'}</Heading>
      <Summary>
        <div style={{ background: Summary_COL, color: SummaryText_COL }}>
          <h3 style={{ fontWeight: 'normal' }}> Total price of purchases: </h3>
          <h3 style={{ fontWeight: 'normal' }}>
            ${' '}
            {totalPurchase
              .toFixed(2)
              .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1, ')}
          </h3>
        </div>
        <div style={{ background: Summary_COL, color: SummaryText_COL }}>
          <h3 style={{ fontWeight: 'normal' }}> Total leftover balances: </h3>
          <h3 style={{ fontWeight: 'normal' }}>
            ${' '}
            {totalBalance
              .toFixed(2)
              .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1, ')}
          </h3>
        </div>
      </Summary>
      <WebView>
        <div style={{ paddingTop: '2rem' }}>
          <Title>
            Emails of the participants who purchased real items (highlighted)
          </Title>
          {loadingOne ? (
            <div
              style={{ width: '100%', textAlign: 'center', marginTop: '2rem' }}
            >
              <SpinnerCircularFixed size={100} color={'blue'} />
            </div>
          ) : (
            <ReactTabulator
              columns={participantColumns}
              data={
                participantData
                  ? participantData.getBuyingParticpants.buyingParticipants
                  : participants
              }
              tooltips={true}
              layout={'fitdata'}
              options={tableOptions}
            />
          )}
        </div>
      </WebView>
      <WebView>
        <div style={{ paddingTop: '2rem' }}>
          <Title>Products purchased at event (highlighted)</Title>
          {loadingTwo ? (
            <div
              style={{ width: '100%', textAlign: 'center', marginTop: '2rem' }}
            >
              <SpinnerCircularFixed size={100} color={'blue'} />
            </div>
          ) : (
            <ReactTabulator
              columns={productColumns}
              data={
                productsData ? productsData?.getPurchasedProducts : products
              }
              tooltips={true}
              layout={'fitdata'}
              options={tableOptions}
            />
          )}
        </div>
      </WebView>
      <MobileView>
        <Title>Emails of the participants who purchased real items</Title>
        {loadingOne ? (
          <div
            style={{ width: '100%', textAlign: 'center', marginTop: '2rem' }}
          >
            <SpinnerCircularFixed size={75} color={'blue'} />
          </div>
        ) : (
          <List>
            {participants.map((item, index) => (
              <ListItem index={index} key={index.toString()}>
                {item.email}
              </ListItem>
            ))}
          </List>
        )}
      </MobileView>
      <MobileView>
        <Title>Products purchased at event</Title>
        {loadingTwo ? (
          <div
            style={{ width: '100%', textAlign: 'center', marginTop: '2rem' }}
          >
            <SpinnerCircularFixed size={75} color={'blue'} />
          </div>
        ) : (
          <List>
            {products.map((item, index) => (
              <ListItem index={index} key={index.toString()}>
                {item.title}
              </ListItem>
            ))}
          </List>
        )}
      </MobileView>
    </PageContainer>
  );
};
