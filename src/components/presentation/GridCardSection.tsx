import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import type { SlideContent } from '../../data/content';

export const GridCardSection = ({ data }: { data: SlideContent }) => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-emerald-950 text-white relative overflow-hidden py-24">
            {/* Background Image if available */}
            {data.image && (
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute inset-0 bg-emerald-950/90 mix-blend-multiply z-10" />
                    <img src={data.image} alt="Background" className="w-full h-full object-cover grayscale" />
                </div>
            )}

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-teal-300 pb-1"
                    >
                        {data.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-emerald-100/60 text-lg"
                    >
                        {data.subtitle}
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.items?.map((item: any, idx) => {
                        const Icon = item.icon ? (LucideIcons as any)[item.icon] : LucideIcons.Info;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm"
                            >
                                <div className="mb-6 w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                                <p className="text-emerald-100/70 leading-relaxed text-sm">
                                    {item.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
