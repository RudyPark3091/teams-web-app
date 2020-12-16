import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
from {
	transform: rotate(0deg);
}
to {
	transform: rotate(360deg);
}
`;

const Spinner = styled.div`
width: ${props => props.size ? props.size : "10px"};
height: ${props => props.size ? props.size : "10px"};
border: 5px solid blue;
border-top: 5px solid white;
border-radius: 50%;
animation: ${rotate} ${props => props.duration ? props.duration : "2s"} linear infinite;
position: absolute;
top: 50%;
left: 50%;
`;

const Loading = (props) => {
	return (
		<Spinner duration="2s" size="20px"></Spinner>
	);
}

export default Loading;

