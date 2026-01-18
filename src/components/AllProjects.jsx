import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { styles } from "../styles";
import { projects } from "../constants";
import { ProjectCard } from "./Works"; // Importing the card from Works
import Navbar from "./Navbar";
import Footer from "./Footer";

const AllProjects = () => {
    const navigate = useNavigate();

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative z-0 bg-primary min-h-screen">
            <Navbar />

            <div className="pt-28 pb-10 px-6 max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <button
                        onClick={() => navigate('/')}
                        className="mb-8 flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                    >
                        <span>←</span> Back to Home
                    </button>

                    <p className={`${styles.sectionSubText} `}>My creative portfolio</p>
                    <h2 className={`${styles.sectionHeadText}`}>All Projects.</h2>
                </motion.div>

                <div className='w-full flex'>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className='mt-3 text-slate-400 text-[17px] max-w-3xl leading-[30px]'
                    >
                        Browse through my complete collection of projects, ranging from mobile applications to complex web systems.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                    {projects.map((project, index) => (
                        <div key={`project-${index}`}>
                            {/* Manually invoke the card since it's usually wrapped in motion which needs AnimatePresence or simpler handling here */}
                            <ProjectCard index={index} {...project} />
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AllProjects;
