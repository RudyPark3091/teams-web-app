import React from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider, useQuery, gql } from '@apollo/client';

const QUERY_ALL_TODOS = gql`
query {
	todos {
		content
	}
}
`

const MainPage = (props) => {
	const { loading, error, data } = useQuery(QUERY_ALL_TODOS);

	if (loading) return <p>Loading...</p>;
	if (error) {
		console.log(error);
		return <p>error :(</p>;
	}
	
	return (
		<div>{data.todos.map(({ content }, i) => (
			<p key={i}>{content}</p>
		))}</div>
	);
}

export default MainPage;

