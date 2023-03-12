type ContainerPropsType = {
    children?: JSX.Element | JSX.Element[];
};
const Container = ({children}: ContainerPropsType) => {
    return (
        <div className='bg-gray-200 w-lg h-md grid grid-cols-12 gap-5 content-between p-5'>
            {children}
        </div>
    )
}
export default Container;