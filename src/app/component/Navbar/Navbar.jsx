'use client'
import Link from 'next/link'
import React from 'react';
import { useSession, authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const { data: session, isPending } = useSession();
    const router = useRouter();

    const handleSignOut = async () => {
        try {
            await authClient.signOut();
            toast.success("Signed out successfully!");
            router.push('/');
        } catch {
            toast.error("Sign out failed");
        }
    };

    const links =
        <>
            <li><Link href='/' className="hover:text-[#BC6C4D] transition">Home</Link></li>
            <li><Link href='/all-tiles' className="hover:text-[#BC6C4D] transition">All Tiles</Link></li>
            {session && (
                <li><Link href='/profile' className="hover:text-[#BC6C4D] transition">My Profile</Link></li>
            )}
        </>

    return (
        <div className='sticky top-0 left-0 z-50 backdrop-blur-md bg-[#F4F1EE]/70 border-b border-[#e5e5e5]'>

            <div className="navbar container mx-auto px-4">

                <div className="navbar-start">

                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>

                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-[#F4F1EE] rounded-box mt-3 w-52 p-2 shadow border border-[#e5e5e5] text-black"
                        >
                            {links}
                        </ul>
                    </div>

                    <Link href="/" className="text-2xl font-semibold tracking-wide text-[#1A1A1A]">
                        Tiles<span className="text-[#BC6C4D]">Gallery</span>
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[#4A4A4A] font-medium">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end flex items-center gap-3">
                    {isPending ? (
                        <span className="loading loading-dots loading-sm text-[#BC6C4D]"></span>
                    ) : session ? (
                        <>
                            <div className="w-8 h-8 rounded-full overflow-hidden border border-[#BC6C4D]/20 bg-gray-100 hidden sm:block">
                                {session.user?.image ? (
                                    <img src={session.user.image} alt={session.user.name} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-[#BC6C4D] text-xs font-bold uppercase">
                                        {session.user?.name?.charAt(0) || '?'}
                                    </div>
                                )}
                            </div>
                            <span className="text-sm text-[#4A4A4A] hidden md:inline font-medium truncate max-w-[140px]">
                                {session.user?.name || session.user?.email}
                            </span>
                            <button
                                onClick={handleSignOut}
                                className="px-5 py-2 rounded-md border border-[#BC6C4D] text-[#BC6C4D] hover:bg-[#BC6C4D] hover:text-white transition font-medium text-sm"
                            >
                                Sign Out
                            </button>
                        </>
                    ) : (
                        <Link
                            href='/auth/signin'
                            className="px-5 py-2 rounded-md bg-[#BC6C4D] text-white border-none hover:scale-105 hover:opacity-90 transition font-medium text-sm"
                        >
                            Sign In
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;