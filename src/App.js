/* eslint no-unused-vars: ["off"]*/

import React from 'react';
import styled from 'styled-components';

import useTabs from './hooks/useTabs.js';

import Header from './components/Header.js';
import LeftArea from './components/LeftArea.js';
import RightArea from './components/RightArea.js';
import Calendar from './components/Calendar.js';
import MainPage from './components/MainPage.js';

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
`;

const tabs = [
	{
		context: "Main",
		body: <MainPage></MainPage>
	},
	{
		context: "Calendar",
		body: <Calendar></Calendar>
	}
]

function App(props) {
	const { currentItem, changeItem } = useTabs(0, tabs);

  return (
		<Container>
			<Header header="50px"></Header>
			<LeftArea
				width={props.width}
				header="50px"
			></LeftArea>
			<RightArea
				header="50px"
				width={props.width}
			>
					{currentItem.body}
			</RightArea>
		</Container>
  );
}

export default App;

