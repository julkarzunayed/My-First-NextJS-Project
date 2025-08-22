"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function NavBar() {
    const pathname = usePathname();
    // console.log(pathname)
    if (!pathname?.includes('dashboard')) {
        return (
            <div className="h-11">
                <nav className="fixed top-0 w-full">
                    <ul className='flex justify-center gap-5 p-2 border'>
                        <Link href='/'><li>Home</li></Link>
                        <Link href='/services'><li>Services</li></Link>
                        <Link href='/about'><li>About</li></Link>
                        <Link href='/admin_dashboard'><li>Dashboard</li></Link>
                    </ul>
                </nav>
            </div>
        );
    } else return <></>;

}
