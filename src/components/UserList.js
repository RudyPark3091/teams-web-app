import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useQuery, gql } from '@apollo/client';

import Loading from './Loading2.js';
import Error from './Error.js';
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
margin: 10px 10px;
background-color: #f8f8ff;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
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
	const [userFocus, setUserFocus] = useState(0);

	const user = useRef();

	const handleClick = (e) => {
		const id = e.target.dataset.uid;
		if (id) setUserFocus(id);
	};

	useEffect(() => {
		if (user.current) {
			user.current.addEventListener("click", handleClick);
		}
		return () => {
			if (user.current) {
				user.current.removeEventListener("click", handleClick);
			}
		}
	}, [loading]);

	if (loading) return <Loading mono></Loading>;
	if (error) return <Error></Error>;

	return (
		<Container>
			<div ref={user}>
				{data.users.map((user, i) => (
					<Wrapper key={i} data-uid={user.id}>
						<Circle color={user.color} size="40px" data-uid={user.id}></Circle>
						<div>
							<div data-uid={user.id}>{`@${user.id}`}</div>
							<Name data-uid={user.id}>{user.name}</Name>
						</div>
					</Wrapper>
				))}
			</div>
			<UserTasks uid={userFocus}></UserTasks>
		</Container>
	);
}

export default UserList;

