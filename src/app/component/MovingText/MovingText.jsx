'use client'
import React from 'react';
import { motion } from 'framer-motion';

const MovingText = () => {

    const items = [
        "New Arrivals: Marble Luxe Series",
        "Weekly Feature: Modern Geometric Patterns",
        "Minimal Surfaces. Maximum Impact.",
        "Crafted for Contemporary Spaces",
        "Join the TileVerse Community"
    ];

    return (
        <div className="w-full overflow-hidden border-y border-[#e5e5e5] bg-[#F4F1EE] py-3">

            <motion.div
                className="flex gap-10 whitespace-nowrap text-sm md:text-base text-[#4A4A4A] font-medium"
                animate={{ x: ["0%", "-100%"] }}
                transition={{
                    repeat: Infinity,
                    duration: 25,
                    ease: "linear"
                }}
            >
                {[...items, ...items].map((item, i) => (
                    <span
                        key={i}
                        className="flex items-center gap-3 hover:text-[#BC6C4D] transition cursor-pointer"
                    >
                        <span className="w-2 h-2 bg-[#BC6C4D] rounded-full"></span>
                        {item}
                    </span>
                ))}
            </motion.div>

        </div>
    );
};

export default MovingText;