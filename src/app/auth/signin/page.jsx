'use client'
import React from 'react';
import { AiFillLock, AiTwotoneMail } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const SignIn = () => {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm();

    const handleGoogleLogin = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });
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
                toast.success("Login successful!");
                router.push('/');
            }

        } catch (err) {
            toast.error("Something went wrong");
        }
    };

    return (
        <div className='mx-auto mt-20 max-w-lg px-4'>
            <h2 className='text-center font-bold text-3xl'>TILE GALLERY</h2>
            <p className='text-sm text-center'>Architectural Excellence</p>

            <form onSubmit={handleSubmit(onSubmit)} className="fieldset bg-base-200 border-[#a0a0a0] rounded-box border p-20 mt-10">
                <h2 className='text-2xl'>Welcome Back</h2>
                <p className='text-[11px] -mt-2'>Enter your credentials to access your tile collection.</p>

                <label className="label mt-3">EMAIL ADDRESS</label>
                <div className={`input flex items-center gap-2 ${errors.email ? 'border-red-500' : ''}`}>
                    <AiTwotoneMail className="opacity-70" />
                    <input
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Enter a valid email"
                            }
                        })}
                        type="email"
                        className="grow"
                        placeholder="Email"
                    />
                </div>
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}

                <div className='flex justify-between'>
                    <label className="label mt-5">PASSWORD</label>
                    <label className="label mt-5 text-error cursor-pointer">forgot?</label>
                </div>
                <div className={`input flex items-center gap-2 ${errors.password ? 'border-red-500' : ''}`}>
                    <AiFillLock className="opacity-70" />
                    <input
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters"
                            }
                        })}
                        type="password"
                        className="grow"
                        placeholder="Password"
                    />
                </div>
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}

                <button
                    type='submit'
                    disabled={isSubmitting}
                    className="btn bg-[#BC6C4D] text-white border-none mt-6 hover:opacity-90 transition"
                >
                    {isSubmitting ? "Logging in..." : "LOGIN"}
                </button>

                <div className="divider divider-primary">or continue with</div>

                <button
                    type='button'
                    onClick={handleGoogleLogin}
                    className="btn border-[#a0a0a0] bg-[#363636]"
                >
                    <FcGoogle /> Sign in with Google
                </button>

                {/* ✅ Added here */}
                <p className="text-center text-xs mt-4">
                    Don’t have an account?{" "}
                    <Link href="/auth/signup" className="text-primary font-semibold hover:underline">
                        Sign Up
                    </Link>
                </p>

            </form>
        </div>
    );
};

export default SignIn;