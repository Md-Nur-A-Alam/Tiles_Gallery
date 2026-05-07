const Loading = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#FAFAF8]">
            <div className="flex flex-col items-center gap-4">
                <span className="loading loading-spinner loading-lg text-[#BC6C4D]"></span>
                <p className="text-gray-400 text-sm tracking-wider uppercase">Loading Tiles...</p>
            </div>
        </div>
    );
};

export default Loading;