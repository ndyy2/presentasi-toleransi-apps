import { motion } from 'framer-motion';
import type { SlideContent } from '../../data/content';
import { GeometricPattern } from '../ui/GeometricPattern';
import { Heart } from 'lucide-react';

export const FooterSection = ({ data }: { data: SlideContent }) => {
    return (
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-emerald-950 text-white overflow-hidden px-6">

            {/* Background Texture - Deep & Consistent */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-emerald-950 to-emerald-950" />
            <GeometricPattern className="text-emerald-800" opacity={0.03} />

            {/* Content Container */}
            <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center justify-center h-full">

                {/* Decorative element - Top */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-12 opacity-40 text-emerald-400"
                >
                    <p className="font-serif text-2xl tracking-widest italic">
                        والله اعلم بالصواب
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.3em] mt-2 font-light">
                        Wallahualam Bishawab
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="mb-10 relative"
                >
                    <div className="absolute -inset-10 bg-emerald-500/5 blur-3xl rounded-full opacity-50 pointer-events-none" />

                    <h2 className="text-5xl md:text-7xl font-serif text-white tracking-widest leading-none mb-6 relative z-10 font-medium">
                        {data.title}
                    </h2>

                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-200/40 to-transparent mx-auto mt-8" />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-lg md:text-xl text-emerald-100/70 font-light font-sans tracking-wide max-w-xl mx-auto leading-relaxed"
                >
                    {data.subtitle}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1.5 }}
                    className="mt-32 flex flex-col items-center gap-6 opacity-60"
                >
                    <div className="flex items-center gap-3">
                        <div className="h-px w-12 bg-emerald-500/20" />
                        <div className="w-8 h-8 rounded-full border border-emerald-500/10 flex items-center justify-center">
                            <Heart className="w-3 h-3 text-emerald-400/60 fill-emerald-400/10" />
                        </div>
                        <div className="h-px w-12 bg-emerald-500/20" />
                    </div>

                    <p className="text-[10px] text-emerald-400/50 font-mono uppercase tracking-[0.4em]">
                        Presentasi Toleransi 2024
                    </p>
                </motion.div>

            </div>
        </div>
    );
};
