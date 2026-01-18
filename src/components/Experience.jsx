import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => {
    return (
        <div
            className="sticky pl-8 sm:pl-12 py-6 group"
            style={{
                top: `calc(15% + ${index * 40}px)`,
                zIndex: index + 1
            }}
        >
            {/* Timeline Line - adjusted to be full height for stacking effect */}
            <div className="absolute left-0 top-0 h-full w-[2px] bg-slate-800/50"></div>

            {/* Timeline Dot */}
            <div className="absolute left-[-4px] top-8 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-900 shadow-[0_0_10px_rgba(99,102,241,0.5)] z-10"></div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-900 border border-slate-800/80 p-6 rounded-xl backdrop-blur-xl shadow-2xl relative overflow-hidden"
            >
                {/* Subtle gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent pointer-events-none" />

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2 relative z-10">
                    <div>
                        <h3 className="text-white text-[20px] font-bold">{experience.title}</h3>
                        <p className="text-indigo-400 text-[16px] font-semibold">
                            {experience.company_name}
                        </p>
                    </div>
                    <span className="py-1 px-3 bg-slate-800 rounded-full text-slate-400 text-xs font-mono border border-slate-700">
                        {experience.date}
                    </span>
                </div>

                <ul className='mt-5 list-none space-y-3 relative z-10'>
                    {experience.points.map((point, index) => (
                        <li
                            key={`experience-point-${index}`}
                            className='text-slate-300 text-[14px] pl-1 tracking-wider flex items-start gap-2'
                        >
                            <span className="text-indigo-500 mt-1">▹</span>
                            {point}
                        </li>
                    ))}
                </ul>
            </motion.div>
        </div>
    );
};

const Experience = () => {
    return (
        <div className="max-w-4xl mx-auto pb-20"> {/* Added padding bottom to allow full scroll */}
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>My professional journey</p>
                <h2 className={`${styles.sectionHeadText} text-center mb-16`}>Work Experience.</h2>
            </motion.div>

            <div className='flex flex-col relative ml-4 md:ml-0'>
                {experiences.map((experience, index) => (
                    <ExperienceCard
                        key={`experience-${index}`}
                        experience={experience}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Experience, "experience");
