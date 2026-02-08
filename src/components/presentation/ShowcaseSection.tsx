import { motion } from 'framer-motion';
import type { SlideContent } from '../../data/content';
import { GeometricPattern } from '../ui/GeometricPattern';

export const ShowcaseSection = ({ data }: { data: SlideContent }) => {
    return (
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-white text-slate-800 py-24 px-6 overflow-hidden">
            {/* Background - Very Subtle */}
            <div className="absolute inset-0 opacity-[0.3] text-emerald-900/5 pointer-events-none">
                <GeometricPattern />
            </div>

            <div className="relative z-10 container mx-auto max-w-7xl">
                {/* Header - Editorial Style */}
                <div className="mb-24 md:pl-8 border-l-2 border-emerald-900/10">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="block text-emerald-600 text-sm font-bold tracking-[0.3em] uppercase mb-4"
                    >
                        {data.section}
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-6xl md:text-7xl font-serif text-emerald-950 mb-6 tracking-tight leading-tight"
                    >
                        {data.title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-slate-500 text-xl md:text-2xl font-light max-w-2xl italic font-serif"
                    >
                        {data.subtitle}
                    </motion.p>
                </div>

                {/* List Content - Minimalist Typography */}
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                    {data.items?.map((item: any, idx) => {
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: idx * 0.1 }}
                                className="group relative flex flex-col items-start border-t border-slate-100 pt-8 hover:border-emerald-200 transition-colors duration-500"
                            >
                                {/* Large Typography Number as Anchor */}
                                <span className="absolute -top-12 right-0 text-9xl md:text-[10rem] font-serif font-black text-emerald-50 opactity-50 select-none -z-10 group-hover:text-emerald-100/50 transition-colors duration-700 leading-none">
                                    0{idx + 1}
                                </span>

                                {/* Character Illustration */}
                                {item.image && (
                                    <div className="w-full aspect-[4/3] mb-8 rounded-2xl overflow-hidden relative shadow-lg group-hover:shadow-2xl transition-all duration-500">
                                        <div className="absolute inset-0 bg-emerald-900/10 mix-blend-multiply z-10 group-hover:bg-transparent transition-colors duration-500" />
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover object-bottom transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                )}

                                <h3 className="text-3xl font-serif font-bold text-slate-800 mb-4 group-hover:text-emerald-800 transition-colors relative z-10">
                                    {item.title}
                                </h3>

                                <p className="text-slate-600 leading-relaxed text-lg mb-6 relative z-10">
                                    {item.desc}
                                </p>

                                {item.wisdom && (
                                    <div className="mt-auto relative z-10 pl-6 border-l-2 border-amber-400/50">
                                        <p className="text-emerald-900/80 font-serif italic text-lg leading-relaxed">
                                            "{item.wisdom}"
                                        </p>
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
