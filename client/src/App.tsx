import React from 'react';
import './App.css';
import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject,
} from '@apollo/client';
import { NavBar, Wrapper, ThemeContainer } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Sales, Inventory, Participants } from './pages';
import { ThemeProvider } from './store/ThemeProvider';

interface AppProps {
  client: ApolloClient<NormalizedCacheObject>;
}

const App = ({ client }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <ThemeProvider>
          <NavBar />
          <ThemeContainer>
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
          </ThemeContainer>
        </ThemeProvider>
      </Router>
    </ApolloProvider>
  );
};

export default App;
