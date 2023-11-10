// Hook은 use을 붙이고 시작 한다 커스텀 훅임을 알려준다. 훅의 규칙에 따라 하겠다고 보장해준다.
import { useState, useEffect } from "react";


const useCounter = (forward = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (forward) {
                setCounter(prev => prev + 1);
            } else {
                setCounter(prev => prev - 1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return counter;
}

export default useCounter;