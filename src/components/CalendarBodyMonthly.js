import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import useGesture from '../hooks/useGesture.js';
import CalendarDay from './CalendarDay';

const Container = styled.div`
width: 100%;
height: calc(100% - ${props => props.headHeight ? props.headHeight : "100px"});
background-color: papayawhip;
display: grid;
grid-template-rows: repeat(6, 1fr);
grid-template-columns: repeat(7, 1fr);
`;

const lastDate = (year, month) => {
	let isLeap = false;
	if (year%4 === 0) isLeap = true;

	if (month === 3 || month === 5 || month === 8 || month === 10) return 30;
	else if (month === 1) return (isLeap ? 29 : 28);
	else return 31;
}

const initArray = (date) => {
	const nextDate = 
		date.getMonth() === 11 ?
		new Date(date.getFullYear() + 1, 0) :
		new Date(date.getFullYear(), date.getMonth() + 1);

	const prevDate =
		date.getMonth() === 0 ?
		new Date(date.getFullYear() - 1, 11) :
		new Date(date.getFullYear(), date.getMonth() - 1);

	const lastDayOfPrevMonth = lastDate(prevDate.getFullYear(), prevDate.getMonth());

	const arr = [];
	let days = 0;
	for (let i = 0; i < date.getDay(); i++) {
		arr.push(lastDayOfPrevMonth - i);
		days += 1;
	}
	arr.reverse();
	for (let i = 1; i <= lastDate(date.getFullYear(), date.getMonth()); i++) {
		arr.push(i);
		days += 1;
	}
	for (let i = 1; days < 42; i++) {
		arr.push(i);
		days += 1;
	}
	return { arr, prevDate, nextDate };
}

const CalendarBodyMonthly = (props) => {
	const d = new Date();
	const [date, setDate] = useState(new Date(d.getFullYear(), d.getMonth()));

	const { arr, prevDate, nextDate } = initArray(date);

	const onDragDown = (e) => setDate(prevDate);
	const onDragUp = (e) => setDate(nextDate);

	const ref = useGesture(onDragDown, onDragUp, 100);
	
	const [numArr, setNumArr] = useState(arr);

	return (
		<Container { ...ref } headHeight={props.headHeight}>
			{arr.map((v, i) => {
				if (i%7 === 6)
					return <CalendarDay key={i} saturday text={v}></CalendarDay>
				else if (i%7 === 0)
					return <CalendarDay key={i} sunday text={v}></CalendarDay>
				else
					return <CalendarDay key={i} text={v}></CalendarDay>
			})}
		</Container>
	);
}

export default CalendarBodyMonthly;
export { lastDate };

