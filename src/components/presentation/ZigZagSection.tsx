import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import type { SlideContent } from '../../data/content';
import { cn } from '../../lib/utils';

export const ZigZagSection = ({ data }: { data: SlideContent }) => {
    return (
        <div className="min-h-screen w-full flex items-center bg-slate-50 relative py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">{data.section}</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 text-slate-900">{data.title}</h2>
                    <p className="text-slate-500 mt-4 text-lg">{data.subtitle}</p>
                </div>

                <div className="space-y-24">
                    {data.bullets?.map((item: any, idx) => {
                        const Icon = item.icon ? (LucideIcons as any)[item.icon] : LucideIcons.Check;
                        const isEven = idx % 2 === 0;

                        return (
                            <div key={idx} className={cn("flex flex-col md:flex-row items-center gap-12", isEven ? "" : "md:flex-row-reverse")}>

                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="flex-1"
                                >
                                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 rounded-bl-full opacity-50 transition-transform duration-500 group-hover:scale-150" />

                                        <div className="relative z-10 flex items-start gap-6">
                                            <div className="p-4 bg-emerald-100 rounded-2xl text-emerald-700">
                                                <Icon className="w-8 h-8" />
                                            </div>
                                            <div>
                                                <p className="text-xl md:text-2xl font-medium text-slate-800 leading-normal">
                                                    {typeof item === 'string' ? item : item.text}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                <div className="flex-1 flex justify-center">
                                    {/* Placeholder for an illustrative image if we had one, otherwise a stylized graphic */}
                                    <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-full opacity-10 animate-pulse blur-3xl absolute" />
                                    <div className="relative z-10 w-full max-w-sm aspect-video bg-emerald-900/5 rounded-2xl flex items-center justify-center border-2 border-dashed border-emerald-200">
                                        <span className="text-emerald-300 font-mono text-sm">Visual Illustration</span>
                                    </div>
                                </div>

                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
