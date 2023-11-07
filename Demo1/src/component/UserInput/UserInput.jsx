import { useState } from "react";

export default function UserInput(props) {
    const initialUserInput = {
        'current-savings': 10000,
        "yearly-contribution": 120,
        "expected-return": 7,
        "duration": 10
    };

    const [userInput, setUserInput] = useState(initialUserInput);

    const submitHandler = (event) => {
        event.preventDefault();
        props.onCalculate(userInput)
    };

    const resetHandler = () => {
        setUserInput(initialUserInput);
    };

    const changeHandler = (input, value) => {
        setUserInput((prevInput) => {
            return {
                ...prevInput,
                [input]: +value
            }
        })
    };


    return (
        <form onSubmit={submitHandler} className="form">
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input onChange={(event) => changeHandler("current-savings", event.target.value)} type="number" id="current-savings" value={userInput["current-savings"]} />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input onChange={(event) => changeHandler("yearly-contribution", event.target.value)} type="number" id="yearly-contribution" value={userInput["yearly-contribution"]} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input onChange={(event) => changeHandler("expected-return", event.target.value)} type="number" id="expected-return" value={userInput["expected-return"]} />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input onChange={(event) => changeHandler("duration", event.target.value)} type="number" id="duration" value={userInput["duration"]} />
                </p>
            </div>
            <p className="actions">
                <button onClick={resetHandler} type="reset" className="buttonAlt">
                    Reset
                </button>
                <button type="submit" className="button">
                    Calculate
                </button>
            </p>
        </form>
    )
}