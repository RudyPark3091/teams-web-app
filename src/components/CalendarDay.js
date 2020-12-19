import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import Modal from './Modal.js';

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
	return (
		<>
			<Day
				ref={ref}
				sunday={props.sunday}
				saturday={props.saturday}
			>{props.text}</Day>
		</>
	)
});

export default CalendarDay;

