import React, {useEffect, useState} from "react";
import {icons} from "assets/static/icons";
import {ItemInterface} from "ts/interfaces/item";

type KeyPropsType = {
    itemKey?: ItemInterface
};
const Key = ({itemKey}: KeyPropsType) => {
    // @ts-ignore
    const Icon = icons[itemKey?.icon]
    const [keyColor, setKeyColor] = useState<string>('text-gray-500')
    const handleKeyupColor = (e: any) => {
        setTimeout(() => {
            setKeyColor('text-green-500')
        }, 3000)
    }
    const handleKeyDownColor = (event: any) => {
        setKeyColor('text-sky-500')
    }

    useEffect(() => {
        if (keyColor !== 'text-gray-500') {
            setTimeout(() => {
                setKeyColor('text-gray-500')
            }, 6000)
        }
    }, [keyColor])
    
    return (
        <div
            tabIndex={-1}
            className={`bg-white ${itemKey?.width || 'w-16'} ${itemKey?.height || 'h-16'} flex flex-col justify-center ${itemKey?.place || 'items-center'} ${itemKey?.place && 'px-3'} rounded-md`}
            onKeyUp={handleKeyupColor}
            onKeyDown={handleKeyDownColor}
        >
            {itemKey?.icon && <Icon color={'disabled'} fontSize={'large'}/>}
            <p className={`${itemKey?.fontSize || 'text-xl'} ${keyColor}`}>{itemKey?.name}</p>
            <p className={`${itemKey?.fontSize || 'text-xl'} ${keyColor}`}>{itemKey?.secondaryName}</p>
        </div>
    )
}
export default Key;