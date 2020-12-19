import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import useTabs from '../hooks/useTabs.js';
import useGesture from '../hooks/useGesture.js';

import CalendarHeader from './CalendarHeader.js';
import CalendarBodyMonthly, { lastDate } from './CalendarBodyMonthly.js';
import CalendarBodyWeekly from './CalendarBodyWeekly.js';

const Container = styled.div`
width: 100%;
height: calc(100% - ${props => props.header ? props.header : "50px"});
background-color: white;
`;

const Vertical = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`;

const Wrapper = styled.div`
display: flex;
height: ${props => props.height};
position: absolute;
right: 0px;
`;

const SButton = styled.button`
width: 200px;
height: 50px;
border: none;
font-size: 1.5rem;
font-weight: 300;
background-color: #e5e5f5;
outline: none;

&:hover {
	background-color: #d5d5e5;
}
`;

const CALENDAR_HEAD_HEIGHT = "100px";

const bodyContext = [
	{
		context: "Monthly",
		body: <CalendarBodyMonthly headHeight={CALENDAR_HEAD_HEIGHT}></CalendarBodyMonthly>
	},
	{
		context: "Weekly",
		body: <CalendarBodyWeekly headHeight={CALENDAR_HEAD_HEIGHT}></CalendarBodyWeekly>
	}
];

const getWeeksInMonth = (firstday, lastDate) => {
	let ret = 5;
	if (lastDate === 31) {
		if (firstday >= 4) ret = 6;
		else ret = 5;
	} else if (lastDate === 30) {
		if (firstday >= 5) ret = 6;
		else ret = 5;
	} else if (lastDate === 29) {
		if (firstday === 6) ret = 6;
		else ret = 5;
	}
	return ret;
}

const Calendar = (props) => {
	const d = new Date();
	const { currentItem, changeItem } = useTabs(0, bodyContext);
	const [month, setMonth] = useState(d.getMonth() + 1);
	const [year, setYear] = useState(d.getFullYear());

	const monthLastDate = lastDate(year, month - 1);
	// first day of the month
	const fd = new Date(year, month - 1);
	const [week, setWeek] = useState(
		Math.ceil((d.getDate() - d.getDay() + fd.getDay()) / 7)
	);
	const weeksInMonth = getWeeksInMonth(fd.getDay(), monthLastDate) - 1;

	const onDragDown = () => {
		if (currentItem.context === "Monthly") {
			setYear(month === 1 ? year - 1 : year);
			setMonth(month === 1 ? 12 : month - 1);
		} else if (currentItem.context === "Weekly") {
			if (week === 1) {
				setYear(month === 1 ? year - 1 : year);
				setMonth(month === 1 ? 12 : month - 1);
				setWeek(weeksInMonth);
			} else {
				setWeek(week - 1);
			}
		}
	}
	const onDragUp = () => {
		if (currentItem.context === "Monthly") {
			setYear(month === 12 ? year + 1 : year);
			setMonth(month === 12 ? 1 : month + 1);
		} else if (currentItem.context === "Weekly") {
			if (week === weeksInMonth) {
				setYear(month === 12 ? year + 1 : year);
				setMonth(month === 12 ? 1 : month + 1);
				setWeek(1);
			} else {
				setWeek(week + 1);
			}
		}
	}
	const ref = useGesture(onDragDown, onDragUp, 100);

	useEffect(() => {
		setMonth(new Date().getMonth() + 1);
		setYear(new Date().getFullYear());
		setWeek(Math.ceil((d.getDate() - d.getDay() + fd.getDay()) / 7));
	}, [currentItem]);

	return (
		<Container { ...ref } header={props.header}>
			<CalendarHeader height={CALENDAR_HEAD_HEIGHT}>
				<Wrapper>
					{bodyContext.map((item, i) => (
						<SButton key={i} onClick={() => changeItem(i)}>{item.context}</SButton>
					))}
				</Wrapper>
			</CalendarHeader>
			{currentItem.body}
		</Container>
	);
}

export default Calendar;

