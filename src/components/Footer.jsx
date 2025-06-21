// Description: A responsive footer component for a shopping website, featuring social media links and contact information.

import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left */}
        <div>
          <h2 className="text-xl font-bold">ShoppyGlobe 🛒</h2>
          <p className="text-sm text-gray-400">Your world of shopping at one place.</p>
        </div>

        {/* Center: Social & Contact */}
        <div className="flex space-x-6 text-xl">
          {/* Email */}
          <a href="mailto:your.support@shoppyglobe.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-400">
            <FaEnvelope title="Email" />
          </a>

          {/* Phone */}
          <a href="tel:+919685082298" className="hover:text-green-300" title="Call Us">
            <FaPhoneAlt />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919685082298?text=Hi%20ShoppyGlobe%20Team!"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400"
            title="Chat on WhatsApp"
          >
            <FaWhatsapp />
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/dhruvjain.03" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
            <FaInstagram title="Instagram" />
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/dhruv3352dj" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaLinkedin title="LinkedIn" />
          </a>

          {/* GitHub */}
          <a href="https://github.com/dhruvjjan" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaGithub title="GitHub" />
          </a>
        </div>

        {/* Right */}
        <div className="text-sm text-gray-500 text-center md:text-right">
          © {new Date().getFullYear()} ShoppyGlobe. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
