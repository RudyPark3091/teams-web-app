import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';

const fadein = keyframes`
from {
	opacity: 0;
	transform: translateY(30px);
} to {
	opacity: 1;
	transform: translateY(0px);
}
`;

const Background = styled.div`
width: 100%;
height: 100%;
background-color: #44444455;
backdrop-filter: blur(10px);
position: absolute;
top: 0px;
left: 0px;
display: none;
transition: all 0.3s ease-in-out;
`;

const Container = styled.div`
width: ${props => props.width};
height: ${props => props.height};
border-radius: 3px;
background-color: #ffffff;
position: absolute;
top: calc((${window.innerHeight}px - ${props => props.height}) / 2);
left: calc((${window.innerWidth}px - ${props => props.width}) / 2);
z-index: 9999;
animation: ${fadein} 0.5s ease-in-out;
`;

const XButtonRow = styled.div`
height: 20px;
`;

const XButton = styled.div`
width: 20px;
height: 20px;
float: right;
cursor: pointer;

&::before,
&::after {
	content: "";
	width: 20px;
	height: 20px;
	border-left: 3px solid #d5d5d5;
	position: absolute;
}
&::before {
	margin-top: 14px;
	transform: rotate(45deg);
}
&::after {
	margin-bottom: 14px;
	transform: rotate(-45deg);
}
`;

const Modal = React.forwardRef((props, ref) => {
	const xButton = useRef();
	const modalContainer = useRef();
	const closeModal = (e) => {
		ref.current.style.display = "none";
	}

	useEffect(() => {
		xButton.current.addEventListener("click", closeModal);
		return () => {
			xButton.current.removeEventListener("click", closeModal);
		}
	}, []);

	return ReactDOM.createPortal(
		<Background ref={ref}>
			<Container width={props.width} height={props.height}>
				<XButtonRow>
					<XButton ref={xButton}></XButton>
				</XButtonRow>
				{props.children}
			</Container>
		</Background>,
		document.body
	);
});

export default Modal;

