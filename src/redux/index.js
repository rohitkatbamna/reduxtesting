import { createStore } from "redux";

const fristState = { counter: 0 };

const counterReducer = (state = fristState, action) => {
	if (action.type === "increment") {
		return {
			counter: state.counter + action.payload,
		};
	}
	if (action.type === "decrement") {
		return {
			counter: state.counter - action.payload,
		};
	}
	return state;
};
const store = createStore(counterReducer);

export default store;
