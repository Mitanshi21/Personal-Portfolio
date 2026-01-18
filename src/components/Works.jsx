import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

export const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
    isPrivate,
    className
}) => {
    const navigate = useNavigate();
    const handleCardClick = () => {
        const slug = name.toLowerCase().replace(/\s+/g, '-');
        navigate(`/project/${slug}`);
    };

    const isCustomImage = image && !image.startsWith("project");

    return (
        <div className={className}>
            <motion.div
                variants={fadeIn("up", "spring", index * 0.5, 0.75)}
                onClick={handleCardClick}
                className='relative p-5 rounded-2xl w-full bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-md border border-white/10 hover:border-indigo-500/50 transition-all duration-500 group overflow-hidden cursor-pointer'
            >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>

                <div className='relative w-full h-[230px] rounded-xl overflow-hidden'>
                    {isCustomImage ? (
                        <div className="relative w-full h-full">
                            <img
                                src={image}
                                alt={name}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                        </div>
                    ) : (
                        <>
                            {/* Generative Gradient Background for placeholders */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${index % 2 === 0 ? 'from-violet-900/50 via-slate-900 to-indigo-900/50' : 'from-slate-900 via-purple-900/20 to-slate-900'} group-hover:scale-110 transition-transform duration-700`}></div>

                            {/* Abstract Shapes/Pattern overlay */}
                            <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
                        </>
                    )}

                    {/* Title Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center p-6 text-center z-10">
                        <h3 className="text-white/90 font-bold text-2xl tracking-tight leading-snug drop-shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            {name}
                        </h3>
                    </div>

                    <div className='absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm z-20'>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                if (!isPrivate) window.open(source_code_link, "_blank");
                            }}
                            className={`transform scale-75 group-hover:scale-100 transition-transform duration-300 delay-100 px-6 py-3 rounded-full flex items-center justify-center gap-2 ${isPrivate ? 'bg-slate-700/50 cursor-not-allowed text-slate-400' : 'bg-indigo-600 hover:bg-indigo-700 cursor-pointer text-white shadow-lg shadow-indigo-500/30'}`}
                        >
                            {isPrivate ? (
                                <>
                                    <span className="text-lg">🔒</span>
                                    <span className="font-medium text-sm">Private Repo</span>
                                </>
                            ) : (
                                <>
                                    <span className="text-lg font-bold">{'</>'}</span>
                                    <span className="font-medium text-sm">View Code</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>

                <div className='mt-5 relative z-10'>
                    <p className='mt-2 text-slate-400 text-[14px] leading-relaxed line-clamp-3 group-hover:text-slate-300 transition-colors'>
                        {description}
                    </p>
                </div>

                <div className='mt-4 flex flex-wrap gap-2 relative z-10'>
                    {tags.map((tag) => (
                        <span
                            key={`${name}-${tag.name}`}
                            className={`text-[12px] px-3 py-1 rounded-full bg-white/5 border border-white/5 text-slate-300 ${tag.color ? tag.color.replace('text-', 'text-') : ''}`}
                        >
                            #{tag.name}
                        </span>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

const Works = () => {
    const navigate = useNavigate();

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} `}>My creative portfolio</p>
                <h2 className={`${styles.sectionHeadText}`}>Selected Projects.</h2>
            </motion.div>

            <div className='w-full flex'>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-3 text-slate-400 text-[17px] max-w-3xl leading-[30px]'
                >
                    A collection of projects that demonstrate my technical capabilities and creative problem-solving.
                    Each project represents a unique challenge and solution in web development.
                </motion.p>
            </div>

            <div className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {projects.slice(0, 3).map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>

            <div className="w-full flex justify-center mt-14">
                <button
                    onClick={() => navigate('/projects')}
                    className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white font-semibold transition-all duration-300 flex items-center gap-2 group"
                >
                    View All Projects
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
            </div>
        </>
    );
};

export default SectionWrapper(Works, "work");
