import React, {useState} from 'react';
import "./index.css"
import Keyboard from "components/modules/Keyboard";
import {KeyboardContext} from "./components/context";
import Timer from "./components/common/Timer";

const App: React.FC = () => {
    const [time, setTime] = useState<number>(0)

    return (
        <KeyboardContext.Provider
            value={{time, setTime}}
        >
            <div className='grid h-screen place-items-center'>
                <Timer/>
                <Keyboard/>
            </div>
        </KeyboardContext.Provider>
    );
}

export default App;
