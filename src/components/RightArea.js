import React from 'react';
import styled from 'styled-components';

import Calendar from './Calendar.js';

const Container = styled.div`
width: calc(100% - ${props => props.width ? props.width : "400px"});
height: 100%;
position: absolute;
right: 0px;

&:hover {
	background-color: beige;
}

@media screen and (max-width: 1000px) {
	& {
		width: 100%;
		padding-left: 0px;
	}
}
`;

const Header = styled.div`
width: 100%;
height: ${props => props.header ? props.header : "50px"};
background-color: red;
`;

const RightArea = (props) => {
	const HEADER_HEIGHT = props.header;

	return (
		<Container width={props.width}>
			<Header header={HEADER_HEIGHT}>Header</Header>
			<Calendar></Calendar>
		</Container>
	);
}

export default RightArea;

