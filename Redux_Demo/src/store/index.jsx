// redux toolkit

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter';
import authReducer from './auth'


const store = configureStore({
    reducer: { counter: counterReducer, auth: authReducer }
});



export default store;



// 절대 기존 state변경 X 새로운 state객체를 반환하여 항상 재정의해야합니다.
/*
const counterReducer = (state = initialState, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        }
    }

    if (action.type === 'increase') {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        }
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    }

    if (action.type === 'toggle') {
        return {
            showCounter: !state.showCounter,
            counter: state.counter
        }
    }

    return state;
};
*/

// key로 가득찬 



