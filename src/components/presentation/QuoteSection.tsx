import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import type { SlideContent } from '../../data/content';
import { GeometricPattern } from '../../components/ui/GeometricPattern';

export const QuoteSection = ({ data }: { data: SlideContent }) => {
    return (
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-emerald-950 text-white overflow-hidden px-6 py-20">
            {/* Background Texture - Deep & Spiritual */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/40 via-emerald-950 to-emerald-950" />
            <GeometricPattern className="text-emerald-800" opacity={0.15} />

            {/* Glowing Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-6xl w-full mx-auto flex flex-col items-center">

                {/* Section Indicator */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center justify-center gap-4 mb-8"
                >
                    <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-amber-400 font-bold font-serif italic tracking-[0.2em] uppercase text-sm mb-1"
                    >
                        {data.section}
                    </motion.span>
                    <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
                </motion.div>

                {/* Main Content */}
                <div className="relative text-center max-w-5xl mx-auto">
                    {/* Big Quote Icon */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8"
                    >
                        <Quote className="w-12 h-12 md:w-16 md:h-16 text-emerald-500 mx-auto opacity-80" />
                    </motion.div>

                    {/* Arabic Verse if available */}
                    {data.verse && (
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-3xl md:text-5xl font-serif text-amber-50 leading-[2] md:leading-[1.8] mb-8 drop-shadow-2xl"
                            dir="rtl"
                        >
                            {data.verse.text}
                        </motion.h2>
                    )}

                    {/* Translation / Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <p className="text-xl md:text-2xl font-serif text-emerald-100/90 leading-relaxed italic md:px-12 border-l-4 border-amber-500/30 pl-6 md:pl-10 text-left md:text-center">
                            "{data.verse?.translation || data.content}"
                        </p>
                    </motion.div>

                    {/* Footer / Source */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="mt-16 pt-8 border-t border-emerald-500/20 inline-block px-12"
                    >
                        <p className="text-sm md:text-base font-bold tracking-widest uppercase text-emerald-400 font-mono">
                            {data.verse?.source || data.subtitle}
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
