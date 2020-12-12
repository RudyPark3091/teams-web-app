import React from 'react';
import styled from 'styled-components';

const Day = styled.div`
padding: 10px;
background-color: ${props => (
	props.sunday ? "#ffeeee" :
		props.saturday ? "#eeeeff" : "#ffffff"
)};
color: ${props => (
	props.sunday ? "#ff0000" :
		props.saturday ? "#0000ff" : "#959595"
)};
font-size: 20px;
font-weight: 300;

&:hover {
	background-color: #e5e5e5;
}
`;

const CalendarDay = (props) => {

	return (
		<>
			<Day sunday={props.sunday} saturday={props.saturday}>{props.text}</Day>
		</>
	)
}

export default CalendarDay;

