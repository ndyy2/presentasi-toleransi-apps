import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import type { SlideContent } from '../../data/content';

export const DiagramSection = ({ data }: { data: SlideContent }) => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-white relative overflow-hidden py-24">
            {/* Background Image if available */}
            {data.image && (
                <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
                    <div
                        className="w-full h-full opacity-30 mix-blend-multiply"
                        style={{
                            backgroundImage: `url(${data.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            WebkitMaskImage: 'radial-gradient(circle, black 30%, transparent 80%)',
                            maskImage: 'radial-gradient(circle, black 30%, transparent 80%)'
                        }}
                    />
                    <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]" />
                </div>
            )}

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-emerald-700 font-bold tracking-widest uppercase text-xs bg-emerald-100/80 px-4 py-1.5 rounded-full border border-emerald-200/50">{data.section}</span>
                    <h2 className="text-4xl md:text-6xl font-black mt-6 text-emerald-950 tracking-tight">{data.title}</h2>
                    <p className="text-emerald-900/80 mt-4 text-xl font-medium max-w-2xl mx-auto">{data.subtitle}</p>
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

                                <div className="w-24 h-24 rounded-full bg-white border-4 border-emerald-100 shadow-2xl flex items-center justify-center mb-6 relative z-10 group cursor-pointer hover:border-emerald-500 hover:shadow-emerald-500/20 transition-all duration-300">
                                    <Icon className="w-8 h-8 text-emerald-600 group-hover:scale-125 transition-transform duration-300" />

                                    {/* Floating pulse effect */}
                                    <span className="absolute inset-0 rounded-full bg-emerald-400/20 animate-ping opacity-0 group-hover:opacity-100" />
                                </div>

                                <div className="text-center max-w-[200px] relative z-20">
                                    <h3 className="font-extrabold text-emerald-950 text-xl mb-2">{item.title}</h3>
                                    <p className="text-sm text-slate-700 font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
