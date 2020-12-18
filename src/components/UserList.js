import React, { useRef } from 'react';
import styled from 'styled-components';
import { useQuery, gql } from '@apollo/client';

import Loading from './Loading2.js';
import UserTasks from './UserTasks.js';

const QUERY_ALL_USERS = gql`
query {
	users {
		id
		name
		color
	}
}
`;

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
`;

const Wrapper = styled.div`
width: 250px;
height: 70px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
margin: 10px 0px;
`;

const Circle = styled.div`
width: ${props => props.size ? props.size : "20px"};
height: ${props => props.size ? props.size : "20px"};
border-radius: 50%;
background-color: ${props => props.color ? props.color : "#e5e5e5"};
margin-right: 30px;
`;

const Name = styled.div`
font-size: 20px;
font-weight: 500;
`;

const UserList = (props) => {
	const { loading, error, data } = useQuery(QUERY_ALL_USERS);

	if (loading) return <Loading mono></Loading>;
	if (error) return <p>Error :(</p>;

	return (
		<Container>
			<div>
				{data.users.map((user, i) => (
					<Wrapper key={i}>
						<Circle color={user.color} size="40px"></Circle>
						<div>
							<div>{`@${user.id}`}</div>
							<Name>{user.name}</Name>
						</div>
					</Wrapper>
				))}
			</div>
			<UserTasks></UserTasks>
		</Container>
	);
}

export default UserList;

