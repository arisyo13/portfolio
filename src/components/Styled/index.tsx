import React, { PropsWithChildren } from "react";

type Props =  PropsWithChildren<{
    id?: string;
}>;

export const Container = ({ children = null }: Props) => {
    return (
        <div className="container mx-auto px-4 md:px-0">
            {children}
        </div>
    )
};

export const Main = ({ id, children = null }: Props) => {
    return (
        <div id={id} className="min-h-screen py-20">
            {children}
        </div>
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
        <header className="flex fixed backdrop-filter backdrop-blur-sm bg-black bg-opacity-50 top-0 inset-x-0 z-50">
            {children}
        </header>
    )
};