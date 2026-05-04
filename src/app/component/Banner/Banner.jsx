'use client'
import Link from 'next/link';

const Banner = () => {
    return (
        <div className="w-full bg-base-200 py-20 px-6 md:px-16 text-center rounded-2xl shadow-sm">
            
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Discover Your Perfect Aesthetic
            </h1>

            <p className="mt-4 text-sm md:text-base text-gray-500 max-w-2xl mx-auto">
                Explore a curated collection of premium tiles designed to elevate your space. 
                From modern minimalism to timeless elegance, find the perfect style that 
                reflects your vision and transforms your environment effortlessly.
            </p>

            <div className="mt-8">
                <Link href="/tiles">
                    <button className="btn btn-primary px-8">
                        Browse Now
                    </button>
                </Link>
            </div>

        </div>
    );
};

export default Banner;