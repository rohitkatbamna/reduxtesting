import React from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
	const counter = useSelector((state) => state.counter);
	const dispatch = useDispatch();
	function increase() {
		dispatch({ type: "increment", payload: 5 });
	}
	function decrement() {
		dispatch({ type: "decrement", payload: 5 });
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
				<button
					type="button"
					className="btn btn-primary btn-lg"
					onClick={decrement}>
					Decrement
				</button>
				<h1 className="mt-3">{counter}</h1>
			</div>
		</>
	);
}

export default App;
