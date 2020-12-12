/* eslint no-unused-vars: ["off"]*/

import React from 'react';
import styled from 'styled-components';

import LeftArea from './components/LeftArea.js';
import RightArea from './components/RightArea.js';

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
`;

function App(props) {
  return (
		<Container>
			<LeftArea width={props.width}></LeftArea>
			<RightArea width={props.width} header="50px"></RightArea>
		</Container>
  );
}

export default App;

