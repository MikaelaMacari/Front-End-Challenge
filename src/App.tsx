import React, {useEffect, useRef, useState} from 'react';
import "./index.css"
import Keyboard from "components/modules/Keyboard";

const App: React.FC = () => {
    const [time, setTime] = useState(60)
    const timeRef = useRef<any>(null);
    timeRef.current = time;

    useEffect(() => {
        const timer = setInterval(() => {
            if (timeRef?.current > 0) {
                setTime(prevTime => prevTime - 1);
            } else {
                clearInterval(timer);
            }
        }, 1000);

    }, [])

    return (
        <div className='grid h-screen place-items-center'>
            <div
                className='bg-red-900 rounded-full text-white text-4xl h-24 w-24 flex items-center justify-center'>{time}
            </div>
            <Keyboard/>
        </div>
    );
}

export default App;
