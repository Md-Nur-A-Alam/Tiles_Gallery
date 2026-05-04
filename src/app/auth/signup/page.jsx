'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { AiFillLock, AiTwotoneMail } from 'react-icons/ai';
import { BiCamera } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

const SignUpPage = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting }
    } = useForm();

    const password = watch("password");

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
            }

        } catch {
            toast.error("An unexpected error occurred");
        }
    };

    return (
        <div className='mx-auto mt-20 max-w-lg'>
            <h2 className='text-center font-bold text-3xl uppercase'>Tile Gallery</h2>
            <p className='text-sm text-center'>Architectural Excellence</p>

            <form onSubmit={handleSubmit(onSubmit)} className="fieldset bg-base-200 border-[#a0a0a0] rounded-box border p-5 md:p-20 mt-10">
                <h2 className='text-2xl text-center'>Create an Account</h2>
                <p className='text-[11px] -mt-2 mb-4 text-center'>Join TileVerse to curate your architectural vision</p>

                <button type='button' className="btn border-[#a0a0a0] bg-[#363636] w-full">
                    <FcGoogle /> Continue with Google
                </button>

                <div className="divider divider-primary">or with email</div>

                {/* FULL NAME */}
                <label className="label mt-1 md:mt-3">FULL NAME</label>
                <div className={`input flex items-center gap-2 ${errors.fullName ? 'border-red-500' : ''}`}>
                    <CgProfile className="opacity-70" />
                    <input
                        {...register("fullName", {
                            required: "Name is required",
                            minLength: {
                                value: 3,
                                message: "Name must be at least 3 characters"
                            }
                        })}
                        type="text"
                        className="grow"
                        placeholder="Enter Your Name"
                    />
                </div>
                {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}

                {/* EMAIL */}
                <label className="label mt-1 md:mt-3">EMAIL</label>
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
                        placeholder="Email address"
                    />
                </div>
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}

                {/* PHOTO URL */}
                <label className="label mt-1 md:mt-3">PHOTO URL</label>
                <div className={`input flex items-center gap-2 ${errors.photoUrl ? 'border-red-500' : ''}`}>
                    <BiCamera className="opacity-70" />
                    <input
                        {...register("photoUrl", {
                            required: "Photo URL is required",
                            validate: (value) => {
                                try {
                                    new URL(value);
                                    return true;
                                } catch {
                                    return "Enter a valid URL";
                                }
                            }
                        })}
                        type="text"
                        className="grow"
                        placeholder="https://..."
                    />
                </div>
                {errors.photoUrl && <p className="text-red-500 text-xs mt-1">{errors.photoUrl.message}</p>}

                {/* PASSWORD */}
                <label className="label mt-1 md:mt-3">NEW PASSWORD</label>
                <div className={`input flex items-center gap-2 ${errors.password ? 'border-red-500' : ''}`}>
                    <AiFillLock className="opacity-70" />
                    <input
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 8,
                                message: "Minimum 8 characters required"
                            },
                            validate: (value) =>
                                /[A-Z]/.test(value) || "Must include one uppercase letter"
                        })}
                        type="password"
                        className="grow"
                        placeholder="*****"
                    />
                </div>
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}

                {/* CONFIRM PASSWORD */}
                <label className="label mt-1 md:mt-3">CONFIRM PASSWORD</label>
                <div className={`input flex items-center gap-2 ${errors.confirmPassword ? 'border-red-500' : ''}`}>
                    <AiFillLock className="opacity-70" />
                    <input
                        {...register("confirmPassword", {
                            required: "Confirm your password",
                            validate: (value) =>
                                value === password || "Passwords do not match"
                        })}
                        type="password"
                        className="grow"
                        placeholder="*****"
                    />
                </div>
                {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}

                <button
                    type='submit'
                    disabled={isSubmitting}
                    className="btn btn-primary mt-5 w-full uppercase"
                >
                    {isSubmitting ? "Creating..." : "Create Account"}
                </button>

                {/* ✅ Added here */}
                <p className="text-center text-xs mt-4">
                    Already have an account?{" "}
                    <Link href="/auth/signin" className="text-primary font-semibold hover:underline">
                        Sign In
                    </Link>
                </p>

            </form>
        </div>
    );
};

export default SignUpPage;