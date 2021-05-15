type Props = {
    onClick?: () => void;
}

const Burger = (props: Props) => {
    return (
        <div 
            onClick={props.onClick}
            id="burger"
            className="block md:hidden items-center cursor-pointer "
        >
            <div id="line-1" className="w-6 h-0.5 mb-1 bg-white">
            </div>
            <div id="line-2" className="w-6 h-0.5 mb-1 bg-white">
            </div>
            <div id="line-3" className="w-6 h-0.5 bg-white">
            </div>
        </div>
    )
}

export default Burger