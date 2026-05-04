import Link from 'next/link';

const getTiles = async () => {
  const res = await fetch(`${process.env.JSON_DB_URI || 'http://localhost:5004/products'}`, {
    cache: 'no-store',
  });
  return res.json();
};

const FeatureTiles = async () => {
  let tiles = [];
  try {
    const data = await getTiles();
    tiles = Array.isArray(data) ? data : data.products || [];
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
            <Link href={`/tiles/${tile.id}`} key={tile.id} className="group">
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
                  <p className="text-[#A15D3F] font-bold mt-4">
                    ${tile.price?.toFixed(2)} <span className="text-xs font-normal text-gray-400">/ m²</span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link href="/tiles" className="inline-block px-8 py-3 border border-[#8B4513] text-[#8B4513] text-xs font-bold uppercase tracking-widest hover:bg-[#8B4513] hover:text-white transition-colors">
            View All Tiles →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureTiles;