'use client';
import React from 'react';
import PrivateRoute from '../component/PrivateRoute/PrivateRoute';
import { useSession } from '@/lib/auth-client';
import Link from 'next/link';
import { User, Mail, LayoutGrid, FileText, ChevronRight, Pencil } from 'lucide-react';

const ProfilePage = () => {
    const { data: session, isPending } = useSession();
    const user = session?.user;

    if (isPending) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#F4F1EE]">
                <span className="loading loading-spinner loading-lg text-[#BC6C4D]"></span>
            </div>
        );
    }

    return (
        <PrivateRoute>
            <div className="min-h-screen bg-[#F4F1EE] py-12">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        
                        {/* LEFT SIDEBAR */}
                        <div className="lg:col-span-1 space-y-6">
                            <div className="bg-white rounded-lg shadow-sm p-8 flex flex-col items-center text-center">
                                {/* Avatar */}
                                <div className="w-20 h-20 rounded-full border-2 border-[#BC6C4D]/20 overflow-hidden bg-gray-50 mb-4">
                                    {user?.image ? (
                                        <img src={user.image} alt={user.name} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-[#BC6C4D] text-2xl font-bold">
                                            {user?.name?.charAt(0)?.toUpperCase() || '?'}
                                        </div>
                                    )}
                                </div>
                                
                                {/* User Info */}
                                <h2 className="text-lg font-bold text-[#1A1A1A]">{user?.name || 'Architect User'}</h2>
                                <p className="text-sm text-[#4A4A4A] mb-6">{user?.email}</p>
                                
                                {/* Edit Button */}
                                <Link href="/profile/update" className="w-full">
                                    <button className="w-full bg-[#BC6C4D] text-white py-3 rounded-md text-sm font-medium hover:opacity-90 transition shadow-sm flex items-center justify-center gap-2">
                                        <Pencil size={14} /> Edit Profile
                                    </button>
                                </Link>
                                
                                {/* Stats */}
                                <div className="w-full mt-8 pt-6 border-t border-gray-100">
                                    <p className="text-left text-[10px] font-bold uppercase tracking-widest text-[#4A4A4A] mb-4">Account Statistics</p>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-[#4A4A4A]">Saved Tiles</span>
                                            <span className="font-bold text-[#1A1A1A]">0</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-[#4A4A4A]">Projects</span>
                                            <span className="font-bold text-[#1A1A1A]">0</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT MAIN AREA */}
                        <div className="lg:col-span-3 space-y-8">
                            
                            {/* Card 1: Personal Information */}
                            <div className="bg-white rounded-lg shadow-sm p-8">
                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold text-[#1A1A1A]">Personal Information</h3>
                                    <p className="text-sm text-[#4A4A4A] mt-1">Manage your public profile and account details.</p>
                                </div>
                                <div className="divider my-6"></div>
                                
                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="text-[10px] uppercase text-[#4A4A4A] font-bold tracking-widest block mb-2">Full Name</label>
                                            <p className="text-[#1A1A1A] font-medium py-2">{user?.name || 'N/A'}</p>
                                        </div>
                                        <div>
                                            <label className="text-[10px] uppercase text-[#4A4A4A] font-bold tracking-widest block mb-2">Email Address</label>
                                            <p className="text-[#1A1A1A] font-medium py-2">{user?.email}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-[10px] uppercase text-[#4A4A4A] font-bold tracking-widest block mb-2">Photo URL</label>
                                        <p className="text-[#1A1A1A] font-medium py-2 truncate max-w-full">
                                            {user?.image || 'No photo URL set'}
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="mt-10 pt-6 border-t border-gray-50">
                                    <Link href="/profile/update">
                                        <button className="bg-[#BC6C4D] text-white px-8 py-3 rounded-md text-sm font-medium hover:opacity-90 transition">
                                            Edit Profile
                                        </button>
                                    </Link>
                                </div>
                            </div>

                            {/* Card 2: Recent Activity */}
                            <div className="bg-white rounded-lg shadow-sm p-8">
                                <div className="flex justify-between items-center mb-8">
                                    <h3 className="text-xl font-semibold text-[#1A1A1A]">Recent Activity</h3>
                                    <Link href="#" className="text-[#BC6C4D] text-sm font-medium hover:underline">
                                        View All Activity
                                    </Link>
                                </div>
                                
                                <div className="space-y-4">
                                    {/* Activity Row 1 */}
                                    <div className="bg-[#F4F1EE] rounded-lg p-5 flex items-center justify-between group cursor-pointer hover:bg-white border border-transparent hover:border-gray-100 transition-all">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-md bg-white flex items-center justify-center text-[#BC6C4D] shadow-sm">
                                                <LayoutGrid size={20} />
                                            </div>
                                            <div>
                                                <p className="text-sm text-[#1A1A1A] font-medium">Saved "Terrazzo Graphite" to 'Kitchen Concept'</p>
                                                <p className="text-xs text-[#4A4A4A] mt-1">2 hours ago</p>
                                            </div>
                                        </div>
                                        <ChevronRight size={18} className="text-[#4A4A4A] group-hover:translate-x-1 transition-transform" />
                                    </div>

                                    {/* Activity Row 2 */}
                                    <div className="bg-[#F4F1EE] rounded-lg p-5 flex items-center justify-between group cursor-pointer hover:bg-white border border-transparent hover:border-gray-100 transition-all">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-md bg-white flex items-center justify-center text-[#BC6C4D] shadow-sm">
                                                <FileText size={20} />
                                            </div>
                                            <div>
                                                <p className="text-sm text-[#1A1A1A] font-medium">Updated account display information</p>
                                                <p className="text-xs text-[#4A4A4A] mt-1">Yesterday at 4:30 PM</p>
                                            </div>
                                        </div>
                                        <ChevronRight size={18} className="text-[#4A4A4A] group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </PrivateRoute>
    );
};

export default ProfilePage;
