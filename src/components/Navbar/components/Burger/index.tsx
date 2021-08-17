type Props = {
    onClick?: () => void;
    clicked: boolean
}

const  Burger = (props: Props) => {
    return (
        <div 
            onClick={props.onClick}
            className="md:hidden z-50 items-end w-20 cursor-pointer flex flex-col gap-1.5"
        >
            <div className={"w-6 h-px bg-white transition-all ease-linear duration-200 transform " + (props.clicked ? "-rotate-45 translate-y-1.5" : "")} />
            <div className={"w-6 h-px bg-white transition-all ease-linear duration-200 transform " + (props.clicked ? "opacity-0" : "")} />
            <div className={"w-6 h-px bg-white transition-all ease-linear duration-200 transform " + (props.clicked ? "rotate-45 -translate-y-2" : "")} />
        </div>
    )
}

export default Burger