'use client';
import React from 'react';
import { Mail, Lock } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaGithub } from 'react-icons/fa';

const SignIn = () => {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm();

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
            const { data: res, error } = await authClient.signIn.email({
                email: data.email,
                password: data.password
            });

            if (error) {
                toast.error(error.message || "Login failed");
            } else {
                toast.success("Welcome back!");
                router.push('/');
            }

        } catch (err) {
            toast.error("Something went wrong");
        }
    };

    return (
        <div className="min-h-screen bg-[#F4F1EE] py-20 flex items-center justify-center px-4">
            <div className="w-full max-w-[480px]">
                {/* Branding */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold tracking-tight text-[#1A1A1A]">
                        TILES<span className="text-[#BC6C4D]">GALLERY</span>
                    </h1>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#4A4A4A] mt-2 font-semibold">
                        Architectural Excellence
                    </p>
                </div>

                {/* Login Card */}
                <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
                    <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-2">Welcome Back</h2>
                    <p className="text-sm text-[#4A4A4A] mb-8">Access your curated architectural vision.</p>

                    {/* Social Login */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
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

                    <div className="relative flex items-center justify-center mb-8">
                        <div className="border-t border-gray-100 w-full"></div>
                        <span className="absolute bg-white px-4 text-[10px] uppercase tracking-widest text-[#4A4A4A] font-bold">
                            or email
                        </span>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        {/* Email Field */}
                        <div>
                            <label className="text-[10px] uppercase tracking-widest text-[#4A4A4A] font-bold block mb-2">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Enter a valid email"
                                        }
                                    })}
                                    type="email"
                                    className={`w-full pl-10 pr-4 py-3 bg-white border ${errors.email ? 'border-[#C0392B]' : 'border-gray-200'} rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#BC6C4D]/20 focus:border-[#BC6C4D] transition-all text-[#1A1A1A]`}
                                    placeholder="arch@studio.com"
                                />
                            </div>
                            {errors.email && <p className="text-[#C0392B] text-xs mt-1">{errors.email.message}</p>}
                        </div>

                        {/* Password Field */}
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-[10px] uppercase tracking-widest text-[#4A4A4A] font-bold">Password</label>
                                <button type="button" className="text-[10px] uppercase tracking-widest text-[#BC6C4D] font-bold hover:underline">Forgot?</button>
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 6,
                                            message: "Minimum 6 characters"
                                        }
                                    })}
                                    type="password"
                                    className={`w-full pl-10 pr-4 py-3 bg-white border ${errors.password ? 'border-[#C0392B]' : 'border-gray-200'} rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#BC6C4D]/20 focus:border-[#BC6C4D] transition-all text-[#1A1A1A]`}
                                    placeholder="••••••••"
                                />
                            </div>
                            {errors.password && <p className="text-[#C0392B] text-xs mt-1">{errors.password.message}</p>}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-[#BC6C4D] text-white py-4 rounded-md text-xs font-bold uppercase tracking-widest hover:bg-[#a05a3d] transition-all shadow-lg shadow-[#BC6C4D]/10 active:scale-[0.98] disabled:opacity-50"
                        >
                            {isSubmitting ? "Authenticating..." : "Sign In"}
                        </button>
                    </form>

                    <p className="text-center text-sm text-[#4A4A4A] mt-10">
                        Don’t have an account?{" "}
                        <Link href="/auth/signup" className="text-[#BC6C4D] font-bold hover:underline">
                            Register Now
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;