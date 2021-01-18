import './App.css';
import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject,
} from '@apollo/client';
import { NavBar, Wrapper } from './components';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Sales, Inventory, Participants } from './pages';
interface appProps {
  client: ApolloClient<NormalizedCacheObject>;
}

const App = ({ client }: appProps) => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <NavBar />
        <Wrapper>
          <Switch>
            <Route path="/inventory">
              <Inventory />
            </Route>
            <Route path="/participants">
              <Participants />
            </Route>
            <Route path={['/', '/sales']}>
              <Sales />
            </Route>
          </Switch>
        </Wrapper>
      </Router>
    </ApolloProvider>
  );
};

export default App;
