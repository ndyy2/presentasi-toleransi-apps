import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import type { SlideContent } from '../../data/content';

export const DiagramSection = ({ data }: { data: SlideContent }) => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-white relative overflow-hidden py-24">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm bg-emerald-50 px-3 py-1 rounded-full">{data.section}</span>
                    <h2 className="text-4xl md:text-6xl font-black mt-4 text-emerald-950">{data.title}</h2>
                    <p className="text-emerald-800/60 mt-4 text-xl">{data.subtitle}</p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
                    {data.items?.map((item: any, idx) => {
                        const Icon = item.icon ? (LucideIcons as any)[item.icon] : LucideIcons.CircleDot;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ type: "spring", stiffness: 100, delay: idx * 0.15 }}
                                className="relative flex flex-col items-center"
                            >
                                {/* Connector Line (except for last item) */}
                                {idx < (data.items?.length || 0) - 1 && (
                                    <div className="hidden md:block absolute top-12 left-1/2 w-[calc(100%+4rem)] h-1 bg-gradient-to-r from-emerald-200 to-transparent -z-10" />
                                )}

                                <div className="w-24 h-24 rounded-full bg-white border-4 border-emerald-100 shadow-xl flex items-center justify-center mb-6 relative z-10 group cursor-pointer hover:border-emerald-500 transition-colors duration-300">
                                    <Icon className="w-8 h-8 text-emerald-600 group-hover:scale-125 transition-transform duration-300" />

                                    {/* Floating pulse effect */}
                                    <span className="absolute inset-0 rounded-full bg-emerald-400/20 animate-ping opacity-0 group-hover:opacity-100" />
                                </div>

                                <div className="text-center max-w-[200px]">
                                    <h3 className="font-bold text-emerald-900 mb-2">{item.title}</h3>
                                    <p className="text-sm text-slate-500">{item.desc}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
