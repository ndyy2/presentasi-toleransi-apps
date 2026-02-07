import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import type { SlideContent } from '../../data/content';
import { GeometricPattern } from '../../components/ui/GeometricPattern';

export const GridCardSection = ({ data }: { data: SlideContent }) => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-emerald-950 text-white relative overflow-hidden py-24">
            {/* Minimal Background Background */}
            <GeometricPattern className="text-emerald-900/40" opacity={0.08} />
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center justify-center gap-4 mb-6"
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
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-medium mb-6 text-white tracking-tight"
                    >
                        {data.title}
                    </motion.h2>

                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '40px' }}
                        className="h-px bg-emerald-500/40 mx-auto mb-8"
                    />

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-emerald-100/40 text-lg font-light italic"
                    >
                        {data.subtitle}
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 max-w-6xl mx-auto">
                    {data.items?.map((item: any, idx) => {
                        const Icon = item.icon ? (LucideIcons as any)[item.icon] : LucideIcons.Info;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="group relative pl-6 border-l-2 border-emerald-500/20 hover:border-emerald-400 transition-colors duration-300"
                            >
                                <div className="flex flex-col h-full">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Icon className="w-5 h-5 text-emerald-400" />
                                        {item.metaTitle && (
                                            <span className="text-xs uppercase font-bold tracking-widest text-emerald-400/80">
                                                {item.metaTitle}
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="text-2xl font-semibold text-white mb-3">
                                        {item.title}
                                    </h3>

                                    <p className="text-emerald-100/90 leading-relaxed text-base font-light">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
