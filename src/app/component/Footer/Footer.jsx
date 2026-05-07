import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaPinterestP, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#1A1A1A] text-gray-300 mt-auto">

            {/* Main Footer */}
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand */}
                    <div>
                        <Link href="/" className="text-2xl font-semibold text-white tracking-wide">
                            Tiles<span className="text-[#BC6C4D]">Gallery</span>
                        </Link>
                        <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                            Curated architectural tiles for modern living. Premium ceramic, porcelain, and natural stone finishes.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/" className="hover:text-[#BC6C4D] transition">Home</Link></li>
                            <li><Link href="/all-tiles" className="hover:text-[#BC6C4D] transition">All Tiles</Link></li>
                            <li><Link href="/profile" className="hover:text-[#BC6C4D] transition">My Profile</Link></li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Contact Us</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li>📧 support@tilesgallery.com</li>
                            <li>📞 +1 (555) 123-4567</li>
                            <li>📍 123 Design Street, NY 10001</li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Follow Us</h3>
                        <div className="flex gap-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[#BC6C4D] hover:border-[#BC6C4D] transition-colors">
                                <FaFacebookF size={14} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[#BC6C4D] hover:border-[#BC6C4D] transition-colors">
                                <FaInstagram size={14} />
                            </a>
                            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[#BC6C4D] hover:border-[#BC6C4D] transition-colors">
                                <FaPinterestP size={14} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[#BC6C4D] hover:border-[#BC6C4D] transition-colors">
                                <FaLinkedinIn size={14} />
                            </a>
                        </div>
                        <p className="mt-6 text-xs text-gray-500">Join the TileVerse community for exclusive offers.</p>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} TilesGallery. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Crafted with precision for modern architecture.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
