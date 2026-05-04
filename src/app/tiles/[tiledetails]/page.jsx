'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle2, Box, Leaf, ArrowLeft, XCircle } from 'lucide-react';

const TileDetailsPage = () => {
  const params = useParams();
  const tileId = params.tiledetails;

  const [tile, setTile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const fetchTile = async () => {
      try {
        const res = await fetch(`/api/proxy/products/${tileId}`);
        if (!res.ok) throw new Error('Tile not found');
        const data = await res.json();
        setTile(data);
        setMainImage(data.images?.[0] || null);
      } catch (err) {
        console.error('Failed to load tile:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchTile();
  }, [tileId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAF8]">
        <span className="loading loading-spinner loading-lg text-[#A15D3F]"></span>
      </div>
    );
  }

  if (!tile) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAFAF8] gap-4">
        <p className="text-gray-500 text-lg">Tile not found.</p>
        <Link href="/tiles" className="text-[#A15D3F] underline text-sm">← Back to all tiles</Link>
      </div>
    );
  }

  return (
    <div className="bg-[#FAFAF8] min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Back Link */}
        <Link href="/tiles" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#A15D3F] transition mb-10">
          <ArrowLeft size={16} /> Back to Collection
        </Link>

        {/* Main Content: Image Gallery and Purchase Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">

          {/* Left Column: Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-[#F0EDEA] border border-gray-100 overflow-hidden rounded-sm">
              <img
                src={mainImage || '/file.svg'}
                alt={tile.title}
                className="w-full h-full object-cover"
              />
            </div>
            {tile.images?.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {tile.images.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setMainImage(img)}
                    className={`relative aspect-square cursor-pointer border-2 rounded-sm overflow-hidden transition-all ${mainImage === img ? 'border-[#A15D3F]' : 'border-transparent hover:border-gray-200'}`}
                  >
                    <img src={img} alt={`${tile.title} view ${idx + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Info */}
          <div className="flex flex-col">
            <div className="flex justify-between items-start mb-2">
              <span className="text-[#A15D3F] text-[10px] uppercase tracking-[0.2em] font-bold">
                {tile.collection}
              </span>
              <span className={`flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest ${tile.inStock ? 'text-[#4CAF50]' : 'text-red-400'}`}>
                {tile.inStock ? <><CheckCircle2 size={12} /> In Stock</> : <><XCircle size={12} /> Out of Stock</>}
              </span>
            </div>

            <h1 className="text-3xl font-medium text-gray-900 mb-1">{tile.title}</h1>
            <p className="text-gray-400 text-sm mb-8">Product ID: {tile.productID}</p>

            <div className="border-t border-b border-gray-100 py-6 mb-8 flex justify-between items-baseline">
              <span className="text-2xl text-[#A15D3F] font-semibold">${tile.price?.toFixed(2)}</span>
              <span className="text-gray-400 text-sm">{tile.priceUnit}</span>
            </div>

            {/* Attributes Grid */}
            <div className="grid grid-cols-2 gap-y-8 mb-8">
              <div>
                <p className="text-[10px] uppercase text-gray-400 tracking-widest mb-1">Material</p>
                <p className="font-bold text-gray-900">{tile.material}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase text-gray-400 tracking-widest mb-1">Dimensions</p>
                <p className="font-bold text-gray-900">{tile.dimensions}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase text-gray-400 tracking-widest mb-1">Finish</p>
                <p className="font-bold text-gray-900">{tile.finish}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase text-gray-400 tracking-widest mb-1">Thickness</p>
                <p className="font-bold text-gray-900">{tile.thickness}</p>
              </div>
            </div>

            <div className="mb-10">
              <p className="text-[10px] uppercase text-gray-400 tracking-widest mb-3">Description</p>
              <p className="text-gray-600 leading-relaxed text-sm">
                {tile.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 mb-8">
              <button className="w-full bg-[#8B4513] text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#6F3710] transition-colors">
                Request Sample
              </button>
              <button className="w-full border border-gray-200 text-gray-800 py-4 text-xs font-bold uppercase tracking-widest hover:bg-gray-50 transition-colors">
                Calculate Quantity
              </button>
            </div>

            {/* Badges */}
            <div className="flex gap-6 border-t border-gray-100 pt-6">
              {tile.features?.map((feature, idx) => (
                <span key={idx} className="flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-tighter">
                  {feature.includes('CAD') ? <Box size={14} /> : <Leaf size={14} />}
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer: Technical Specification */}
        <div className="border-t border-gray-100 pt-16">
          <h2 className="text-lg font-medium text-gray-800 mb-8">Technical Specification</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-100 p-8 hover:shadow-sm transition-shadow">
              <h3 className="text-[#A15D3F] text-[11px] font-bold uppercase tracking-widest mb-4">Usage Range</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Suitable for interior floors, walls, and covered exterior spaces. High resistance to moisture and thermal shock.
              </p>
            </div>
            <div className="border border-gray-100 p-8 hover:shadow-sm transition-shadow">
              <h3 className="text-[#A15D3F] text-[11px] font-bold uppercase tracking-widest mb-4">Installation</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Standard thin-set mortar installation. Recommended grout joint: 2mm for a seamless architectural look.
              </p>
            </div>
            <div className="border border-gray-100 p-8 hover:shadow-sm transition-shadow">
              <h3 className="text-[#A15D3F] text-[11px] font-bold uppercase tracking-widest mb-4">Maintenance</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Easy to clean with pH-neutral detergents. Non-porous surface requires no sealing or special treatment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TileDetailsPage;