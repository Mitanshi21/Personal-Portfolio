import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [scrolled, setScrolled] = useState(false);
    const [toggle, setToggle] = useState(false);

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

                <ul className='list-none hidden sm:flex flex-row gap-10 items-center'>
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className={`${active === nav.title ? "text-white" : "text-slate-400"
                                } hover:text-white text-[16px] font-medium cursor-pointer transition-colors`}
                            onClick={() => setActive(nav.title)}
                        >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                    {/* CTA Button in Nav */}
                    <li>
                        <a
                            href="#contact"
                            className="bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-2 rounded-full text-white text-sm font-medium transition-all"
                        >
                            Let's Talk
                        </a>
                    </li>
                </ul>

                {/* Mobile Menu */}
                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <div
                        className="w-[28px] h-[28px] object-contain cursor-pointer flex flex-col justify-center items-center gap-1.5"
                        onClick={() => setToggle(!toggle)}
                    >
                        <span className={`block w-8 h-0.5 bg-white transition-all ${toggle ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-8 h-0.5 bg-white transition-all ${toggle ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-8 h-0.5 bg-white transition-all ${toggle ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </div>

                    <div
                        className={`${!toggle ? "hidden" : "flex"
                            } p-6 glass-morphism absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                    >
                        <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                            {navLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={`font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-slate-400"
                                        }`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(nav.title);
                                    }}
                                >
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
