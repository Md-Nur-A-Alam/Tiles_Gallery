'use client'
import Link from 'next/link';

const Banner = () => {
    return (
        <div className="relative w-full h-[65vh] overflow-hidden">

            <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBFFHG4B_sYVV0CMLAbUXOd378nwgyQbl3WACcu3jsOwrzsjo69G8sY6CjwL1YuDrlzUiz4k5fb_IubFc9CNq6CJ1AlFo8VQgjwAwvsd1eI2abkvtb3ge5lc9J3CxHAV1OwN7BOaw8Tq8HFXqqho_pZSC5XwjPhvy45eizo9l-36Az4N8JZhyg7QAEWwXBLSTbAYp4ZhHRjv--yPED3pnrSBauK2NPV1B1frju9IHlLW-sCIXLNrOOEDgtVYyTs0AhKBgvgeOUqPE"
                alt="tiles"
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative h-full flex items-center px-6 md:px-16 max-w-7xl mx-auto">

                <div className="max-w-xl text-white">

                    <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
                        Discover Your Perfect Aesthetic
                    </h1>

                    <p className="mt-4 text-sm md:text-base text-gray-200">
                        Elevate your interiors with curated tile collections designed 
                        for modern living. Balance, texture, and timeless elegance — all in one place.
                    </p>

                    <Link href="/tiles">
                        <button className="mt-6 bg-[#BC6C4D] px-6 py-3 rounded-md text-sm font-medium hover:opacity-90 transition flex items-center gap-2">
                            Browse Now →
                        </button>
                    </Link>

                </div>

            </div>
        </div>
    );
};

export default Banner;