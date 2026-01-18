import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { projects } from "../constants";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Find project based on slug
    const project = projects.find(p => p.name.toLowerCase().replace(/\s+/g, '-') === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="h-screen bg-primary flex items-center justify-center text-white">
                Project not found
            </div>
        );
    }

    return (
        <div className="relative z-0 bg-primary min-h-screen">
            <Navbar />

            {/* Hero Section of Project */}
            <div className="w-full relative pt-28 pb-10">
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-primary z-0"></div>
                {/* Generative Gradient Background matching card style but bigger */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-primary to-primary z-[-1]"></div>

                <div className={`absolute inset-0 opacity-20 bg-gradient-to-br from-violet-500/30 to-purple-500/30 mix-blend-overlay`}></div>

                <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
                    <button
                        onClick={() => navigate(-1)}
                        className="mb-6 flex items-center gap-2 text-slate-400 hover:text-white transition-colors w-fit"
                    >
                        <FaArrowLeft /> Back
                    </button>

                    <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4 leading-tight">{project.name}</h1>

                    <div className="flex flex-wrap gap-3 mb-10">
                        {project.tags.map((tag) => (
                            <span
                                key={tag.name}
                                className={`text-[14px] px-4 py-2 rounded-full bg-white/5 border border-white/10 ${tag.color ? tag.color : 'text-slate-300'}`}
                            >
                                #{tag.name}
                            </span>
                        ))}
                    </div>

                    {/* Featured Image */}
                    {project.image && !project.image.startsWith('project') && (
                        <div className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/20 border border-white/10 mt-8 relative group">
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    )}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-12 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left Column: Details */}
                <div className="lg:col-span-2 flex flex-col gap-10">
                    <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 backdrop-blur-sm">
                        <h2 className="text-2xl font-bold text-white mb-6">Overview</h2>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            {project.description}
                        </p>

                        {/* Extended Details: Key Features */}
                        {project.key_features && project.key_features.length > 0 && (
                            <div className="mt-8 space-y-6">
                                <h3 className="text-xl font-bold text-white">Key Features</h3>
                                <ul className="list-disc list-inside text-slate-400 space-y-2">
                                    {project.key_features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {project.technical_challenges && (
                        <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 backdrop-blur-sm">
                            <h2 className="text-2xl font-bold text-white mb-6">Technical Challenges</h2>
                            <p className="text-slate-300 leading-relaxed">
                                {project.technical_challenges}
                            </p>
                        </div>
                    )}
                </div>

                {/* Right Column: Actions & Stack */}
                <div className="flex flex-col gap-6">
                    <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5 backdrop-blur-sm sticky top-24">
                        <h3 className="text-xl font-bold text-white mb-6">Project Links</h3>

                        <div className="flex flex-col gap-4">
                            <button
                                onClick={() => !project.isPrivate && window.open(project.source_code_link, "_blank")}
                                disabled={project.isPrivate}
                                className={`w-full py-4 rounded-xl flex items-center justify-center gap-3 transition-all font-semibold ${project.isPrivate
                                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                                    : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/20'
                                    }`}
                            >
                                <FaGithub className="text-xl" />
                                {project.isPrivate ? "Source Code Private" : "View Source Code"}
                            </button>

                            {/* Demo Link Placeholder */}
                            <button
                                className="w-full py-4 rounded-xl flex items-center justify-center gap-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-all border border-slate-700"
                                onClick={() => alert("Live demo not available for this project.")}
                            >
                                <FaExternalLinkAlt />
                                Live Demo
                            </button>
                        </div>

                        <div className="mt-8 border-t border-white/10 pt-6">
                            <h4 className="text-slate-400 font-medium mb-4">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag.name} className="text-sm text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded">
                                        {tag.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gallery Section */}
            {project.gallery && project.gallery.length > 0 && (
                <div className="max-w-7xl mx-auto px-6 sm:px-12 pb-20">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="h-1 w-10 bg-indigo-500 rounded-full"></div>
                        <h2 className="text-3xl font-bold text-white">Project Gallery</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {project.gallery.map((img, idx) => (
                            <div key={idx} className="group relative">
                                {/* Browser Mockup Frame */}
                                <div className="rounded-xl overflow-hidden bg-slate-900 border border-slate-700/50 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                                    {/* Browser Toolbar */}
                                    <div className="h-9 bg-slate-800/50 border-b border-slate-700/50 flex items-center px-4 gap-2 backdrop-blur-sm">
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/50"></div>
                                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/50"></div>
                                            <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]/50"></div>
                                        </div>
                                        {/* Fake URL Bar */}
                                        <div className="ml-4 flex-1 h-5 bg-slate-900/50 rounded flex items-center px-3 max-w-[200px]">
                                            <span className="text-[10px] text-slate-500 font-mono text-ellipsis overflow-hidden whitespace-nowrap">
                                                {project.source_code_link !== '#' ? new URL(project.source_code_link).hostname : 'localhost:3000'}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Image Container */}
                                    <div className="relative aspect-video bg-slate-950">
                                        <img
                                            src={img}
                                            alt={`${project.name} screenshot ${idx + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                        {/* Overlay gradient for depth */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <Footer />
        </div >
    );
};

export default ProjectDetails;
