import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import type { SlideContent } from '../../data/content';

export const DefinitionSection = ({ data }: { data: SlideContent }) => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-white relative overflow-hidden py-20 px-6">
            {/* Soft Illustration Background */}
            {data.image && (
                <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
                    <div
                        className="w-full h-full opacity-30 mix-blend-multiply flex items-center justify-center"
                        style={{
                            backgroundImage: `url(${data.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
                            maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)'
                        }}
                    />
                    <div className="absolute inset-0 bg-white/40" />
                </div>
            )}

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-emerald-700 font-bold tracking-widest uppercase text-xs bg-emerald-100/80 px-4 py-1.5 rounded-full border border-emerald-200/50 inline-block mb-6 shadow-sm"
                    >
                        {data.section}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black text-emerald-950 tracking-tight leading-tight"
                    >
                        {data.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-emerald-900/70 mt-6 text-xl md:text-2xl font-serif italic max-w-3xl mx-auto border-l-4 border-emerald-200/50 pl-6"
                    >
                        {data.subtitle}
                    </motion.p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    {data.items?.map((item: any, idx) => {
                        const Icon = item.icon ? (LucideIcons as any)[item.icon] : LucideIcons.Check;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="group bg-white/90 md:bg-white/70 md:backdrop-blur-sm p-10 rounded-3xl border border-emerald-100 shadow-xl shadow-emerald-900/5 hover:border-emerald-300 hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-500 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                                    <Icon className="w-24 h-24" />
                                </div>

                                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                                    <Icon className="w-7 h-7" />
                                </div>

                                <h3 className="text-2xl font-bold text-emerald-950 mb-4 tracking-tight border-b-2 border-emerald-50 pb-2 group-hover:border-emerald-100 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-slate-700 leading-relaxed font-medium">
                                    {item.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom Principle Card */}
                {data.footerText && (
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-emerald-900 rounded-[2.5rem] p-10 md:p-14 text-white relative overflow-hidden shadow-2xl shadow-emerald-950/20"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-400/10 rounded-full -ml-20 -mb-20 blur-2xl" />

                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                            <div className="w-24 h-24 rounded-3xl bg-emerald-500/20 flex items-center justify-center shrink-0 border border-emerald-400/30">
                                <LucideIcons.Heart className="w-12 h-12 text-emerald-300" />
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <span className="inline-block px-3 py-1 bg-emerald-800 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-emerald-400 border border-emerald-700">PRINSIP UTAMA</span>
                                <h3 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">Al-Hanifiyyah as-Samhah</h3>
                                <div className="text-emerald-50/80 text-lg md:text-xl leading-relaxed font-serif max-w-4xl" dangerouslySetInnerHTML={{ __html: data.footerText }} />
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};
