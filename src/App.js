import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterReducers } from "./redux";

function App() {
	let eventvalue;
	const counter = useSelector((state) => state.counter);
	const toggleButton = useSelector((state) => state.toggleButton);
	const dispatch = useDispatch();
	function increase() {
		if (eventvalue === undefined) {
			eventvalue = 1;
		}
		dispatch(counterReducers.increase(eventvalue));
		document.getElementById("numberid").value = "";
	}
	function decrement() {
		if (eventvalue === undefined) {
			eventvalue = 1;
		}
		dispatch(counterReducers.decrease(eventvalue));
		document.getElementById("numberid2").value = "";
	}
	function handleInputinc(event) {
		eventvalue = Number(event.target.value);
		console.log(eventvalue);
	}
	function handleInputdec(event) {
		eventvalue = Number(event.target.value);
		console.log(eventvalue);
	}
	function toggleOn() {
		dispatch(counterReducers.toggleCon());
	}
	return (
		<>
			<div className="text-center mt-5">
				<button
					type="button"
					className="btn btn-primary btn-lg me-3"
					onClick={increase}>
					Increment
				</button>
				<input
					type="number"
					style={{ width: "50px", marginRight: "10px" }}
					onChange={handleInputinc}
					id="numberid"
				/>
				<button
					type="button"
					className="btn btn-primary btn-lg me-2"
					onClick={decrement}>
					Decrement
				</button>
				<input
					type="number"
					style={{ width: "50px" }}
					onChange={handleInputdec}
					id="numberid2"
				/>
				<h1
					className="mt-3"
					style={{ display: toggleButton ? "none" : "block" }}>
					{counter}
				</h1>
			</div>
			<div className="text-center">
				<button
					type="button"
					className="btn btn-danger btn-lg mt-5"
					onClick={toggleOn}>
					Button Toggle
				</button>
			</div>
		</>
	);
}

export default App;
