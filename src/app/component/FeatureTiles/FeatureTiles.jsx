import Link from 'next/link';
import { getProducts } from '@/lib/getProducts';

const FeatureTiles = async () => {
  let tiles = [];
  try {
    tiles = await getProducts();
  } catch (err) {
    console.error('Failed to fetch featured tiles:', err);
  }

  // Show only "Featured Tiles" collection items, fallback to first 4
  const featured = tiles.filter(t => t.collection === 'Featured Tiles');
  const displayTiles = featured.length > 0 ? featured : tiles.slice(0, 4);

  return (
    <div className="bg-[#FAFAF8] py-20">
      <div className="container mx-auto px-6">
        <p className="text-[10px] uppercase tracking-[0.25em] text-[#A15D3F] font-bold mb-2">Curated Selection</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12">Featured Tiles</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayTiles.map((tile) => (
            <Link href={`/all-tiles/${tile.id}`} key={tile.id} className="group">
              <div className="bg-white border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={tile.images?.[0] || '/file.svg'}
                    alt={tile.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 border-t border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900">{tile.title}</h3>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">
                    {tile.material} • {tile.finish}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-[#A15D3F] font-bold">
                      ${tile.price?.toFixed(2)} <span className="text-xs font-normal text-gray-400">/ m²</span>
                    </p>
                    <span className="text-[11px] font-bold uppercase tracking-tight text-gray-800 group-hover:text-[#A15D3F] transition-colors">
                      View Details →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link href="/all-tiles" className="inline-block px-8 py-3 border border-[#BC6C4D] text-[#BC6C4D] text-xs font-bold uppercase tracking-widest hover:bg-[#BC6C4D] hover:text-white transition-colors">
            View All Tiles →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureTiles;