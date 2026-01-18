import React from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { motion } from "framer-motion";
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt,
    FaBootstrap, FaLaravel, FaWordpress, FaShopify, FaJava, FaPython, FaDatabase
} from "react-icons/fa";
import {
    SiTailwindcss, SiMongodb, SiMysql, SiPostman, SiKotlin, SiSqlite, SiVite, SiThreedotjs, SiGulp
} from "react-icons/si";
import { TbBrandCSharp, TbSql } from "react-icons/tb";

// Icon mapping
const getIcon = (name) => {
    switch (name) {
        case "HTML 5": return <FaHtml5 className="text-[#E34F26]" />;
        case "CSS 3": return <FaCss3Alt className="text-[#1572B6]" />;
        case "JavaScript": return <FaJs className="text-[#F7DF1E]" />;
        case "C#": return <TbBrandCSharp className="text-[#239120]" />;
        case "Java": return <FaJava className="text-[#007396]" />;
        case "Python": return <FaPython className="text-[#3776AB]" />;
        case "Kotlin": return <SiKotlin className="text-[#7F52FF]" />;
        case "React JS": return <FaReact className="text-[#61DAFB]" />;
        case "React Native": return <FaReact className="text-[#61DAFB]" />;
        case "Vite": return <SiVite className="text-[#646CFF]" />;
        case "Three JS": return <SiThreedotjs className="text-white" />;
        case "Tailwind CSS": return <SiTailwindcss className="text-[#06B6D4]" />;
        case "Bootstrap": return <FaBootstrap className="text-[#7952B3]" />;
        case "Node JS": return <FaNodeJs className="text-[#339933]" />;
        case "Laravel": return <FaLaravel className="text-[#FF2D20]" />;
        case "MySQL": return <SiMysql className="text-[#4479A1]" />;
        case "SQL": return <TbSql className="text-[#003B57]" />;
        case "SQLite": return <SiSqlite className="text-[#003B57]" />;
        case "MongoDB": return <SiMongodb className="text-[#47A248]" />;
        case "WordPress": return <FaWordpress className="text-[#21759B]" />;
        case "Shopify": return <FaShopify className="text-[#96BF48]" />;
        case "Git": return <FaGitAlt className="text-[#F05032]" />;
        case "Postman": return <SiPostman className="text-[#FF6C37]" />;
        case "Gulp": return <SiGulp className="text-[#CF4647]" />;
        default: return <div className="text-white">?</div>;
    }
};

const techCategories = {
    "Frontend": ["HTML 5", "CSS 3", "JavaScript", "React JS", "Three JS", "Vite", "Tailwind CSS", "Bootstrap"],
    "Backend": ["Node JS", "Laravel", "Java", "Python", "C#"],
    "Mobile": ["React Native", "Kotlin"],
    "Database & Storage": ["MySQL", "SQL", "SQLite", "MongoDB"],
    "Tools & Platforms": ["Git", "Postman", "Gulp", "WordPress", "Shopify"]
};

const Tech = () => {
    return (
        <div className="flex flex-col gap-8 md:gap-14 relative z-10 w-full">
            <motion.div variants={styles.sectionHeadText}>
                <p className={`${styles.sectionSubText} text-center`}>My tools</p>
                <h2 className={`${styles.sectionHeadText} text-center mb-6 md:mb-10`}>Technologies.</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                {Object.entries(techCategories).map(([category, items], index) => {
                    // Check if it's the last item and we have an odd number of categories
                    const isLastOdd = index === Object.keys(techCategories).length - 1 && Object.keys(techCategories).length % 2 !== 0;

                    return (
                        <div
                            key={category}
                            className={`flex flex-col gap-4 md:gap-6 relative p-4 md:p-6 rounded-2xl bg-slate-900/20 border border-slate-800/50 ${isLastOdd ? 'md:col-span-2' : ''}`}
                        >
                            {/* Category Label */}
                            <div className={`flex items-center gap-4 mb-2 ${isLastOdd ? 'justify-center' : ''}`}>
                                <h3 className="text-xl font-bold text-white pl-3 border-l-4 border-indigo-500">{category}</h3>
                            </div>

                            {/* Grid */}
                            <div className={`flex flex-row flex-wrap gap-3 md:gap-4 justify-center md:justify-start ${isLastOdd ? 'md:justify-center' : ''}`}>
                                {items.map((technology) => (
                                    <div
                                        className='w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center p-2 bg-slate-900 border border-slate-800 rounded-xl hover:border-indigo-500 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all duration-300 group cursor-default'
                                        key={technology}
                                    >
                                        <div className="text-2xl md:text-3xl mb-2 transform group-hover:scale-110 transition-transform duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                                            {getIcon(technology)}
                                        </div>
                                        <div className="text-slate-400 text-[9px] md:text-[10px] font-semibold text-center group-hover:text-white transition-colors">
                                            {technology}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SectionWrapper(Tech, "tech");
