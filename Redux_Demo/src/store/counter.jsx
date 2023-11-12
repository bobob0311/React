import { createSlice } from "@reduxjs/toolkit";

const initialCounterState =
{
    counter: 0,
    showCounter: true,
}

// 툴킷을 사용하면 바뀌는 것처럼 사용할 수 있다 사실은 안바뀌는데.
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) { state.counter++ },
        decrement(state) { state.counter-- },
        increase(state, action) { state.counter = state.counter + action.payload },
        toggleCounter(state) { state.showCounter = !state.showCounter }
    }
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;