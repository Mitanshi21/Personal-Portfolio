import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");
            setForm({
                name: "",
                email: "",
                message: "",
            });
        }, 1000)
    };

    return (
        <div className="flex justify-center items-center">
            <motion.div
                variants={slideIn("up", "tween", 0.2, 1)}
                className='flex flex-col lg:flex-row gap-10 bg-slate-900/50 backdrop-blur-md border border-slate-800 p-8 rounded-2xl w-full max-w-5xl overflow-hidden'
            >
                {/* Contact Info Side */}
                <div className="flex-1 flex flex-col justify-center">
                    <p className={styles.sectionSubText}>Get in touch</p>
                    <h3 className={styles.sectionHeadText}>Contact.</h3>
                    <p className="text-slate-400 mt-4 max-w-md">
                        I'm currently available for freelance work or full-time roles.
                        If you have a project that needs some creative touch,
                        feel free to send me a message.
                    </p>

                    <div className="mt-8 flex flex-col gap-4">
                        <div className="flex items-center gap-4 text-slate-300">
                            <span className="bg-slate-800 p-3 rounded-full">📧</span>
                            <a href="mailto:mitanshilakdawala@gmail.com" className="hover:text-white transition-colors">mitanshilakdawala@gmail.com</a>
                        </div>
                        {/* Add more info if needed */}
                    </div>
                </div>

                {/* Form Side */}
                <div className="flex-1 bg-slate-900 p-6 rounded-xl border border-slate-800">
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className='flex flex-col gap-4'
                    >
                        <div className="flex flex-col sm:flex-row gap-4">
                            <label className='flex-1 flex flex-col'>
                                <span className='text-white text-sm font-medium mb-2'>Name</span>
                                <input
                                    type='text'
                                    name='name'
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className='bg-slate-800 py-3 px-4 text-white rounded-lg outline-none border border-slate-700 focus:border-indigo-500 text-sm'
                                />
                            </label>
                            <label className='flex-1 flex flex-col'>
                                <span className='text-white text-sm font-medium mb-2'>Email</span>
                                <input
                                    type='email'
                                    name='email'
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    className='bg-slate-800 py-3 px-4 text-white rounded-lg outline-none border border-slate-700 focus:border-indigo-500 text-sm'
                                />
                            </label>
                        </div>

                        <label className='flex flex-col'>
                            <span className='text-white text-sm font-medium mb-2'>Message</span>
                            <textarea
                                rows={4}
                                name='message'
                                value={form.message}
                                onChange={handleChange}
                                placeholder='Your Message'
                                className='bg-slate-800 py-3 px-4 text-white rounded-lg outline-none border border-slate-700 focus:border-indigo-500 text-sm resize-none'
                            />
                        </label>

                        <button
                            type='submit'
                            className='bg-accent hover:bg-indigo-600 py-3 px-8 rounded-lg outline-none w-full text-white font-bold shadow-md transition-all mt-2'
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
