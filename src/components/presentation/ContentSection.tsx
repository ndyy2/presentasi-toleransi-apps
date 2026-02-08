import { motion } from 'framer-motion';
import type { SlideContent } from '../../data/content';
import { Quote } from 'lucide-react';
import { GeometricPattern } from '../ui/GeometricPattern';

export const ContentSection = ({ data }: { data: SlideContent }) => {
    return (
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-emerald-950 text-emerald-50 py-24 px-6 overflow-hidden">
            {/* Background Elements - Ethereal & Dark */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/40 via-emerald-950 to-emerald-950" />
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-500 rounded-full blur-[120px]" />
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-500 rounded-full blur-[100px]" />
            </div>

            <GeometricPattern className="text-emerald-800" opacity={0.08} />

            <div className="relative z-10 container mx-auto max-w-5xl">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center gap-4"
                    >
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

                        <h2 className="text-5xl md:text-7xl font-serif text-white mb-2 tracking-tight">
                            {data.title}
                        </h2>

                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent my-6" />

                        <p className="text-emerald-200/80 text-xl md:text-2xl font-light italic font-serif max-w-2xl">
                            {data.subtitle}
                        </p>
                    </motion.div>
                </div>

                {/* Main Content - No Card, Just Typography */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    {/* Decorative Big Quote Icon */}
                    <Quote className="absolute -top-12 -left-8 md:-left-16 w-24 h-24 text-emerald-800/20 transform -scale-x-100" />

                    {data.content && (
                        <div className="space-y-12">
                            {/* Arabic / Scripture Text */}
                            <div className="relative text-center px-4">
                                <p className="text-3xl md:text-5xl leading-[2] font-serif text-amber-100 drop-shadow-lg" dir="rtl">
                                    {data.content.split('\n\n')[0]}
                                </p>
                            </div>

                            {/* Divider with Wisdom */}
                            <div className="flex items-center gap-4 opacity-50">
                                <div className="h-px bg-emerald-800 flex-1" />
                                <span className="text-emerald-500 text-sm tracking-widest uppercase">Terjemahan</span>
                                <div className="h-px bg-emerald-800 flex-1" />
                            </div>

                            {/* Translation & Explanation */}
                            <div className="grid md:grid-cols-[1fr_auto] gap-8 md:gap-16 items-start">
                                <div className="prose prose-lg prose-invert prose-emerald">
                                    <p className="text-xl md:text-2xl leading-relaxed text-emerald-100 font-light italic border-l-4 border-amber-500/50 pl-6">
                                        "{data.content.split('\n\n')[1]?.replace(/"/g, '')}"
                                    </p>
                                    <div className="mt-8 text-slate-300 leading-loose text-lg text-justify font-light opacity-90">
                                        {data.content.split('\n\n')[2]}
                                    </div>
                                </div>

                                {/* Items / Key Points rendered as vertical list with accent */}
                                {data.items && (
                                    <div className="flex flex-col gap-6 md:w-80 mt-8 md:mt-0">
                                        {data.items.map((item, idx) => (
                                            <div key={idx} className="group relative pl-6 transition-all duration-300">
                                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-800 group-hover:bg-amber-400 transition-colors rounded-full" />
                                                <h4 className="font-bold text-white text-lg mb-1 group-hover:text-amber-300 transition-colors">
                                                    {item.title}
                                                </h4>
                                                <p className="text-sm text-emerald-300/80 leading-relaxed">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};
