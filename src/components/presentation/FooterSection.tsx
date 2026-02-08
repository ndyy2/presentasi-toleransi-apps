import { motion } from 'framer-motion';
import type { SlideContent } from '../../data/content';
import { GeometricPattern } from '../ui/GeometricPattern';
import { Heart } from 'lucide-react';

export const FooterSection = ({ data }: { data: SlideContent }) => {
    return (
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-emerald-950 text-white overflow-hidden px-6">

            {/* Background Texture - Deep & Consistent */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-emerald-950 to-emerald-950" />
            <GeometricPattern className="text-emerald-800" opacity={0.05} />

            {/* Content Container */}
            <div className="relative z-10 text-center max-w-4xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-8"
                >
                    <h2 className="text-6xl md:text-8xl font-serif text-white tracking-tight leading-none mb-6">
                        {data.title}
                    </h2>

                    <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto mb-8" />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-xl md:text-3xl text-emerald-100/60 font-light font-body tracking-wide max-w-2xl mx-auto leading-relaxed"
                >
                    {data.subtitle}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="mt-24 flex flex-col items-center gap-4"
                >
                    <div className="w-10 h-10 rounded-full bg-emerald-900/40 flex items-center justify-center border border-white/5">
                        <Heart className="w-4 h-4 text-emerald-500/60 fill-emerald-500/10" />
                    </div>
                    <p className="text-xs text-emerald-500/30 font-mono uppercase tracking-[0.3em]">
                        Presentasi Pendidikan Agama Islam
                    </p>
                </motion.div>

            </div>
        </div>
    );
};
