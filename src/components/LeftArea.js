import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
width: ${props => props.width ? props.width : "400px"};
height: calc(100% - ${props => props.header ? props.header : "50px"});
margin-top: ${props => props.header ? props.header : "50px"};
background-color: tomato;
position: fixed;
left: 0px;

@media screen and (max-width: 1000px) {
	& {
		display: none;
	}
}
`;

const Wrapper = styled.div`
width: 100%;
background-color: #f87190;
`;

const Item = styled.div`
width: calc(100% - 10px * 2);
height: 50px;
background-color: #fe5890;
margin: 10px;
display: flex;
align-items: center;

&:hover {
	background-color: #ff68a1;
	cursor: pointer;
}
`;

const LeftArea = (props) => {
	return (
		<Container width={props.width} header={props.header}>
			{props.children}
		</Container>
	)
}

export default LeftArea;
export { Wrapper, Item };

