import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
width: 100%;
height: calc(${props => props.height ? props.height : "100px"} - 3px);
background-color: #ffffff;
border-bottom: 1px solid #e5e5f5;
display: flex;
justify-content: space-between;
align-items: flex-start;
font-size: 70px;
font-weight: 300;

& span:nth-child(2) {
	margin-left: 30px;
	margin-bottom: 10px;
}

& span:nth-child(1) {
	font-size: 15px;
	margin-top: 20px;
	margin-left: 20px;
}

& span:nth-child(3) {
	font-size: 20px;
	margin-top: 50px;
	margin-left: 30px;
}
`;

const WeekDaysColumn = styled.div`
width: 100%;
height: 30px;
border-top: 1px solid #e5e5f5;
display: grid;
grid-template-columns: repeat(7, 1fr);
font-size: 18px;
font-weight: 700;
padding: 10px 0px;
margin-top: 50px;

& > div {
	margin-left: 5px;
}

& > div:nth-child(1) {
color: #ff0000;
}

& > div:nth-child(7) {
color: #0000ff;
}
`;

const CalendarHeader = (props) => {
	return (
		<Container header={props.header}>
			{props.children}
			<WeekDaysColumn>
				<div>Sun</div>
				<div>Mon</div>
				<div>Tue</div>
				<div>Wed</div>
				<div>Thu</div>
				<div>Fri</div>
				<div>Sat</div>
			</WeekDaysColumn>
		</Container>
	);
}

export default CalendarHeader;

