'use client';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const slides = [
    {
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBFFHG4B_sYVV0CMLAbUXOd378nwgyQbl3WACcu3jsOwrzsjo69G8sY6CjwL1YuDrlzUiz4k5fb_IubFc9CNq6CJ1AlFo8VQgjwAwvsd1eI2abkvtb3ge5lc9J3CxHAV1OwN7BOaw8Tq8HFXqqho_pZSC5XwjPhvy45eizo9l-36Az4N8JZhyg7QAEWwXBLSTbAYp4ZhHRjv--yPED3pnrSBauK2NPV1B1frju9IHlLW-sCIXLNrOOEDgtVYyTs0AhKBgvgeOUqPE',
        heading: 'Discover Your Perfect Aesthetic',
        subtext: 'Elevate your interiors with curated tile collections designed for modern living. Balance, texture, and timeless elegance — all in one place.',
    },
    {
        image: 'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=1920&q=80',
        heading: 'Crafted for Contemporary Spaces',
        subtext: 'Explore premium porcelain, marble, and artisan ceramics for your next architectural masterpiece.',
    },
    {
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&q=80',
        heading: 'Minimal Surfaces. Maximum Impact.',
        subtext: 'From matte terrazzo to polished marble — find textures that transform walls and floors into statements.',
    },
];

const Banner = () => {
    return (
        <div className="relative w-full h-[65vh] overflow-hidden">
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                className="w-full h-full"
            >
                {slides.map((slide, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="relative w-full h-full">
                            <img
                                src={slide.image}
                                alt={slide.heading}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40"></div>
                            <div className="relative h-full flex items-center px-6 md:px-16 max-w-7xl mx-auto">
                                <div className="max-w-xl text-white">
                                    <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
                                        {slide.heading}
                                    </h1>
                                    <p className="mt-4 text-sm md:text-base text-gray-200">
                                        {slide.subtext}
                                    </p>
                                    <Link href="/all-tiles">
                                        <button className="mt-6 bg-[#BC6C4D] px-6 py-3 rounded-md text-sm font-medium hover:opacity-90 transition flex items-center gap-2">
                                            Browse Now →
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;