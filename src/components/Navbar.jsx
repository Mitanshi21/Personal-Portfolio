import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [scrolled, setScrolled] = useState(false);
    const [toggle, setToggle] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (nav) => {
        setToggle(false);
        setActive(nav.title);

        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                const element = document.getElementById(nav.id);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        } else {
            const element = document.getElementById(nav.id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <nav
            className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${scrolled ? "glass-morphism py-4" : "bg-transparent"
                }`}
        >
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <Link
                    to='/'
                    className='flex items-center gap-2'
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white text-xl">
                        ML
                    </div>
                    <p className='text-white text-[18px] font-bold cursor-pointer flex '>
                        {scrolled ? "Mitanshi Lakdawala" : "Developer"} &nbsp;
                        <span className='sm:block hidden font-light text-slate-300'>| Portfolio</span>
                    </p>
                </Link>

                {/* Desktop Menu */}
                <ul className='list-none hidden sm:flex flex-row gap-10 items-center'>
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className={`${active === nav.title ? "text-white" : "text-slate-400"
                                } hover:text-white text-[16px] font-medium cursor-pointer transition-colors`}
                            onClick={() => handleNavClick(nav)}
                        >
                            <span className="cursor-pointer">{nav.title}</span>
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={() => {
                                const contactSection = document.getElementById("contact");
                                if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
                                else {
                                    navigate("/");
                                    setTimeout(() => {
                                        const el = document.getElementById("contact");
                                        if (el) el.scrollIntoView({ behavior: "smooth" });
                                    }, 100);
                                }
                            }}
                            className="bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-2 rounded-full text-white text-sm font-medium transition-all"
                        >
                            Let's Talk
                        </button>
                    </li>
                </ul>

                {/* Mobile Menu */}
                <div className='sm:hidden flex flex-1 justify-end items-center z-50'>
                    <div
                        className="w-[28px] h-[28px] object-contain cursor-pointer flex flex-col justify-center items-center gap-1.5 relative z-50"
                        onClick={() => setToggle(!toggle)}
                    >
                        <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${toggle ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${toggle ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${toggle ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </div>

                    <AnimatePresence>
                        {toggle && (
                            <motion.div
                                initial={{ x: "100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: "100%", opacity: 0 }}
                                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                                className="fixed top-0 right-0 w-3/4 h-screen bg-gradient-to-bl from-slate-900/95 to-slate-900/95 backdrop-blur-xl z-40 shadow-2xl border-l border-white/10 flex flex-col justify-start items-start pt-28 px-8"
                            >
                                <ul className='list-none flex flex-col gap-8 w-full'>
                                    {navLinks.map((nav) => (
                                        <li
                                            key={nav.id}
                                            className={`font-medium cursor-pointer text-[20px] ${active === nav.title ? "text-white" : "text-slate-400"
                                                } hover:text-white transition-colors border-b border-white/5 pb-2 w-full`}
                                            onClick={() => handleNavClick(nav)}
                                        >
                                            <span className="cursor-pointer">{nav.title}</span>
                                        </li>
                                    ))}
                                    <li>
                                        <button
                                            onClick={() => {
                                                setToggle(false);
                                                const contactSection = document.getElementById("contact");
                                                if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
                                                else {
                                                    navigate("/");
                                                    setTimeout(() => {
                                                        const el = document.getElementById("contact");
                                                        if (el) el.scrollIntoView({ behavior: "smooth" });
                                                    }, 100);
                                                }
                                            }}
                                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl text-lg font-medium transition-all shadow-lg shadow-indigo-500/20 text-center mt-4"
                                        >
                                            Let's Talk
                                        </button>
                                    </li>
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
