import Link from 'next/link'
import React from 'react'

export default function DashboardLayout({ children }) {
    return (
        <div className='grid grid-cols-12 pt-8 gap-2'>
            <nav className="col-span-3">
                <ul className='mt-10 pl-2 **:px-1.5 **:py-0.5 **:rounded-lg *:bg-gray-300 flex flex-col gap-0.5 *:hover:bg-gray-200 **: **:w-full *:flex font-semibold'>
                    <li>
                        <Link
                            href={`/`}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={`/user_dashboard`}>
                            User Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={`/admin_dashboard`}>
                            Admin Dashboard
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="col-span-9">
                {children}
            </div>
        </div>
    )
}
