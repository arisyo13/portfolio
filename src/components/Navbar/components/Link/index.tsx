import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
    path: string,
    name: string,
}

const NavLink = ({ path, name }: Props) => {
    const active = useRouter().pathname;
    return (
        <Link href={path}>
            <a className={`${active === path ? "border-b-2 border-red-500" : ""} text-white text-mine bg-mine py-1 px-4 text-2xl md:text-lg items-center`}>{name}</a>
        </Link>
    )
}

export default NavLink