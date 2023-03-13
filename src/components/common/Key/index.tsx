import React, {useContext, useEffect, useRef, useState} from "react";
import {icons} from "assets/static/icons";
import {ItemInterface} from "ts/interfaces/item";
import {AppContext, KeyboardContext} from "../../context";

type KeyPropsType = {
    itemKey?: ItemInterface
};
const Key = ({itemKey}: KeyPropsType) => {
    const {time, setTime} = useContext(KeyboardContext);
    // @ts-ignore
    const Icon = icons[itemKey?.icon]
    const [keyColor, setKeyColor] = useState<string>('text-gray-500')
    const [iconColor, setIconColor] = useState<string>('disabled')

    const timeRef = useRef<AppContext | any>(null);
    timeRef.current = time;

    const handleKeyupColor = (e: any) => {
        setTimeout(() => {
            setKeyColor('text-green-500')
            setIconColor('success')
            setTime(60)
        }, 3000)
    }
    const handleKeyDownColor = (event: any) => {
        setKeyColor('text-sky-500')
        setIconColor('primary')
        setTime(60)
    }

    useEffect(() => {

        if (time === 0) {
            if (keyColor !== 'text-gray-500') {
                setKeyColor('text-gray-500')
                setIconColor('disabled')
            }
        }

    }, [time, keyColor, setTime])

    return (
        <div
            tabIndex={-1}
            className={`bg-white ${itemKey?.width || 'w-16'} ${itemKey?.height || 'h-16'} flex flex-col justify-center ${itemKey?.place || 'items-center'} ${itemKey?.place && 'px-3'} rounded-md`}
            onKeyUp={handleKeyupColor}
            onKeyDown={handleKeyDownColor}
        >
            {itemKey?.icon && <Icon color={iconColor} fontSize={'large'}/>}
            <p className={`${itemKey?.fontSize || 'text-xl'} ${keyColor}`}>{itemKey?.name}</p>
            <p className={`${itemKey?.fontSize || 'text-xl'} ${keyColor}`}>{itemKey?.secondaryName}</p>
        </div>
    )
}
export default Key;