import React from "react";
import {icons} from "assets/static/icons";
import {ItemInterface} from "ts/interfaces/item";

type KeyPropsType = {
    itemKey?: ItemInterface
};
const Key = ({itemKey}: KeyPropsType) => {
    // @ts-ignore
    const Icon = icons[itemKey?.icon]

    return (
        <div
            className={`bg-white ${itemKey?.width || 'w-16'} ${itemKey?.height || 'h-16'} flex flex-col justify-center ${itemKey?.place || 'items-center'} ${itemKey?.place && 'px-3'} rounded-md`}>
            {itemKey?.icon && <Icon color={'disabled'} fontSize={'large'}/>}
            <p className={`${itemKey?.fontSize || 'text-xl'} text-gray-500`}>{itemKey?.name}</p>
            <p className={`${itemKey?.fontSize || 'text-xl'} text-gray-500`}>{itemKey?.secondaryName}</p>
        </div>
    )
}
export default Key;