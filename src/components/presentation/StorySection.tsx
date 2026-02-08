import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import type { SlideContent } from '../../data/content';
import { cn } from '../../lib/utils';
import { GeometricPattern } from '../ui/GeometricPattern';

const LanternSVG = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 40 60" className={cn("w-12 h-20 fill-none stroke-current", className)} xmlns="http://www.w3.org/2000/svg">
        <path d="M20 0 L20 10" strokeWidth="1" className="opacity-50" />
        <path d="M10 10 L30 10 L35 20 L35 40 L30 50 L10 50 L5 40 L5 20 Z" strokeWidth="1.5" />
        {/* Inner details */}
        <path d="M10 20 L30 20" strokeWidth="0.5" opacity="0.3" />
        <path d="M7 30 L33 30" strokeWidth="0.5" opacity="0.3" />
        <path d="M10 40 L30 40" strokeWidth="0.5" opacity="0.3" />

        {/* Center decorative line */}
        <path d="M20 10 L20 50" strokeWidth="0.5" opacity="0.3" />

        {/* Light glow center - No Blur */}
        <circle cx="20" cy="30" r="2" className="fill-yellow-200/50" />

        {/* Bottom tassel */}
        <path d="M20 50 L20 60" strokeWidth="1" className="opacity-50" />
        <circle cx="20" cy="60" r="1.5" className="fill-current" />
    </svg>
);

const Divider = ({ className }: { className?: string }) => (
    <div className={cn("flex items-center justify-center gap-4 py-12 opacity-30", className)}>
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
        <div className="w-1.5 h-1.5 rotate-45 border border-emerald-400" />
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
    </div>
);

export const StorySection = ({ data }: { data: SlideContent }) => {
    return (
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-emerald-950 text-white py-24 px-6 md:py-32">

            {/* NOISE TEXTURE OVERLAY - Reduced Opacity further */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-[1]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />

            {/* Geometric Pattern Overlay - Reduced Opacity */}
            <GeometricPattern className="text-emerald-400" opacity={0.02} />

            {/* Ambient Background Glows - NO BLURS, PURE GRADIENTS */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Top Gradient */}
                <div className="absolute top-0 left-0 right-0 h-[40vh] bg-gradient-to-b from-emerald-900/40 to-transparent" />

                {/* Bottom Right Gradient */}
                <div className="absolute bottom-0 right-0 w-[60vw] h-[60vw] bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-emerald-800/20 via-emerald-900/5 to-transparent opacity-50" />

                {/* Center Left Subtle Gradient */}
                <div className="absolute top-1/2 left-0 w-[40vw] h-[40vw] -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-800/10 via-transparent to-transparent opacity-30" />
            </div>

            {/* Animated Lanterns (Top Corners) */}
            <motion.div
                animate={{ y: [0, 8, 0], rotate: [0, 1, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-[10%] text-emerald-400/20 hidden xl:block origin-top z-10"
            >
                <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-emerald-500/20 to-emerald-500/40 mx-auto" />
                <LanternSVG />
            </motion.div>

            <motion.div
                animate={{ y: [0, 12, 0], rotate: [0, -1, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-0 right-[10%] text-emerald-400/20 hidden xl:block origin-top z-10"
            >
                <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-emerald-500/20 to-emerald-500/40 mx-auto" />
                <LanternSVG />
            </motion.div>


            {/* Content Container */}
            <div className="relative z-10 container mx-auto max-w-5xl">

                {/* Header Section - Tightened margins */}
                <div className="text-center mb-20 md:mb-32 relative">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center justify-center gap-4 mb-6"
                    >
                        <span className="text-emerald-400/80 font-medium font-serif italic tracking-[0.25em] uppercase text-[10px] md:text-xs">
                            {data.section}
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-emerald-100 to-emerald-400/50 drop-shadow-sm pb-6 leading-[1.1]"
                    >
                        {data.title}
                    </motion.h2>

                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "40px" }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="h-px bg-emerald-500/50 mx-auto mt-2"
                    />

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-base md:text-xl text-emerald-100/60 font-serif italic max-w-2xl mx-auto mt-8 leading-relaxed"
                    >
                        {data.subtitle}
                    </motion.p>
                </div>

                {/* Editorial Flow Items - Tightened spacing */}
                <div className="space-y-20 md:space-y-32">
                    {data.items?.map((item: any, idx) => {
                        const Icon = item.icon ? (LucideIcons as any)[item.icon] : LucideIcons.Quote;

                        return (
                            <div key={idx} className="relative">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-8 md:gap-20 items-start"
                                >
                                    {/* Sidebar / Icon / Meta */}
                                    <div className="md:text-right flex flex-row md:flex-col items-center md:items-end gap-6 md:gap-6 pt-2 md:sticky md:top-32">
                                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-emerald-500/10 flex items-center justify-center text-emerald-300 bg-emerald-900/20">
                                            <Icon className="w-5 h-5 md:w-7 md:h-7" />
                                        </div>
                                        <div className="text-left md:text-right space-y-1">
                                            <h4 className="text-emerald-200 font-serif text-base md:text-lg tracking-wide">
                                                {item.metaTitle || "Refleksi"}
                                            </h4>
                                            <p className="text-emerald-500/50 text-[10px] uppercase tracking-[0.2em] font-bold">
                                                {item.metaDesc || "Nilai Luhur"}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Main Content */}
                                    <div className="space-y-8 relative">
                                        {/* Vertical Guide Line (Mobile Hidden) */}
                                        <div className="absolute -left-10 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 hidden md:block" />

                                        <h3 className="text-2xl md:text-4xl lg:text-5xl font-serif text-white leading-[1.2] tracking-tight text-left">
                                            {item.title}
                                        </h3>

                                        <div className="prose prose-lg prose-invert max-w-none">
                                            <p className="text-emerald-100/80 text-base md:text-xl leading-relaxed font-light font-sans tracking-wide text-left text-pretty">
                                                {item.desc}
                                            </p>
                                        </div>

                                        {item.wisdom && (
                                            <div className="pt-6">
                                                <div className="pl-6 md:pl-10 border-l-2 border-emerald-500/20 relative py-2">
                                                    <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-emerald-500/30" />
                                                    <div className="absolute -left-[5px] bottom-0 w-2 h-2 rounded-full bg-emerald-500/30" />

                                                    <div className="flex items-center gap-3 mb-4 opacity-60">
                                                        <span className="h-px w-6 bg-emerald-400" />
                                                        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-300">
                                                            Hikmah
                                                        </span>
                                                    </div>
                                                    <blockquote className="text-lg md:text-2xl font-serif italic text-white/90 leading-relaxed text-left">
                                                        "{item.wisdom}"
                                                    </blockquote>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>

                                {/* Divider (except for last item) */}
                                {idx < (data.items?.length || 0) - 1 && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                        className="mt-16 md:mt-24"
                                    >
                                        <Divider />
                                    </motion.div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
