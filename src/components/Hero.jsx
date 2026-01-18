import { motion } from "framer-motion";
import { styles } from "../styles";
import resume from "../assets/mitanshi_resume.pdf";
import selfProfessional from "../assets/self_professional.png";

const Hero = () => {
    return (
        <section className={`relative w-full h-screen mx-auto flex items-center overflow-hidden bg-primary`}>
            {/* Dynamic Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-[100px] animate-pulse-slow" />
                <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-l from-blue-500/10 to-teal-500/10 blur-[80px]" />
            </div>

            <div
                className={`max-w-7xl mx-auto ${styles.paddingX} w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-10 relative z-10`}
            >
                {/* Text Content */}
                <div className="flex-1 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className={`${styles.heroHeadText} text-white`}>
                            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915EFF] to-[#00CEA8]">Mitanshi Lakdawala</span>
                        </h1>
                        <p className={`${styles.heroSubText} mt-4 text-slate-300 max-w-2xl mx-auto lg:mx-0`}>
                            A passionate <span className="text-white font-semibold">Full Stack Developer</span> turning ideas into
                            immersive, high-performance web & mobile applications.
                        </p>
                    </motion.div>

                    <motion.div
                        className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <a
                            href="#work"
                            className="bg-[#915EFF] text-white py-3 px-8 rounded-full font-bold shadow-lg hover:bg-purple-600 hover:shadow-purple-500/30 transition-all transform hover:-translate-y-1"
                        >
                            View Projects
                        </a>
                        <a
                            href={resume}
                            download="Mitanshi_Lakdawala_Resume.pdf"
                            className="bg-transparent border border-slate-500 text-white py-3 px-8 rounded-full font-medium hover:bg-slate-800 transition-all flex items-center gap-2"
                        >
                            <span>Download Resume</span>
                        </a>
                    </motion.div>
                </div>

                {/* Hero Visual - Abstract CSS Art instead of Image */}
                <motion.div
                    className="flex-1 flex justify-center items-center relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
                        {/* Rotating Rings */}
                        <div className="absolute inset-0 border border-slate-700/50 rounded-full animate-[spin_10s_linear_infinite]" />
                        <div className="absolute inset-4 border border-slate-600/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                        <div className="absolute inset-12 border-2 border-dashed border-[#915EFF]/30 rounded-full animate-[spin_20s_linear_infinite]" />

                        {/* Center Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-[#915EFF] to-[#00CEA8] rounded-full blur-[60px] opacity-60" />

                        {/* Foreground Element: Initials or Logo Concept */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-slate-900 border border-slate-700 rounded-2xl flex items-center justify-center shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-500 cursor-pointer">
                            <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">ML</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <div className='absolute bottom-8 w-full hidden sm:flex justify-center items-center z-10'>
                <a href='#about'>
                    <div className='w-[30px] h-[54px] rounded-3xl border-2 border-slate-500 flex justify-center items-start p-2'>
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                            className='w-2 h-2 rounded-full bg-slate-400 mb-1'
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
