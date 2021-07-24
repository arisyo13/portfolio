import Link from "next/link";

type Props = {
    path: string,
    name: string,
}

const NavLink = (props: Props) => {
    return (
        <Link href={props.path}>
            <a className=" text-white text-mine bg-mine py-1 px-4 text-2xl md:text-lg items-center">{props.name}</a>
        </Link>
    )
}

export default NavLink