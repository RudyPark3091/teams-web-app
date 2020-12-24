import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import TodoItemMonthly from './TodoItemMonthly.js';

const Day = styled.div`
color: ${props => (
	props.sunday ? "#ff0000" :
		props.saturday ? "#0000ff" : "#959595"
)};
font-size: 20px;
font-weight: 300;
border: 1px solid #e5e5f5;
border-top: 0px;
border-left: 0px;
padding: 10px;

&:hover {
	background-color: #e5e5e5;
}
`;

const CalendarDay = React.forwardRef((props, ref) => {
	let starts, ends;
	if (props.starts) starts = props.starts;
	if (props.ends) ends = props.ends;

	return (
		<>
			<Day
				ref={ref}
				sunday={props.sunday}
				saturday={props.saturday}
			>
				<span>{props.text}</span>
				{starts ? starts.map((todo, i) => {
					if (props.text === todo.startDate.date) {
						return (
							<TodoItemMonthly key={i} color="#ff9999">
								<span>starts: {todo.content}</span>
							</TodoItemMonthly>
						)
					}
				}) : null}
				{ends ? ends.map((todo, i) => {
					if (props.text === todo.endDate.date) {
						return (
							<TodoItemMonthly key={i} color="#99ff99">
								<span>ends: {todo.content}</span>
							</TodoItemMonthly>
						)
					}
				}) : null}
			</Day>
		</>
	)
});

export default CalendarDay;

