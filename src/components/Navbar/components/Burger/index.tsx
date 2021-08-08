type Props = {
    onClick?: () => void;
    clicked: boolean
}

const Burger = (props: Props) => {
    return (
        <div 
            onClick={props.onClick}
            className="md:hidden z-50 items-center cursor-pointer flex flex-col gap-1.5"
        >
            <div className={"w-6 h-px bg-white transition-all ease-linear duration-300 transform " + (props.clicked ? "-rotate-45 translate-y-1.5" : "")} >
            </div>
            <div className={"w-6 h-px bg-white transition-all ease-linear duration-300 transform " + (props.clicked ? "opacity-0" : "")}>
            </div>
            <div className={"w-6 h-px bg-white transition-all ease-linear duration-300 transform " + (props.clicked ? "rotate-45 -translate-y-2" : "")}>
            </div>
        </div>
    )
}

export default Burger