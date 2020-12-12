import React from 'react';
import styled from 'styled-components';

import CalendarBody from './CalendarBody.js';

const Container = styled.div`
width: 100%;
height: calc(100% - ${props => props.header ? props.header : "50px"});
background-color: white;
`;

const Head = styled.div`
width: 100%;
height: ${props => props.height ? props.height : "100px"};
background-color: crimson;
`;

const Calendar = (props) => {
	const CALENDAR_HEAD_HEIGHT = "100px";

	return (
		<Container header={props.header}>
			<Head height={CALENDAR_HEAD_HEIGHT}>Head</Head>
			<CalendarBody headHeight={CALENDAR_HEAD_HEIGHT}></CalendarBody>
		</Container>
	);
}

export default Calendar;

