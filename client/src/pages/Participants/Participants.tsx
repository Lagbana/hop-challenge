import React, { useState, useEffect } from 'react';
import { SpinnerCircularFixed } from 'spinners-react';
import { useGetParticipantsQuery, Participant } from '../../generated/graphql';
import {
  ReactTabulator,
  allParticipantscolumns,
  tableOptions,
  getCompaniesRepresented,
  getTotalBalances,
  getTopBalanceHolders,
  Colors,
} from '../../utils';
import {
  Heading,
  Card,
  Tile,
  PageContainer,
  WebView,
  MobileView,
} from '../../components';

/**
 * Participants Screen
 */
export const Participants: React.FC<{}> = () => {
  const { loading, data } = useGetParticipantsQuery({
    fetchPolicy: 'no-cache',
  });

  const [participants, setParticipants] = useState<Participant[]>([]);
  let companiesRepresented: number = 0;
  let totalBalance: number = 0;
  let topBalanceHolders: string[] = [];

  if (window.innerWidth <= 768) {
    companiesRepresented = getCompaniesRepresented(participants);
    totalBalance = getTotalBalances(participants);
    topBalanceHolders = getTopBalanceHolders(participants);
  }

  useEffect(() => {
    if (!loading && data) {
      setParticipants(data.getAllParticpants);
    }
    return () => {};
  }, [loading]);

  return (
    <PageContainer>
      <Heading>{'Participants'}</Heading>
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
              columns={allParticipantscolumns}
              data={data ? data?.getAllParticpants : participants}
              tooltips={true}
              layout={'fitdata'}
              options={tableOptions}
            />
          </div>
        )}
      </WebView>
      <MobileView>
        <Tile color={'white'}>
          <Card title={'Total Attendees'} backgroundColor={Colors.red}>
            {participants.length}
          </Card>
          <Card title={'Companies Represented'} backgroundColor={Colors.green}>
            {companiesRepresented}
          </Card>
          <Card title={'Total Balances'} backgroundColor={Colors.lightBlue}>
            $ {String(totalBalance).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')}
          </Card>
          <Card title={'Top 3 balance holders'} backgroundColor={Colors.yellow}>
            <ol style={{ margin: 0, paddingLeft: '15%', paddingBottom: '1rem' }}>
              <li>{topBalanceHolders ? topBalanceHolders[0] : ''}</li>
              <li> {topBalanceHolders ? topBalanceHolders[1] : ''}</li>
              <li>{topBalanceHolders ? topBalanceHolders[2] : ''}</li>
            </ol>
          </Card>
        </Tile>
      </MobileView>
    </PageContainer>
  );
};
