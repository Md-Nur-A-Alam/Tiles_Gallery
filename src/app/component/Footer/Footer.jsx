import { FaGithub, FaLinkedinIn, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaResearchgate } from "react-icons/fa6";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1A1A1A' }} className="text-[#F4F1EE] pt-12 pb-6 px-6 md:px-16">
      {/* TOP SECTION — 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        {/* Column 1 — Brand */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="text-[#BC6C4D] font-bold text-2xl tracking-tight">
            Tiles Gallery
          </Link>
          <p className="text-sm text-[#4A4A4A] leading-relaxed max-w-xs">
            Discover the art of surfaces. Premium tiles curated for modern spaces.
          </p>
        </div>

        {/* Column 2 — Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[#BC6C4D] text-xs uppercase tracking-[0.2em] font-bold">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="/" className="text-sm text-[#F4F1EE] hover:text-[#BC6C4D] transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/all-tiles" className="text-sm text-[#F4F1EE] hover:text-[#BC6C4D] transition">
                All Tiles
              </Link>
            </li>
            <li>
              <Link href="/profile" className="text-sm text-[#F4F1EE] hover:text-[#BC6C4D] transition">
                My Profile
              </Link>
            </li>
            <li>
              <Link href="/auth/signin" className="text-sm text-[#F4F1EE] hover:text-[#BC6C4D] transition">
                Sign In
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 — Contact Us */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[#BC6C4D] text-xs uppercase tracking-[0.2em] font-bold">
            Contact Us
          </h3>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-sm text-[#F4F1EE]">
              <Mail size={18} className="text-[#BC6C4D]" />
              <span>mdnuralam2812@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-[#F4F1EE]">
              <Phone size={18} className="text-[#BC6C4D]" />
              <span>01307631378</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-[#F4F1EE]">
              <MapPin size={18} className="text-[#BC6C4D]" />
              <span>Hi-Tech Park, Rajshahi</span>
            </div>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <hr style={{ borderColor: '#2a2a2a' }} className="mb-6" />

      {/* BOTTOM SECTION — flex between */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] text-[#666] tracking-wide text-center md:text-left">
          © 2025 Tiles Gallery. Crafted by Md. Nur A Alam. All rights reserved.
        </p>

        {/* Social icons row */}
        <div className="flex gap-6 items-center">
          <a href="https://github.com/Md-Nur-A-Alam" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} className="text-[#F4F1EE] hover:text-[#BC6C4D] transition cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/in/md-nur-a-alam13/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn size={20} className="text-[#F4F1EE] hover:text-[#BC6C4D] transition cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/md_nur_a_alam_6890/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} className="text-[#F4F1EE] hover:text-[#BC6C4D] transition cursor-pointer" />
          </a>
          <a href="https://web.facebook.com/Md.NurAAlamSoikot" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={20} className="text-[#F4F1EE] hover:text-[#BC6C4D] transition cursor-pointer" />
          </a>
          <a href="https://www.researchgate.net/profile/Md-Nur-Alam-13/research" target="_blank" rel="noopener noreferrer">
            <FaResearchgate size={20} className="text-[#F4F1EE] hover:text-[#BC6C4D] transition cursor-pointer" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
