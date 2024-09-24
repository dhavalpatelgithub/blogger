'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './theme-toggle';
import { usePathname } from 'next/navigation';

export default function Navbar() {

    const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
    const pathname = usePathname();

    const showMobileMenu = () => {
        setIsMobileMenuVisible(!isMobileMenuVisible);
    }

    let menuToggleSvg;

    if (!isMobileMenuVisible) {
        menuToggleSvg = <>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </>;
    } else {
        menuToggleSvg = <>
            <span className="sr-only">Close main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 2l13 13M2 15L15 2"/>
            </svg>
        </>
    }

    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
            <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <Image
                    src="https://flowbite.com/docs/images/logo.svg"
                    height={32}
                    width={32}
                    alt="Flowbite Logo"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </a>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <ThemeToggle />
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
                <button data-collapse-toggle="navbar-sticky" type="button" onClick={showMobileMenu} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                    {menuToggleSvg}
                </button>
            </div>
            <div onClick={showMobileMenu} className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMobileMenuVisible ? '' : 'hidden'}`} id="navbar-sticky">
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <Link href="/" className={`${pathname === "/" ? 'text-blue-700 dark:text-blue-500' : 'text-gray-900 dark:text-white'} block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>Home</Link>
                    </li>
                    <li>
                        <Link href="/blog/nested_blog" className={`${pathname === "/blog/nested_blog" ? 'text-blue-700 dark:text-blue-500' : 'text-gray-900 dark:text-white'} block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>Blogs</Link>
                    </li>
                    <li>
                        <Link href="/services" className={`${pathname === "/services" ? 'text-blue-700 dark:text-blue-500' : 'text-gray-900 dark:text-white'} block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>Services</Link>
                    </li>
                    <li>
                        <Link href="/contact" className={`${pathname === "/contact" ? 'text-blue-700 dark:text-blue-500' : 'text-gray-900 dark:text-white'} block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>Contact</Link>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    );
}