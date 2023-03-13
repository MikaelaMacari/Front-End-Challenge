import React, {useCallback, useContext, useEffect, useRef} from "react";
import {KeyboardContext} from "components/context";

const Timer = () => {
    const {time, setTime} = useContext(KeyboardContext);
    const timeRef = useRef<NodeJS.Timeout | number>(0);

    const startHandler = useCallback(() => {
        if (timeRef.current) {
            return;
        }
        timeRef.current = setInterval(() => setTime((prevTime: number) => prevTime - 1), 1000);
    }, [setTime]);


    const stopHandler = () => {
        clearInterval(timeRef.current);
        timeRef.current = 0;
    };

    useEffect(() => {
        if (time > 0) {
            startHandler()
        } else {
            stopHandler()
        }
    }, [startHandler, time]);

    return (
        <div
            className='bg-red-900 rounded-full text-white text-4xl h-24 w-24 flex items-center justify-center'>{time}
        </div>
    )
}
export default Timer;