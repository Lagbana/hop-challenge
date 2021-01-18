import './App.css';
import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject,
} from '@apollo/client';
import { NavBar, Wrapper } from './components';
import styled from 'styled-components';

interface appProps {
  client: ApolloClient<NormalizedCacheObject>;
}


const App = ({ client }: appProps) => {
  const Content = styled.div`
    min-height: 80vh;
    background-color: #c4c4c4;
  `;

  return (
    <ApolloProvider client={client}>
      <NavBar />
      <Wrapper>
        <Content>YELLOW</Content>
      </Wrapper>
    </ApolloProvider>
  );
};

export default App;
