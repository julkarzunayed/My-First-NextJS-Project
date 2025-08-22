"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function AboutPage() {

    const router = useRouter();
    const isLoggedIn = false;
    console.log(router)
    const handleAddressNavigation = () => {
        if (isLoggedIn) {
            router.push('/about/address');
        } else {
            router.push('/')
        }
    }

    return (
        <div className='flex flex-col items-center pt-20'>
            <p className="text-center text-2xl font-bold">
                About Page
            </p>
            <Link
                className='btn px-3 border py-1'
                href={`/about/address`}>
                Address
            </Link>
            <button
                onClick={handleAddressNavigation}
                className='btn px-3 border py-1 bg-amber-500 font-bold mt-2 hover:bg-amber-600'
                type='button'
            >
                Address button
            </button>
        </div>
    )
}
