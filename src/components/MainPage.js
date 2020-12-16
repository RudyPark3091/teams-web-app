import React, { useRef } from 'react';
import { useQuery, gql } from '@apollo/client';

import Loading from './Loading2.js';
import Modal from './Modal.js';

const QUERY_ALL_TODOS = gql`
query {
	todos {
		content
	}
}
`

const MainPage = (props) => {
	const { loading, error, data } = useQuery(QUERY_ALL_TODOS);

	const modal = useRef();
	const showModal = (e) => {
		modal.current.style.display = "block";
	}

	if (loading) return <Loading mono></Loading>;
	if (error) return (
		<>
			<button onClick={showModal}>show modal</button>
			<Modal ref={modal} width="500px" height="400px">
				<div>this is modal body</div>
			</Modal>
		</>
	);

	return (
		<>
			<Modal width="500px" height="400px">
				<div>hi</div>
			</Modal>
			<div>{data.todos.map(({ content }, i) => (
				<p key={i}>{content}</p>
			))}</div>
		</>
	);
}

export default MainPage;

