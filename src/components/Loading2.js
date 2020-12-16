import React from 'react';
import styled, { keyframes } from 'styled-components';

const wave = keyframes`
0% {
	height: 100%;
}
20% { 
	height: 10%;
}
80% {
	height: 10%;
}
100% {
	height: 100%;
}
`;

const LoadingBar = styled.div`
width: ${props => props.size ? props.size : "50px"};
height: ${props => props.size ? props.size : "50px"};
display: flex;
align-items: center;
position: absolute;
top: 50%;
left: 50%;

& > div {
	width: ${props => props.size ? props.size/5 : "10px"};
	height: 0px;
	margin-right: 5px;
	animation: ${wave} 1s alternate infinite;
}

& > div:nth-child(1) {
	background-color: #e74c3c;
	animation-delay: 0.1s;
}
& > div:nth-child(2) {
	background-color: #f1c40f;
	animation-delay: 0.2s;
}
& > div:nth-child(3) {
	background-color: #2ecc71;
	animation-delay: 0.3s;
}
& > div:nth-child(4) {
	background-color: #3498db;
	animation-delay: 0.4s;
}
& > div:nth-child(5) {
	background-color: #8e44ad;
	animation-delay: 0.5s;
}

${props => props.mono ? "& > div:nth-child(n) { background-color: #000000; }" : ""}
`;

const LoadingText = styled.span`
color: #a5a5a5;
position: absolute;
top: calc(50% + ${props => props.size ? props.size : "55px"});
left: calc(50% - 5px);
`;

const Loading = (props) => {
	return (
		<>
			<LoadingBar 
				size={props.size ? props.size : null}
				mono={props.mono ? "mono" : null}
			>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</LoadingBar>
			<LoadingText 
				size={props.size ? props.size : null}
			>loading...</LoadingText>
		</>
	);
}

export default Loading;

