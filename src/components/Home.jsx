import React from "react";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Feedbacks from "./Feedbacks";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Tech from "./Tech";
import Works from "./Works";
import Footer from "./Footer";

const Home = () => {
    return (
        <div className='relative z-0 bg-primary font-sans text-white main-bg'>
            <div className="relative">
                <Navbar />
                <Hero />
            </div>
            <div className="relative z-10">
                <About />
                <Experience />
                <Tech />
                <Works />
                <div className='relative z-0 gradient-radial from-slate-900 to-black'>
                    <Contact />
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Home;
