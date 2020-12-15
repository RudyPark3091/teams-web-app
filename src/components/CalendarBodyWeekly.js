import React, { useState } from 'react';
import styled from 'styled-components';

import { lastDate } from './CalendarBodyMonthly.js';
import useGesture from '../hooks/useGesture.js';

const Container = styled.div`
width: 100%;
height: calc(100% - ${props => props.headHeight ? props.headHeight : "100px"});
display: flex;
overflow-y: scroll;
`;

const WeekDay = styled.div`
width: calc(100% / 7);
background-color: ${props => (
	props.sunday ? "#ffeeee" :
		props.saturday ? "#eeeeff" : "#ffffff"
)};
border-right: 1px solid #e5e5e5;
padding: 10px;
`;

const initArray = (date) => {
	const arr = [];
	const monthlyLast = lastDate(date.getFullYear(), date.getMonth());

	for (let i = 0; i < 7; i++) {
		if (date.getDate() + i > monthlyLast) {
			arr.push((date.getDate() + i) % monthlyLast);
		} else {
			arr.push(date.getDate() + i);
		}
	}
	return arr;
}

const CalendarBodyWeekly = (props) => {
	const d = new Date();
	const [date, setDate] = useState(new Date(
		d.getFullYear(), d.getMonth(), d.getDate() - d.getDay()
	));

	const prevWeekDate = new Date(
		date.getFullYear(),
		date.getMonth(),
		date.getDate() - date.getDay() - 7
	);

	const nextWeekDate = new Date(
		date.getFullYear(),
		date.getMonth(),
		date.getDate() - date.getDay() + 7
	);

	const onDragDown = (e) => setDate(prevWeekDate);
	const onDragUp = (e) => setDate(nextWeekDate);
	const ref = useGesture(onDragDown, onDragUp, 100);

	const arr = initArray(date);

	return (
		<Container { ...ref }>
			{arr.map((v, i) => {
				if (i === 0)
					return <WeekDay key={i} sunday>{v}</WeekDay>
				else if (i === 6)
					return <WeekDay key={i} saturday>{v}</WeekDay>
				else
					return <WeekDay key={i}>{v}</WeekDay>
			})}
		</Container>
	);
};

export default CalendarBodyWeekly;

