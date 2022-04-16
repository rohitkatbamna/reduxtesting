import React from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
	let eventvalue;
	const counter = useSelector((state) => state.counter);
	const toggleButton = useSelector((state) => state.toggleButton);
	console.log(toggleButton);
	const dispatch = useDispatch();
	function increase() {
		if (eventvalue === undefined) {
			eventvalue = 1;
		}
		dispatch({ type: "increment", payload: eventvalue });
		document.getElementById("numberid").value = "";
	}
	function decrement() {
		dispatch({ type: "decrement", payload: 5 });
	}
	function handleInput(event) {
		eventvalue = Number(event.target.value);
		console.log(eventvalue);
	}
	function toggleOn() {
		dispatch({ type: "toggleIt" });
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
					onChange={handleInput}
					id="numberid"
				/>
				<button
					type="button"
					className="btn btn-primary btn-lg me-2"
					onClick={decrement}>
					Decrement
				</button>
				<input type="text" style={{ width: "50px" }} />
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
