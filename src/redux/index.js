import { configureStore, createSlice } from "@reduxjs/toolkit";

const fristState = { counter: 0, toggleButton: false };
const counterSlice = createSlice({
	name: "counter",
	initialState: fristState,
	reducers: {
		increase(state, action) {
			state.counter = state.counter + action.payload;
		},
		decrease(state, action) {
			state.counter = state.counter - action.payload;
		},
		toggleCon(state) {
			state.toggleButton = !state.toggleButton;
		},
	},
});

export const counterReducers = counterSlice.actions;
export const store = configureStore(counterSlice);
