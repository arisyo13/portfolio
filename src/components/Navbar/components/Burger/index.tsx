type Props = {
    onClick?: () => void;
    clicked: boolean
}

const Burger = (props: Props) => {

    return (
        <div 
            onClick={props.onClick}
            className="block md:hidden z-50 items-center cursor-pointer"
        >
            <div className={"w-6 h-0.5 mb-1 bg-white transition-all ease-linear duration-300 transform " + (props.clicked ? "" : "-rotate-45 translate-y-1")} >
            </div>
            <div className={"w-6 h-0.5 mb-1 bg-white transition-all ease-linear duration-300 transform " + (props.clicked ? "" : "opacity-0")}>
            </div>
            <div className={"w-6 h-0.5 bg-white transition-all ease-linear duration-300 transform " + (props.clicked ? "" : "rotate-45 -translate-y-2")}>
            </div>
        </div>
    )
}

export default Burger