import Link from "next/link";
import Image from 'next/image';

const Logo = () => {
    return (
        <Link href="/">
            <a><Image src="/img/myLogo.svg" alt="page-logo" width={36} height={36} /></a>
        </Link>
    )
}

export default Logo