import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import type { SlideContent } from '../../data/content';
import { cn } from '../../lib/utils';
import { GeometricPattern } from '../ui/GeometricPattern';

const LanternSVG = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 40 60" className={cn("w-12 h-20 fill-none stroke-current", className)} xmlns="http://www.w3.org/2000/svg">
        <path d="M20 5 L20 10" strokeWidth="2" />
        <path d="M10 10 L30 10 L35 20 L35 40 L30 50 L10 50 L5 40 L5 20 Z" strokeWidth="1.5" />
        <path d="M10 20 L30 20" strokeWidth="1" opacity="0.5" />
        <path d="M10 40 L30 40" strokeWidth="1" opacity="0.5" />
        <path d="M20 10 L20 50" strokeWidth="1" opacity="0.3" />
        <circle cx="20" cy="30" r="4" className="fill-current opacity-20" />
        <path d="M15 50 L15 55 M25 50 L25 55" strokeWidth="1.5" />
    </svg>
);

const MihrabArchLine = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 200" className={cn("fill-none stroke-current", className)} xmlns="http://www.w3.org/2000/svg">
        <path d="M10 200 L10 50 C10 25 30 10 50 10 C70 10 90 25 90 50 L90 200" strokeWidth="1" />
        <path d="M20 200 L20 55 C20 35 35 20 50 20 C65 20 80 35 80 55 L80 200" strokeWidth="0.5" opacity="0.5" />
    </svg>
);

export const StorySection = ({ data }: { data: SlideContent }) => {
    return (
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-emerald-950 text-white py-32 px-6">
            {/* Geometric Pattern Overlay (Same as Hero) */}
            <GeometricPattern className="text-emerald-800" opacity={0.1} />

            {/* Animated Background Elements (Same as Hero) */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                <div className="absolute top-[-10%] left-[-5%] w-[50vw] h-[50vw] rounded-full bg-emerald-600/10 blur-[100px] animate-float" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-teal-600/5 blur-[100px] animate-float opacity-50" style={{ animationDelay: '-4s' }} />
            </div>

            {/* "Little Addition": Mihrab Arch Accents */}
            <div className="absolute inset-0 opacity-10 pointer-events-none flex justify-between px-[5vw]">
                <MihrabArchLine className="h-full w-auto text-emerald-400" />
                <MihrabArchLine className="h-full w-auto text-emerald-400" />
            </div>

            {/* Lantern Ornaments */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 left-[12%] text-emerald-400/20 hidden min-[1400px]:block"
            >
                <div className="w-px h-24 bg-emerald-800/30 mx-auto" />
                <LanternSVG />
            </motion.div>

            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-10 right-[12%] text-emerald-400/20 hidden min-[1400px]:block"
            >
                <div className="w-px h-40 bg-emerald-800/30 mx-auto" />
                <LanternSVG className="w-16 h-24" />
            </motion.div>

            {/* Background Image if available */}
            {data.image && (
                <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none mix-blend-color-dodge">
                    <img src={data.image} alt="" className="w-full h-full object-cover grayscale" />
                </div>
            )}

            <div className="relative z-10 container mx-auto max-w-6xl">
                {/* Header */}
                <div className="text-center mb-24 relative">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center justify-center gap-4 mb-8"
                    >
                        <div className="h-px w-16 bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-emerald-400 font-bold font-serif italic tracking-[0.2em] uppercase text-sm mb-1"
                        >
                            {data.section}
                        </motion.span>
                        <div className="h-px w-16 bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-b from-white via-emerald-100 to-emerald-800 drop-shadow-sm"
                    >
                        {data.title}
                    </motion.h2>

                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: "80px", opacity: 0.8 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="h-1.5 bg-gradient-to-r from-emerald-500 to-yellow-500 mx-auto mt-8 rounded-full"
                    />

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-xl md:text-2xl text-emerald-100/60 font-light max-w-3xl mx-auto mt-10 leading-relaxed"
                    >
                        {data.subtitle}
                    </motion.p>
                </div>

                {/* Stories List */}
                <div className="space-y-40">
                    {data.items?.map((item: any, idx) => {
                        const Icon = item.icon ? (LucideIcons as any)[item.icon] : LucideIcons.Quote;
                        const isEven = idx % 2 === 0;

                        return (
                            <div key={idx} className={cn("flex flex-col lg:flex-row items-center gap-16 lg:gap-24", isEven ? "" : "lg:flex-row-reverse")}>
                                {/* Story Card */}
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1 }}
                                    className="flex-[1.2] w-full"
                                >
                                    <div className="bg-emerald-900/10 backdrop-blur-2xl rounded-[3rem] p-12 md:p-16 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] border border-white/5 relative group transition-all duration-700 hover:bg-emerald-900/20 hover:border-emerald-500/20 overflow-hidden">
                                        <div className="absolute top-0 right-0 p-10 opacity-[0.02] group-hover:opacity-5 transition-opacity">
                                            <Icon className="w-56 h-56" />
                                        </div>

                                        <div className="flex items-center gap-6 mb-10">
                                            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center border border-emerald-500/30">
                                                <Icon className="w-7 h-7" />
                                            </div>
                                            <h3 className="text-3xl font-black text-white tracking-tight">{item.title}</h3>
                                        </div>

                                        <div className="space-y-10">
                                            <p className="text-emerald-100/80 text-xl leading-relaxed font-serif italic border-l-4 border-emerald-500/40 pl-8">
                                                {item.desc}
                                            </p>

                                            {item.wisdom && (
                                                <div className="pt-10 border-t border-white/5">
                                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400 mb-4 block opacity-60">Hikmah & Pelajaran</span>
                                                    <p className="text-white font-bold text-xl leading-relaxed">
                                                        {item.wisdom}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Visual Side */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                    className="flex-1 flex flex-col items-center justify-center text-center py-10"
                                >
                                    <div className="relative mb-10 group">
                                        <div className="w-48 h-48 rounded-full bg-emerald-500/10 blur-[60px] absolute inset-0 group-hover:bg-emerald-500/20 transition-all duration-500" />
                                        <div className="w-24 h-24 rounded-[2rem] bg-emerald-950 border border-emerald-500/30 flex items-center justify-center relative z-10 text-emerald-300 shadow-2xl transition-transform duration-500 group-hover:rotate-12">
                                            <LucideIcons.Sparkles className="w-10 h-10" />
                                        </div>
                                    </div>
                                    <h4 className="text-emerald-400 font-black text-xl mb-4 uppercase tracking-[0.2em]">{item.metaTitle || "Context"}</h4>
                                    <p className="text-emerald-100/30 text-sm max-w-xs font-bold uppercase tracking-widest leading-loose">
                                        {item.metaDesc || "Perbedaan dalam Furu'iyah"}
                                    </p>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
