import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import type { SlideContent } from '../../data/content';
import { GeometricPattern } from '../../components/ui/GeometricPattern';

export const QuoteSection = ({ data }: { data: SlideContent }) => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-emerald-950 text-white relative overflow-hidden px-6">
            {/* Background Texture */}
            <GeometricPattern className="text-emerald-800" opacity={0.15} />

            <div className="max-w-5xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <Quote className="w-16 h-16 text-emerald-500 mx-auto mb-8 opacity-50" />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight mb-12 text-emerald-50"
                >
                    "{data.verse?.text || data.content}"
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="space-y-4"
                >
                    <p className="text-xl md:text-2xl text-emerald-200 font-light max-w-3xl mx-auto italic">
                        {data.verse?.translation}
                    </p>
                    <div className="w-24 h-1 bg-emerald-500 mx-auto my-8 rounded-full" />
                    <p className="text-sm font-bold tracking-widest uppercase text-emerald-400">
                        {data.verse?.source || data.subtitle}
                    </p>
                </motion.div>
            </div>
        </div>
    );
};
