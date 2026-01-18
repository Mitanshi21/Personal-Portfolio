import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { FaCode, FaServer, FaDatabase, FaMobileAlt } from "react-icons/fa";

const getIcon = (title) => {
    if (title.includes("Full Stack")) return <FaCode />;
    if (title.includes("Mobile")) return <FaMobileAlt />;
    if (title.includes("Backend")) return <FaServer />;
    if (title.includes("Database")) return <FaDatabase />;
    return <FaCode />;
};

const ServiceCard = ({ index, title, description }) => (
    <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className='group w-full'
    >
        <div
            className='w-full min-h-[250px] bg-slate-900 border border-slate-800 rounded-[20px] py-10 px-6 flex flex-col items-center justify-center gap-6 shadow-card transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-glow group-hover:border-indigo-500/50'
        >
            <div className="w-20 h-20 rounded-full bg-slate-800 flex items-center justify-center text-4xl text-indigo-500 group-hover:text-white group-hover:bg-indigo-500 transition-all duration-300">
                {getIcon(title)}
            </div>

            <h3 className='text-white text-[18px] font-bold text-center group-hover:text-indigo-400 transition-colors'>
                {title}
            </h3>

            <p className="text-slate-400 text-sm text-center leading-relaxed">
                {description}
            </p>
        </div>
    </motion.div>
);

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-slate-300 text-[17px] max-w-3xl leading-[30px]'
            >
                I am a passionate Full Stack Developer turning ideas into immersive, high-performance web & mobile applications.
                My expertise spans across the entire stack, from designing intuitive frontend interfaces
                to architecting secure and efficient backend systems. I thrive in creating
                seamless digital experiences that drive value.
            </motion.p>

            <div className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
