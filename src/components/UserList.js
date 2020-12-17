import React, { useRef } from 'react';
import styled from 'styled-components';
import { useQuery, gql } from '@apollo/client';

import Loading from './Loading2.js';

const QUERY_ALL_USERS = gql`
query {
	users {
		name
		color
	}
}
`;

const UserList = (props) => {
	const { loading, error, data } = useQuery(QUERY_ALL_USERS);

	if (loading) return <Loading mono></Loading>;
	if (error) return <p>Error :(</p>;

	return (
		<div>
			{data.users.map((user, i) => (
				<div key={i} style={{color:user.color}}>{user.name}</div>
			))}
		</div>
	);
}

export default UserList;

