import React from "react";
import {ItemInterface} from "ts/interfaces/item";
import Key from "components/common/Key";

type RowsContainerPropsType = {
    keysArray?: ItemInterface[][]
    className?: string
    secondaryClassName?: string
};
const RowsContainer = ({keysArray, className, secondaryClassName}: RowsContainerPropsType) => {

    return (
        <div className={className}>
            {keysArray?.map((item: ItemInterface[], index: number) => (
                <div className={secondaryClassName} key={index}>
                    {item.map((item: ItemInterface, index: number) => (
                        <Key itemKey={item} key={index}/>
                    ))}
                </div>
            ))}
        </div>
    )
}
export default RowsContainer;