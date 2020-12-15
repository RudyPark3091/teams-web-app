import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import useTabs from '../hooks/useTabs.js';
import useGesture from '../hooks/useGesture.js';

import CalendarBodyMonthly, { lastDate } from './CalendarBodyMonthly.js';
import CalendarBodyWeekly from './CalendarBodyWeekly.js';

const Container = styled.div`
width: 100%;
height: calc(100% - ${props => props.header ? props.header : "50px"});
background-color: white;
`;

const Head = styled.div`
width: 100%;
height: ${props => props.height ? props.height : "100px"};
background-color: #66211d;
display: flex;
justify-content: space-between;
align-items: flex-start;
font-size: 70px;
font-weight: 300;

& span:nth-child(2) {
	color: white;
	margin-left: 30px;
	margin-bottom: 10px;
}

& span:nth-child(1) {
	color: white;
	font-size: 15px;
	margin-top: 20px;
	margin-left: 20px;
}

& span:nth-child(3) {
	color: white;
	font-size: 20px;
	margin-top: 50px;
	margin-left: 30px;
}
`;

const Wrapper = styled.div`
display: flex;
height: ${props => props.height};
`;

const SButton = styled.button`
width: 200px;
height: 100px;
border: none;
font-size: 1.5rem;
font-weight: 300;
color: #fff;
background-color: #933102;
outline: none;

&:hover {
	background-color: #b35132;
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
			<Head height={CALENDAR_HEAD_HEIGHT}>
				<Wrapper height={CALENDAR_HEAD_HEIGHT}>
					<span>{year}</span>
					<span>{month}</span>
					{currentItem.context === "Weekly" ? <span>{week}주차</span> : null}
				</Wrapper>
				<Wrapper height={CALENDAR_HEAD_HEIGHT}>
				{bodyContext.map((item, i) => (
					<SButton key={i} onClick={() => changeItem(i)}>{item.context}</SButton>
				))}
				</Wrapper>
			</Head>
			{currentItem.body}
		</Container>
	);
}

export default Calendar;

