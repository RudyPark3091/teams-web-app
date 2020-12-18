import React, { useRef } from 'react';
import styled from 'styled-components';
import { useQuery, gql } from '@apollo/client';

import Loading from './Loading2';

const QUERY_USER_TASKS = gql`
query {
	userAssignedTodo(userId: "user1") {
		content
		startDate {
			year
			month
			date
		}
		endDate {
			year
			month
			date
		}
	}
}
`;

const Container = styled.div`
width: calc(100% - 250px);
height: 100%;
background-color: beige;
`;

const UserTasks = (props) => {
	const { loading, error, data } = useQuery(QUERY_USER_TASKS);

	if (loading) return <Loading mono></Loading>;
	if (error) return <Container> {`${error}`}</Container>;

	console.log(data);

	return (
		<Container>
			{data.userAssignedTodo.map((todo, i) => (
				<div key={i}>
					<span>{todo.content}</span>
					<span>{`${todo.startDate.year}-${todo.startDate.month}-${todo.startDate.date}`}</span>
					<span>{`${todo.endDate.year}-${todo.endDate.month}-${todo.endDate.date}`}</span>
				</div>
			))}
		</Container>
	);
}

export default UserTasks;

