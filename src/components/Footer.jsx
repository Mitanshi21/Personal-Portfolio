import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLinkClick = (id) => {
        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <footer className="w-full bg-slate-900 border-t border-slate-800 pt-10 pb-10 mt-20 relative z-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Brand / Copyright */}
                <div className="text-center md:text-left">
                    <p className="text-slate-300 font-medium text-lg">Mitanshi Lakdawala</p>
                    <p className="text-slate-500 text-sm mt-1">
                        &copy; {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>

                {/* Social Links */}
                <div className="flex gap-6">
                    <a
                        href="https://github.com/Mitanshi21"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors text-2xl hover:scale-110 transform duration-200"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://linkedin.com/in/mitanshi-lakdawala"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-blue-500 transition-colors text-2xl hover:scale-110 transform duration-200"
                    >
                        <FaLinkedin />
                    </a>
                </div>

                {/* Quick Links (Optional, but adds weight) */}
                <div className="flex gap-6 text-sm font-medium text-slate-400">
                    <button onClick={() => handleLinkClick("about")} className="hover:text-white transition-colors uppercase">About</button>
                    <button onClick={() => handleLinkClick("work")} className="hover:text-white transition-colors uppercase">Work</button>
                    <button onClick={() => handleLinkClick("contact")} className="hover:text-white transition-colors uppercase">Contact</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
