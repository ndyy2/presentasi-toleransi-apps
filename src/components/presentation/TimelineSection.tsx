import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import type { SlideContent } from '../../data/content';

export const TimelineSection = ({ data }: { data: SlideContent }) => {
    return (
        <div className="h-full w-full flex flex-col justify-center bg-white relative overflow-hidden py-20">
            <div className="container mx-auto px-6 h-full flex flex-col">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center justify-center gap-4 mb-6"
                    >
                        <div className="h-px w-16 bg-gradient-to-r from-transparent via-emerald-600/40 to-transparent" />
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-emerald-600 font-bold font-serif italic tracking-[0.2em] uppercase text-sm mb-1"
                        >
                            {data.section}
                        </motion.span>
                        <div className="h-px w-16 bg-gradient-to-r from-transparent via-emerald-600/40 to-transparent" />
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 text-emerald-950">{data.title}</h2>
                    <p className="text-emerald-700/60 mt-2 font-medium">{data.subtitle}</p>
                </motion.div>

                <div className="flex-1 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-px bg-emerald-200 -translate-x-1/2" />

                    <div className="space-y-12 relative">
                        {data.bullets?.map((item: any, idx) => {
                            const Icon = item.icon ? (LucideIcons as any)[item.icon] : LucideIcons.Circle;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ margin: "-100px" }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="flex flex-col md:flex-row items-center gap-8 relative"
                                >
                                    <div className="flex-1 w-full md:w-auto pl-16 md:pl-0 md:text-right">
                                        {idx % 2 === 0 && (
                                            <div className="p-6 bg-white rounded-2xl shadow-lg shadow-emerald-900/5 border border-emerald-100 relative z-10 hover:shadow-xl transition-shadow duration-300">
                                                <p className="text-slate-700 leading-relaxed font-medium">{typeof item === 'string' ? item : item.text}</p>
                                            </div>
                                        )}
                                    </div>

                                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-emerald-100 shadow-sm z-20">
                                        <Icon className="w-5 h-5 text-emerald-600" />
                                    </div>

                                    <div className="flex-1 w-full md:w-auto pl-16 md:pl-0 text-left">
                                        {idx % 2 !== 0 && (
                                            <div className="p-6 bg-white rounded-2xl shadow-lg shadow-emerald-900/5 border border-emerald-100 relative z-10 hover:shadow-xl transition-shadow duration-300">
                                                <p className="text-slate-700 leading-relaxed font-medium">{typeof item === 'string' ? item : item.text}</p>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
