import { createStore } from "redux";

const fristState = { counter: 0, toggleButton: false };

const counterReducer = (state = fristState, action) => {
	if (action.type === "increment") {
		return {
			counter: state.counter + action.payload,
			toggleButton: false,
		};
	}
	if (action.type === "decrement") {
		return {
			counter: state.counter - action.payload,
			toggleButton: false,
		};
	}
	if (action.type === "toggleIt") {
		return {
			counter: state.counter,
			toggleButton: !state.toggleButton,
		};
	}
	return state;
};
const store = createStore(counterReducer);

export default store;
