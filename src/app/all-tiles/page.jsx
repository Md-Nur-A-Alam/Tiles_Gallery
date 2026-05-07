'use client';
import React, { useState, useEffect } from 'react';
import TileCard from '../component/tileCard/TileCard';

const AllTilesPage = () => {
    const [tiles, setTiles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTiles = async () => {
            try {
                // Using the proxy route defined in next.config.mjs
                const res = await fetch('/api/proxy/products');
                const data = await res.json();
                setTiles(Array.isArray(data) ? data : data.products || []);
            } catch (err) {
                console.error('Failed to fetch tiles:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchTiles();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#FAFAF8]">
                <span className="loading loading-spinner loading-lg text-[#BC6C4D]"></span>
            </div>
        );
    }

    return (
        <div className="bg-[#FAFAF8] min-h-screen py-20">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#BC6C4D] font-bold mb-2">Full Collection</p>
                    <h1 className="text-4xl font-semibold text-[#1A1A1A]">All Architectural Tiles</h1>
                    <p className="text-[#4A4A4A] mt-4 max-w-2xl">
                        Explore our complete range of premium ceramic, porcelain, and natural stone finishes 
                        curated for modern architectural design projects.
                    </p>
                </div>

                {tiles.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-lg border border-gray-100 shadow-sm">
                        <p className="text-gray-400">No tiles found in our collection.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {tiles.map((tile) => (
                            <TileCard key={tile.id} tile={tile} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllTilesPage;