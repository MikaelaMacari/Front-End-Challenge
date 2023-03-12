import React from 'react';
import "./index.css"
import Keyboard from "components/modules/Keyboard";

const App: React.FC = () => {
    return (
        <div className='grid h-screen place-items-center'>
            <Keyboard/>
        </div>
    );
}

export default App;
