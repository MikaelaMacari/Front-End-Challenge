import {createContext, Dispatch, SetStateAction} from 'react';

export type AppContext = {
    time: number;
    setTime: Dispatch<SetStateAction<number>>
    keys?: any
    setKeys?: any
}

export const KeyboardContext = createContext<AppContext>({} as AppContext)