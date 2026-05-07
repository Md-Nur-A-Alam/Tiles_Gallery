'use client';
import React from 'react';
import PrivateRoute from '../../component/PrivateRoute/PrivateRoute';
import { useSession, authClient } from '@/lib/auth-client';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const UpdateProfilePage = () => {
    const { data: session } = useSession();
    const user = session?.user;
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm({
        defaultValues: {
            name: user?.name || '',
            image: user?.image || ''
        }
    });

    const onSubmit = async (data) => {
        try {
            const { error } = await authClient.updateUser({
                name: data.name,
                image: data.image
            });

            if (error) {
                toast.error(error.message || "Update failed");
            } else {
                toast.success("Profile updated successfully!");
                router.push('/profile');
            }
        } catch {
            toast.error("An unexpected error occurred");
        }
    };

    return (
        <PrivateRoute>
            <div className="min-h-screen bg-[#F4F1EE] py-20 flex items-center justify-center">
                <div className="container mx-auto px-6 max-w-[600px]">
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                        
                        {/* Card Header */}
                        <div className="p-8 pb-0">
                            <h2 className="text-2xl font-bold text-[#1A1A1A]">Update Information</h2>
                            <p className="text-sm text-[#4A4A4A] mt-2">Update your display name and avatar.</p>
                            <div className="divider my-6"></div>
                        </div>

                        {/* Card Body / Form */}
                        <div className="p-8 pt-0">
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                
                                {/* Full Name Field */}
                                <div>
                                    <label className="text-sm font-medium text-[#1A1A1A] block mb-2">Full Name</label>
                                    <input
                                        {...register("name", {
                                            required: "Name is required",
                                            minLength: { value: 3, message: "Name must be at least 3 characters" }
                                        })}
                                        type="text"
                                        className={`w-full bg-white border ${errors.name ? 'border-[#C0392B]' : 'border-[#4A4A4A]'} rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#BC6C4D] text-[#1A1A1A] transition-all`}
                                        placeholder="Your display name"
                                    />
                                    {errors.name && <p className="text-[#C0392B] text-xs mt-1">{errors.name.message}</p>}
                                </div>

                                {/* Photo URL Field */}
                                <div>
                                    <label className="text-sm font-medium text-[#1A1A1A] block mb-2">Photo URL</label>
                                    <input
                                        {...register("image", {
                                            validate: (value) => {
                                                if (!value) return true;
                                                try { new URL(value); return true; }
                                                catch { return "Enter a valid URL"; }
                                            }
                                        })}
                                        type="url"
                                        className={`w-full bg-white border ${errors.image ? 'border-[#C0392B]' : 'border-[#4A4A4A]'} rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#BC6C4D] text-[#1A1A1A] transition-all`}
                                        placeholder="https://... paste a direct image link"
                                    />
                                    <p className="text-xs text-[#4A4A4A] mt-2 italic">Paste a direct image link to update your avatar.</p>
                                    {errors.image && <p className="text-[#C0392B] text-xs mt-1">{errors.image.message}</p>}
                                </div>

                                {/* Buttons Row */}
                                <div className="flex flex-wrap gap-3 pt-4">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="bg-[#BC6C4D] text-white px-6 py-2 rounded-md font-medium hover:bg-[#a05a3d] transition-colors disabled:opacity-50"
                                    >
                                        {isSubmitting ? "Updating..." : "Update Information"}
                                    </button>
                                    
                                    <button
                                        type="button"
                                        onClick={() => router.push('/profile')}
                                        className="border border-[#4A4A4A] text-[#4A4A4A] px-6 py-2 rounded-md font-medium hover:bg-gray-50 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </PrivateRoute>
    );
};

export default UpdateProfilePage;
