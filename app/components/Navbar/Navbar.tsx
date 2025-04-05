"use client"
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Contactusform from './Contactus';
import Image from 'next/image';

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'About Us', href: '/aboutUs', current: false },
    { name: 'Programs', href: '#services-section', current: false },
    { name: 'Facilities', href: '#faq-section', current: false },
    { name: 'Mentors', href: 'mentors', current: false },
    { name: 'IIC Events', href: '/events', current: false },
    { name: 'Insights', href: '/insights', current: false },
    { name: 'Apply Now ', href: '/applyNow', current: false },
    { name: 'Contact Us', href: '/contactUs', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Disclosure as="nav" className="navbar">
            <>
                <div className="mx-auto max-w-7xl p-3 md:p-4 lg:px-8">
                    <div className="relative flex h-12 sm:h-20 items-center">
                        <div className="flex flex-1 items-center sm:justify-between">

                            {/* LOGO */}
                            <Link href="/" className='text-2xl sm:text-4xl font-semibold text-black'>
                                <Image
                                    src="/images/navbar/IIELOGO.png"
                                    alt="IIE Logo"
                                    width={130} // Adjust width as needed
                                    height={104} // Adjust height as needed
                                    className="h-8 sm:h-16"
                                />
                            </Link>
                            <div>
                               
                            </div>
{/* 
                            <div className="flex flex-shrink-0 items-center border-right">
                                <Link href="/" className='text-2xl sm:text-4xl font-semibold text-black'>
                                    IIE 
                                </Link>
                            </div> */}

                            {/* LINKS */}

                            <div className="hidden lg:flex items-center border-right ">
                                <div className="flex justify-end space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-gray-900' : 'navlinks hover:text-black',
                                                'px-3 py-4 rounded-md text-s font-normal'
                                            )}
                                            aria-current={item.href ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>

                            </div>
                            {/* <button className='hidden lg:flex justify-end text-xl font-semibold bg-transparent py-4 px-6 lg:px-12 navbutton rounded-full hover:bg-navyblue hover:text-white'>Contact us</button> */}
                            {/* <Contactusform /> */}
                            <div>
                                <img
                                    src="/images/navbar/SRMLOGO.png"
                                    alt="Logo"
                                    className="h-16 sm:h-32"
                                />
                            </div>
                        </div>


                        {/* DRAWER FOR MOBILE VIEW */}

                        {/* DRAWER ICON */}

                        <div className='block lg:hidden'>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>

                        {/* DRAWER LINKS DATA */}

                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>

                    </div>
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar;
