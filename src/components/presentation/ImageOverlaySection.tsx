import { motion } from 'framer-motion';
import type { SlideContent } from '../../data/content';

export const ImageOverlaySection = ({ data }: { data: SlideContent }) => {
    return (
        <div className="relative min-h-screen w-full flex items-end justify-start overflow-hidden bg-slate-900 text-white pt-6">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                {/* Placeholder image source - can be replaced with actual asset */}
                <img
                    src="https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=2000&auto=format&fit=crop"
                    alt="Background"
                    className="w-full h-full object-cover opacity-80"
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/60 to-transparent opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/80 via-transparent to-transparent opacity-80" />
            </div>

            <div className="relative z-10 container mx-auto px-6 pb-24 md:pb-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-3xl"
                >
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center justify-start gap-4 mb-6"
                    >
                        <div className="h-px w-16 bg-gradient-to-r from-emerald-400/40 to-transparent" />
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-emerald-300 font-bold font-serif italic tracking-[0.2em] uppercase text-sm mb-1"
                        >
                            {data.section}
                        </motion.span>
                    </motion.div>

                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight text-white drop-shadow-lg">
                        {data.title}
                    </h2>

                    <div className="w-32 h-2 bg-gradient-to-r from-emerald-400 to-yellow-400 rounded-full mb-8 relative">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className="absolute inset-0 bg-white opacity-50 rounded-full"
                        />
                    </div>

                    <p className="text-xl md:text-2xl text-emerald-50 font-light leading-relaxed max-w-2xl text-shadow-sm">
                        {data.subtitle}
                    </p>

                    {/* Optional additional content if needed */}
                    {data.content && (
                        <p className="mt-8 text-lg text-white/80 max-w-2xl border-l-4 border-emerald-500 pl-6 py-2">
                            {data.content}
                        </p>
                    )}
                </motion.div>
            </div>
        </div>
    );
};
