import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#FAFAF8]">
            <div className="text-center max-w-md px-6">
                <h1 className="text-8xl font-bold text-[#A15D3F] mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">Page Not Found</h2>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                    The tile you're looking for seems to have slipped through the grout lines.
                    Let's get you back on solid ground.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                        href="/"
                        className="px-6 py-3 bg-[#8B4513] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#6F3710] transition-colors"
                    >
                        Back to Home
                    </Link>
                    <Link
                        href="/all-tiles"
                        className="px-6 py-3 border border-gray-200 text-gray-800 text-xs font-bold uppercase tracking-widest hover:bg-gray-50 transition-colors"
                    >
                        Browse Tiles
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
