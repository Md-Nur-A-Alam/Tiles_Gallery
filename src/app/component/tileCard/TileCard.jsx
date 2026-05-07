import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const TileCard = ({ tile }) => {
  return (
    <div className="bg-white border border-gray-100 group cursor-pointer transition-all hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <span className="absolute top-4 left-4 z-10 bg-white/90 px-3 py-1 text-[10px] uppercase tracking-widest font-bold text-gray-800">
          {tile.category}
        </span>
        <img
          src={tile.images?.[0] || '/file.svg'}
          alt={tile.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6 border-t border-gray-100">
        <h3 className="text-xl font-semibold text-gray-900 mb-1">{tile.title}</h3>
        <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-4">
          {tile.material} • {tile.dimensions}
        </p>

        <div className="flex justify-between items-center mt-6">
          <p className="text-[#BC6C4D] font-bold">
            ${tile.price?.toFixed(2)} <span className="text-xs font-normal">/ m²</span>
          </p>
          <Link href={`/all-tiles/${tile.id}`}>
            <button className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-tight text-gray-800 group-hover:text-[#BC6C4D] transition-colors">
              Details <ArrowRight size={14} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TileCard;