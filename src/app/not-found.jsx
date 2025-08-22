import Link from 'next/link'
import React from 'react'

export default function Error404() {
  return (
    <div className='flex items-center justify-center min-h-screen'>
        <div className="text-center">
            <h1 className="text-4xl font-bold text-rose-500">
                Error 404 ||<span className='font-normal text-gray-500'>Service not Found</span>
            </h1>
            <br />
            <br />
            <p><Link href={'/'}>Back to Home</Link></p>
        </div>
    </div>
  )
}
