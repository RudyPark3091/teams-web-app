import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider, useQuery, gql } from '@apollo/client';

import App from './App';

const client = new ApolloClient({
	uri: 'http://localhost:8080/graphql',
	cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
		<ApolloProvider client={client}>
			<App width="400px"/>
		</ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

