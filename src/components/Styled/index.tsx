import React, { PropsWithChildren } from "react";

type Props =  PropsWithChildren<{
    id?: string;
    style?: 'dark' | 'light';
}>;

export const Container = ({ children = null }: Props) => {
    return (
        <div className="container mx-auto px-4 md:px-0">
            {children}
        </div>
    )
};

export const Panel = ({ id, children = null, style }: Props) => {
    const st = style === 'dark' ? 'bg-gray-500' : ''
    return (
        <section id={id} className={"min-h-screen relative py-20 overflow-hidden " + st}>
            {children}
        </section>
    )
};

export const Footer = ({ id, children = null }: Props) => {
    return (
        <footer id={id} className="flex justify-center bg-gray-300 items-center py-20">
            {children}
        </footer>
    )
};

export const NavHeader = ({ children = null }: Props) => {
    return (
        <header className="flex flex-col fixed backdrop-filter backdrop-blur-sm bg-black bg-opacity-90 shadow top-0 inset-x-0 z-50">
            {children}
        </header>
    )
};