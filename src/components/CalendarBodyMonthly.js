import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useQuery, gql } from '@apollo/client';

import Modal from './Modal.js';
import ModalForm from './ModalForm.js';
import useGesture from '../hooks/useGesture.js';
import CalendarDay from './CalendarDay';

import Loading from './Loading2.js';
import Error from './Error.js';

import { QUERY_ALL_TODOS } from './MainPage.js';

const Container = styled.div`
width: 100%;
height: calc(100% - ${props => props.headHeight ? props.headHeight : "100px"} + 50px);
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

	const dayRef = useRef([]);
	const modal = useRef();
	for (let i = 0; i < 42; i++) {
		dayRef.current = Array(42).fill().map((_, i) => (
			dayRef.current[i] || React.createRef()
		));
	}
	
	const [modalContext, setModalContext] = useState();
	const showModal = (e) => {
		modal.current.style.display = "block";
		setModalContext(<ModalForm></ModalForm>);
	}

	useEffect(() => {
		if (dayRef.current) {
			dayRef.current.map((ref) => {
				ref.current.addEventListener("click", showModal);
			});
		}
		return () => {
			if (dayRef.current) {
				dayRef.current.map((ref) => {
					ref.current.removeEventListener("click", showModal);
				});
			}
		};
	}, []);

	const [numArr, setNumArr] = useState(arr);

	const { loading, error, data } = useQuery(QUERY_ALL_TODOS);
	let queryStatus;
	if (loading) queryStatus = <Loading></Loading>;
	if (error) queryStatus = <Error></Error>;

	let starts, ends;
	if (data) {
		starts = data.todos.filter(todo => {
			if (todo.startDate.month === date.getMonth() + 1) return true;
		})
		ends = data.todos.filter(todo => {
			if (todo.endDate.month === date.getMonth() + 1) return true;
		})
	}
	const todoOfMonth = { starts, ends };

	return (
		<Container { ...ref } headHeight={props.headHeight}>
			{queryStatus}
			<Modal ref={modal} width="400px" height="400px">
				{modalContext}
			</Modal>
			{arr.map((v, i) => {
				if (i%7 === 6)
					return (
						<CalendarDay
							ref={dayRef.current[i]}
							key={i}
							saturday
							text={v}
							{ ...todoOfMonth }
						>
						</CalendarDay>
					)
				else if (i%7 === 0)
					return (
						<CalendarDay
							ref={dayRef.current[i]}
							key={i}
							sunday
							text={v}
							{ ...todoOfMonth }
						>
						</CalendarDay>
					)
				else
					return (
						<CalendarDay
							ref={dayRef.current[i]}
							key={i}
							text={v}
							{ ...todoOfMonth }
						>
						</CalendarDay>
					)
			})}
		</Container>
	);
}

export default CalendarBodyMonthly;
export { lastDate };

