import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import type { SlideContent } from '../../data/content';
import { cn } from '../../lib/utils';

export const StorySection = ({ data }: { data: SlideContent }) => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 relative overflow-hidden py-24 px-6">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-50 rounded-full blur-[120px] -mr-20 -mt-20 opacity-60" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-teal-50 rounded-full blur-[100px] -ml-20 -mb-20 opacity-40" />

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-emerald-700 font-bold tracking-[0.2em] uppercase text-[10px] bg-emerald-100/50 px-4 py-1.5 rounded-full border border-emerald-200/30 inline-block mb-4"
                    >
                        {data.section}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight"
                    >
                        {data.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-500 mt-4 text-xl font-medium"
                    >
                        {data.subtitle}
                    </motion.p>
                </div>

                {/* Stories List */}
                <div className="space-y-32">
                    {data.items?.map((item: any, idx) => {
                        const Icon = item.icon ? (LucideIcons as any)[item.icon] : LucideIcons.Quote;
                        const isEven = idx % 2 === 0;

                        return (
                            <div key={idx} className={cn("flex flex-col lg:flex-row items-center gap-16", isEven ? "" : "lg:flex-row-reverse")}>
                                {/* Story Card */}
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="flex-1 w-full"
                                >
                                    <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-2xl shadow-slate-200/50 border border-slate-100 relative group transition-all duration-500 hover:shadow-emerald-900/5">
                                        <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                                            <Icon className="w-40 h-40" />
                                        </div>

                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-600/20">
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <h3 className="text-2xl font-black text-slate-800 tracking-tight">{item.title}</h3>
                                        </div>

                                        <div className="space-y-6">
                                            <p className="text-slate-600 text-lg leading-relaxed font-serif italic border-l-4 border-emerald-100 pl-6">
                                                {item.desc}
                                            </p>

                                            {item.wisdom && (
                                                <div className="pt-8 border-t border-slate-50">
                                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600 mb-3 block">Hikmah & Pelajaran</span>
                                                    <p className="text-slate-800 font-bold text-lg leading-relaxed">
                                                        {item.wisdom}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Visual Side */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="flex-1 flex flex-col items-center justify-center text-center px-10"
                                >
                                    <div className="relative mb-8">
                                        <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 opacity-10 blur-3xl absolute inset-0 animate-pulse" />
                                        <div className="w-24 h-24 rounded-3xl bg-emerald-50 border border-emerald-100 flex items-center justify-center relative z-10 text-emerald-600 shadow-xl shadow-emerald-900/5">
                                            <LucideIcons.MessageCircle className="w-12 h-12" />
                                        </div>
                                    </div>
                                    <h4 className="text-emerald-900 font-bold text-lg mb-2 uppercase tracking-widest">{item.metaTitle || "Context"}</h4>
                                    <p className="text-slate-400 text-sm max-w-xs font-medium uppercase tracking-tight">
                                        {item.metaDesc || "Perbedaan dalam Furu'iyah (cabang agama)"}
                                    </p>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
