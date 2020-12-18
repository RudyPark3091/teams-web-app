import React, { useRef } from 'react';
import styled from 'styled-components';
import { useQuery, gql } from '@apollo/client';

import Loading from './Loading2';

const QUERY_USER_TASKS = gql`
query Todo($uid: String!) {
	userAssignedTodo(userId: $uid) {
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
background-color: #e8e8ef;
display: flex;
flex-direction: column;
`;

const Wrapper = styled.div`
width: calc(100% - 20px);
height: 100px;
background-color: #ffffff;
border-radius: 10px;
display: grid;
grid-template-columns: 4fr 1fr;
margin: 10px 20px;
`;

const Content = styled.span`
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;
`;

const Vertical = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const UserTasks = (props) => {
	const { loading, error, data } = useQuery(QUERY_USER_TASKS, {
		variables: { uid: props.uid }
	});

	if (loading) return <Loading mono></Loading>;
	if (error) return <Container> {`${error}`}</Container>;

	return (
		<Container>
			{data.userAssignedTodo.map((todo, i) => (
				<Wrapper key={i}>
					<Content>{todo.content}</Content>
					<Vertical>
						<span>{`${todo.startDate.year}-${todo.startDate.month}-${todo.startDate.date}`}</span>
						<span>{`${todo.endDate.year}-${todo.endDate.month}-${todo.endDate.date}`}</span>
					</Vertical>
				</Wrapper>
			))}
		</Container>
	);
}

export default UserTasks;

