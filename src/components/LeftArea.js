import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
width: ${props => props.width ? props.width : "400px"};
height: calc(100% - ${props => props.header ? props.header : "50px"});
margin-top: ${props => props.header ? props.header : "50px"};
background-color: tomato;
position: fixed;
left: 0px;

&:hover {
	background-color: coral;
}

@media screen and (max-width: 1000px) {
	& {
		display: none;
	}
}
`;

const LeftArea = (props) => {
	return (
		<Container width={props.width} header={props.header}>
			LeftArea
		</Container>
	)
}

export default LeftArea;
