import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import type { SlideContent } from '../../data/content';

export const ListSection = ({ data }: { data: SlideContent }) => {
    return (
        <div className="min-h-screen w-full flex items-center bg-white relative py-20">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="mb-12">
                    <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">{data.section}</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 text-slate-900">{data.title}</h2>
                    <p className="text-slate-500 mt-2 text-lg">{data.subtitle}</p>
                </div>

                <div className="space-y-4">
                    {data.bullets?.map((item: any, idx) => {
                        const Icon = item.icon ? (LucideIcons as any)[item.icon] : LucideIcons.ArrowRight;
                        const text = typeof item === 'string' ? item : item.text;

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                className="group flex items-center gap-6 p-6 rounded-2xl border border-slate-100 bg-white hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 cursor-default"
                            >
                                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <div className="text-lg text-slate-700 font-medium group-hover:text-slate-900 leading-relaxed">
                                    {text.split('**').map((part: string, i: number) => (
                                        i % 2 === 1 ? (
                                            <span key={i} className="font-bold text-emerald-700">{part}</span>
                                        ) : (
                                            <span key={i}>{part}</span>
                                        )
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
