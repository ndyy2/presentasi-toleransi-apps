import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import type { SlideContent } from '../../data/content';

export const TeamMembersSection = ({ data }: { data: SlideContent }) => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-emerald-950 text-white relative overflow-hidden py-24">
            {/* Elegant Background Pattern */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            {/* Center Vignette */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-emerald-950/50 to-emerald-950 opacity-80 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-emerald-400 font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
                    >
                        {data.section}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white"
                    >
                        {data.title}
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-teal-400 mx-auto rounded-full mb-6"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-emerald-200/80 text-lg font-light"
                    >
                        {data.subtitle}
                    </motion.p>
                </div>

                <div className="flex flex-wrap justify-center gap-x-16 gap-y-12 max-w-5xl mx-auto">
                    {data.items?.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-emerald-900/40 border border-emerald-700/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-800/60 group-hover:border-emerald-500 transition-all duration-500 shadow-xl shadow-black/20">
                                <User className="w-8 h-8 md:w-10 md:h-10 text-emerald-300 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-serif font-bold text-emerald-50 mb-2 tracking-wide group-hover:text-white transition-colors {idx === 0 ? 'text-2xl' : ''}">
                                {item.title}
                            </h3>
                            <p className="text-emerald-400 text-xs md:text-sm tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
