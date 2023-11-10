import { useState } from "react"


const useBinput = (Fn) => {
    const [enterdvalue, setEnterdValue] = useState('');
    const [valueTouch, setValueTouch] = useState(false);
    const valueIsValid = Fn(enterdvalue);
    const hasError = !valueIsValid && valueTouch;


    const valueChangeHandler = e => {
        setEnterdValue(e.target.value);
    }

    const valueBlurHandler = () => {
        setValueTouch(true);
    }

    const valueReset = () => {
        setEnterdValue('');
        setValueTouch(false)
    }



    return {
        enterdvalue,
        valueIsValid,
        hasError,
        valueChangeHandler,
        valueBlurHandler,
        valueReset,

    }

}
export default useBinput