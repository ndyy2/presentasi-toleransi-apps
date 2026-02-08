import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { SlideContent } from '../../data/content';
import { GeometricPattern } from '../../components/ui/GeometricPattern';
import { BatikTujuhRupaPattern } from '../../components/ui/BatikTujuhRupaPattern';

export const TeamMembersSection = ({ data }: { data: SlideContent }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-emerald-950 text-white py-24 px-4 md:px-12">
            {/* Background: Deep Emerald with Masked Batik */}
            <div className="absolute inset-0 z-0 bg-emerald-950">
                <GeometricPattern className="text-emerald-900" opacity={0.1} />

                {/* Creative Twist: Large circular glow area revealing the Batik Pattern */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] bg-emerald-900/20 rounded-full blur-[100px]" />
                <div className="absolute inset-0 opacity-10 mix-blend-overlay">
                    <BatikTujuhRupaPattern scale={2} />
                </div>
            </div>

            <div className="container relative z-10 flex flex-col h-full max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center justify-center gap-4 mb-6"
                >
                    <div className="h-px w-16 bg-gradient-to-r from-transparent via-emerald-600/40 to-transparent" />
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-emerald-600 font-bold font-serif italic tracking-[0.2em] uppercase text-sm mb-1"
                    >
                        {data.section}
                    </motion.span>
                    <div className="h-px w-16 bg-gradient-to-r from-transparent via-emerald-600/40 to-transparent" />
                </motion.div>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-12 md:mb-16 shrink-0"
                >
                    <h2 className="text-4xl md:text-6xl font-serif font-medium tracking-tight">
                        {data.title}
                    </h2>
                </motion.div>

                {/* Creative Accordion Layout */}
                <div className="flex-1 w-full flex flex-col md:flex-row gap-2 md:gap-4 min-h-[400px] md:min-h-[500px]">
                    {data.items?.map((item, idx) => {
                        const isActive = activeIndex === idx;

                        return (
                            <motion.div
                                key={idx}
                                layout
                                transition={{ layout: { duration: 0.8, type: "spring", stiffness: 100, damping: 25 } }}
                                onClick={() => setActiveIndex(idx)}
                                onMouseEnter={() => setActiveIndex(idx)}
                                className={`relative overflow-hidden rounded-2xl cursor-pointer transition-colors duration-700
                                    ${isActive
                                        ? 'flex-[3] bg-emerald-900/40 border-emerald-500/20'
                                        : 'flex-1 bg-white/5 border-white/5 hover:bg-white/10'
                                    } border backdrop-blur-sm group
                                `}
                            >
                                {/* Active State Background Twist */}
                                <AnimatePresence>
                                    {isActive && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="absolute inset-0 z-0"
                                        >
                                            <div className="absolute bottom-0 right-0 w-full h-full opacity-10 rotate-12 scale-150 origin-bottom-right pointer-events-none">
                                                <BatikTujuhRupaPattern scale={1} />
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 to-transparent" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Content Container */}
                                <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8 z-10">
                                    <div className="flex justify-between items-start w-full">
                                        <div className="flex items-center gap-3">
                                            <span className={`text-xs font-mono font-bold tracking-widest transition-colors duration-500 delay-100 ${isActive ? 'text-emerald-400' : 'text-white/40'}`}>
                                                0{idx + 1}
                                            </span>
                                            {/* Mobile: Horizontal Nickname next to number */}
                                            {!isActive && (
                                                <motion.span
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -10 }}
                                                    className="md:hidden text-lg font-serif font-bold text-white/90 italic"
                                                >
                                                    {item.nickname || item.title}
                                                </motion.span>
                                            )}
                                        </div>

                                        {/* Desktop: Upright Vertical Text (Centered) */}
                                        <AnimatePresence mode="wait">
                                            {!isActive && (
                                                <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none">
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
                                                        transition={{ duration: 0.4, delay: 0.1 }}
                                                        className="text-emerald-100 text-xl font-serif font-bold italic tracking-[0.8em] uppercase select-none"
                                                        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                                                    >
                                                        {item.nickname || item.title}
                                                    </motion.div>
                                                </div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* Main Content Area */}
                                    <div className="relative overflow-hidden w-full">
                                        <AnimatePresence mode="popLayout">
                                            {isActive && (
                                                <motion.div
                                                    key="active-content"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -20, transition: { duration: 0.2 } }}
                                                    transition={{ duration: 0.5, delay: 0.2 }}
                                                >
                                                    <h3 className="font-serif leading-none mb-3 text-3xl md:text-5xl text-white">
                                                        {item.title}
                                                    </h3>
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        transition={{ duration: 0.5 }}
                                                    >
                                                        <div className="h-0.5 w-12 bg-emerald-500 mb-4" />
                                                        <p className="text-emerald-200/80 text-sm md:text-base font-light tracking-wide max-w-md">
                                                            {item.desc}
                                                        </p>
                                                        <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-emerald-500 font-bold">
                                                            Anggota
                                                        </p>
                                                    </motion.div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
