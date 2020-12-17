import React from 'react';
import styled from 'styled-components';

import useTabs from '../hooks/useTabs.js';

import Calendar from './Calendar.js';

const Container = styled.div`
width: calc(100% - ${props => props.width ? props.width : "400px"});
height: calc(100% - ${props => props.header ? props.header : "50px"});
margin-top: ${props => props.header ? props.header : "50px"};
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

const RightArea = (props) => {
	const HEADER_HEIGHT = props.header;

	return (
		<Container width={props.width}>
			{props.children}
		</Container>
	);
}

export default RightArea;

