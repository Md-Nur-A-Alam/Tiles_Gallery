'use client';
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { Mail, Lock, User, Camera } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaGithub } from 'react-icons/fa';

const SignUpPage = () => {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting }
    } = useForm();

    const password = watch("password");

    const handleGoogleLogin = async () => {
        try {
            await authClient.signIn.social({
                provider: "google",
                callbackURL: "/",
            });
        } catch {
            toast.error("Google login failed");
        }
    };

    const handleGithubLogin = async () => {
        try {
            await authClient.signIn.social({
                provider: "github",
                callbackURL: "/",
            });
        } catch {
            toast.error("GitHub login failed");
        }
    };

    const onSubmit = async (data) => {
        try {
            const { data: res, error } = await authClient.signUp.email({
                name: data.fullName,
                email: data.email,
                image: data.photoUrl,
                password: data.password
            });

            if (error) {
                toast.error(error.message || "Signup failed");
            } else {
                toast.success("Account created successfully!");
                router.push('/auth/signin');
            }

        } catch {
            toast.error("An unexpected error occurred");
        }
    };

    return (
        <div className="min-h-screen bg-[#F4F1EE] py-20 flex items-center justify-center px-4">
            <div className="w-full max-w-[540px]">
                {/* Branding */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold tracking-tight text-[#1A1A1A]">
                        TILES<span className="text-[#BC6C4D]">GALLERY</span>
                    </h1>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#4A4A4A] mt-2 font-semibold">
                        Architectural Excellence
                    </p>
                </div>

                {/* Signup Card */}
                <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
                    <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-2">Create Account</h2>
                    <p className="text-sm text-[#4A4A4A] mb-8">Join our community of architectural visionaries.</p>

                    {/* Social Login */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <button
                            type="button"
                            onClick={handleGoogleLogin}
                            className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors text-xs font-medium text-[#1A1A1A]"
                        >
                            <FcGoogle size={18} /> Google
                        </button>
                        <button
                            type="button"
                            onClick={handleGithubLogin}
                            className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors text-xs font-medium text-[#1A1A1A]"
                        >
                            <FaGithub size={18} /> GitHub
                        </button>
                    </div>

                    <div className="relative flex items-center justify-center mb-10">
                        <div className="border-t border-gray-100 w-full"></div>
                        <span className="absolute bg-white px-4 text-[10px] uppercase tracking-widest text-[#4A4A4A] font-bold">
                            or with email
                        </span>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Full Name */}
                            <div>
                                <label className="text-[10px] uppercase tracking-widest text-[#4A4A4A] font-bold block mb-2">Full Name</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                    <input
                                        {...register("fullName", {
                                            required: "Name is required",
                                            minLength: { value: 3, message: "Min 3 chars" }
                                        })}
                                        type="text"
                                        className={`w-full pl-10 pr-4 py-2.5 bg-white border ${errors.fullName ? 'border-[#C0392B]' : 'border-gray-200'} rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#BC6C4D]/20 focus:border-[#BC6C4D] transition-all text-[#1A1A1A]`}
                                        placeholder="Ar. John Doe"
                                    />
                                </div>
                                {errors.fullName && <p className="text-[#C0392B] text-xs mt-1">{errors.fullName.message}</p>}
                            </div>

                            {/* Email */}
                            <div>
                                <label className="text-[10px] uppercase tracking-widest text-[#4A4A4A] font-bold block mb-2">Email</label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                    <input
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: "Invalid email"
                                            }
                                        })}
                                        type="email"
                                        className={`w-full pl-10 pr-4 py-2.5 bg-white border ${errors.email ? 'border-[#C0392B]' : 'border-gray-200'} rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#BC6C4D]/20 focus:border-[#BC6C4D] transition-all text-[#1A1A1A]`}
                                        placeholder="email@studio.com"
                                    />
                                </div>
                                {errors.email && <p className="text-[#C0392B] text-xs mt-1">{errors.email.message}</p>}
                            </div>
                        </div>

                        {/* Photo URL */}
                        <div>
                            <label className="text-[10px] uppercase tracking-widest text-[#4A4A4A] font-bold block mb-2">Photo URL</label>
                            <div className="relative">
                                <Camera className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                <input
                                    {...register("photoUrl", {
                                        required: "Photo URL is required",
                                        validate: (value) => {
                                            try { new URL(value); return true; }
                                            catch { return "Invalid URL"; }
                                        }
                                    })}
                                    type="text"
                                    className={`w-full pl-10 pr-4 py-2.5 bg-white border ${errors.photoUrl ? 'border-[#C0392B]' : 'border-gray-200'} rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#BC6C4D]/20 focus:border-[#BC6C4D] transition-all text-[#1A1A1A]`}
                                    placeholder="https://i.pravatar.cc/150"
                                />
                            </div>
                            {errors.photoUrl && <p className="text-[#C0392B] text-xs mt-1">{errors.photoUrl.message}</p>}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Password */}
                            <div>
                                <label className="text-[10px] uppercase tracking-widest text-[#4A4A4A] font-bold block mb-2">Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                    <input
                                        {...register("password", {
                                            required: "Required",
                                            minLength: { value: 8, message: "Min 8 chars" },
                                            validate: (value) => /[A-Z]/.test(value) || "Need 1 uppercase"
                                        })}
                                        type="password"
                                        className={`w-full pl-10 pr-4 py-2.5 bg-white border ${errors.password ? 'border-[#C0392B]' : 'border-gray-200'} rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#BC6C4D]/20 focus:border-[#BC6C4D] transition-all text-[#1A1A1A]`}
                                        placeholder="••••••••"
                                    />
                                </div>
                                {errors.password && <p className="text-[#C0392B] text-xs mt-1">{errors.password.message}</p>}
                            </div>

                            {/* Confirm Password */}
                            <div>
                                <label className="text-[10px] uppercase tracking-widest text-[#4A4A4A] font-bold block mb-2">Confirm</label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                    <input
                                        {...register("confirmPassword", {
                                            required: "Required",
                                            validate: (value) => value === password || "Match fail"
                                        })}
                                        type="password"
                                        className={`w-full pl-10 pr-4 py-2.5 bg-white border ${errors.confirmPassword ? 'border-[#C0392B]' : 'border-gray-200'} rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#BC6C4D]/20 focus:border-[#BC6C4D] transition-all text-[#1A1A1A]`}
                                        placeholder="••••••••"
                                    />
                                </div>
                                {errors.confirmPassword && <p className="text-[#C0392B] text-xs mt-1">{errors.confirmPassword.message}</p>}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-[#BC6C4D] text-white py-4 rounded-md text-xs font-bold uppercase tracking-widest hover:bg-[#a05a3d] transition-all shadow-lg shadow-[#BC6C4D]/10 active:scale-[0.98] disabled:opacity-50 mt-4"
                        >
                            {isSubmitting ? "Creating Studio..." : "Create Account"}
                        </button>
                    </form>

                    <p className="text-center text-sm text-[#4A4A4A] mt-10">
                        Already part of the gallery?{" "}
                        <Link href="/auth/signin" className="text-[#BC6C4D] font-bold hover:underline">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;