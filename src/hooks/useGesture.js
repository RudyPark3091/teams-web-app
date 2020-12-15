import { useRef, useEffect } from 'react';

const useGesture = (onDragDown, onDragUp, offset = 100) => {
	const element = useRef();

	let startPosX, startPosY, endPosX, endPosY;

	const handleDragStart = (e) => {
		startPosY = e.clientY;
		if (element.current) {
			element.current.style.userSelect = "none";
		}
		document.documentElement.addEventListener("mousemove", handleDrag);
	}

	const handleDrag = (e) => {
		if (startPosY - e.clientY > offset) {
			onDragUp();
			document.documentElement.removeEventListener("mousemove", handleDrag);
		}

		if (e.clientY - startPosY > offset) {
			onDragDown();
			document.documentElement.removeEventListener("mousemove", handleDrag);
		}
	}

	const handleDragStop = (e) => {
		if (element.current) {
			element.current.style.userSelect = "auto";
		}
		document.documentElement.removeEventListener("mousemove", handleDrag);
	}

	useEffect(() => {
		if (element.current) {
			const { current } = element;
			current.addEventListener("mousedown", handleDragStart);
			document.documentElement.addEventListener("mouseup", handleDragStop);
		}
		return () => {
			if (element.current) {
				const { current } = element;
				current.removeEventListener("mousedown", handleDragStart);
				document.documentElement.removeEventListener("mouseup", handleDragStop);
			}
		}
	});

	return { ref: element };
};

export default useGesture;

