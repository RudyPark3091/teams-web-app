import React from 'react';
import styled from 'styled-components';

const TodoWrapper = styled.div`
display: flex;
color: #000000;
`;

const Circle = styled.div`
width: 16px;
height: 16px;
border-radius: 50%;
background-color: ${props => props.color ? props.color : "#e5e5e5"};
margin: 6px;
`;

const TodoItemMonthly = (props) => {
	return (
		<TodoWrapper>
			<Circle color={props.color}></Circle>
			{props.children}
		</TodoWrapper>
	)
}

export default TodoItemMonthly;

