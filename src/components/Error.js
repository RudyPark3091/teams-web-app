import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 30px;
font-weight: 300;
`;

const Code = styled.div`
font-size: 75px;
font-weight: 700;
margin-bottom: 30px;
`;

const Error = (props) => {
	return (
		<Container>
			<Code>404</Code>
			<span>An error has occurred :(</span>
		</Container>
	)
}

export default Error;

