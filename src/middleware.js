import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    //   return NextResponse.redirect(new URL('/', request.url))
    const dummyUserData = {
        role: 'admin',
        email: 'test@gmail.com',
    };
    let isServicesPage = request.nextUrl.pathname.startsWith('/services');
    const isAdmin = dummyUserData.role === 'admin';
    // console.log(isAdmin, isServicesPage)
    // console.log('Pathname', request.nextUrl.pathname.startsWith('/services'))
    if(isServicesPage && !isAdmin) {
        return NextResponse.redirect(new URL('/login', request.url))
        // return NextResponse.rewrite(new URL('/login', request.url))
    }
    return NextResponse.next();
}

// export const config = {
//   matcher: '/about/:path*',
// }