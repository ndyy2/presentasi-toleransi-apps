import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import type { SlideContent } from '../../data/content';
import { GeometricPattern } from '../ui/GeometricPattern';

export const SummarySection = ({ data }: { data: SlideContent }) => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-[#FDFBF7] text-stone-800 relative overflow-hidden py-24">
            {/* Background Texture - Manuscript Paper Feel */}
            <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cream-paper.png")' }}></div>

            {/* Decorative Frame */}
            <div className="absolute inset-8 border border-emerald-900/10 pointer-events-none">
                <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-emerald-800/20 rounded-tl-3xl" />
                <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-emerald-800/20 rounded-tr-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-emerald-800/20 rounded-bl-3xl" />
                <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-emerald-800/20 rounded-br-3xl" />
            </div>

            {/* Central Geometric Decoration */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                <GeometricPattern className="text-emerald-900 w-full h-full" opacity={1} />
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-6xl">
                {/* Header with Calligraphy Feel */}
                <div className="text-center mb-24 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "circOut" }}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-100/30 rounded-full blur-3xl -z-10"
                    />

                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center justify-center gap-4 mb-6"
                    >
                        <div className="h-px w-16 bg-gradient-to-r from-transparent via-emerald-600/40 to-transparent" />
                        <span className="text-emerald-700 text-xs font-serif italic tracking-[0.2em] uppercase">
                            {data.section || 'Kesimpulan'}
                        </span>
                        <div className="h-px w-16 bg-gradient-to-r from-transparent via-emerald-600/40 to-transparent" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                        className="text-6xl md:text-7xl font-serif font-medium text-emerald-950 mb-6 tracking-tight"
                    >
                        {data.title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl md:text-2xl text-stone-500 font-light font-serif italic"
                    >
                        {data.subtitle}
                    </motion.p>
                </div>

                {/* Editorial Layout - 2 Columns */}
                <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
                    {data.bullets?.map((item: any, idx) => {
                        const Icon = item.icon ? (LucideIcons as any)[item.icon] : LucideIcons.Check;
                        const text = typeof item === 'string' ? item : item.text;
                        const metaTitle = typeof item === 'object' ? item.metaTitle : '';
                        const parts = text.split('**');

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: idx * 0.15 }}
                                className="group relative"
                            >
                                {/* Decorative Number/Marker */}
                                <div className="absolute -left-12 top-0 text-6xl font-serif text-emerald-900/5 font-bold select-none group-hover:text-emerald-900/10 transition-colors duration-500">
                                    0{idx + 1}
                                </div>

                                <div className="flex gap-6">
                                    <div className="shrink-0 mt-1">
                                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-50 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-emerald-50 transition-all duration-300 shadow-sm border border-emerald-100">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                    </div>

                                    <div>
                                        {metaTitle && (
                                            <h3 className="text-xl font-serif font-bold text-emerald-900 mb-2 tracking-wide border-b border-emerald-900/10 pb-2 inline-block">
                                                {metaTitle}
                                            </h3>
                                        )}
                                        <div className="text-stone-600 leading-loose text-lg font-light">
                                            {parts.map((part: string, i: number) =>
                                                i % 2 === 1 ? (
                                                    <span key={i} className="font-medium text-emerald-800">
                                                        {part}
                                                    </span>
                                                ) : (
                                                    <span key={i}>{part}</span>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {data.footerText && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="mt-24 text-center"
                    >
                        <div className="inline-block relative px-12 py-6">
                            {/* Decorative Brackets */}
                            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-emerald-400/40" />
                            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-emerald-400/40" />
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-emerald-400/40" />
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-emerald-400/40" />

                            <div
                                className="text-stone-500 text-sm font-light italic font-serif"
                                dangerouslySetInnerHTML={{ __html: data.footerText }}
                            />
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};
