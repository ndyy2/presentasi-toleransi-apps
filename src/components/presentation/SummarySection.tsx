import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import type { SlideContent } from '../../data/content';

export const SummarySection = ({ data }: { data: SlideContent }) => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50 px-6 py-20">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">{data.title}</h2>
                    <p className="text-slate-500 text-xl">{data.subtitle || 'Poin-poin Penting'}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {data.bullets?.map((item: any, idx) => {
                        const Icon = item.icon ? (LucideIcons as any)[item.icon] : LucideIcons.Check;
                        const text = typeof item === 'string' ? item : item.text;

                        // Extract bold text manually for simple highlighting
                        const parts = text.split('**');

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.2 }}
                                className="bg-white p-8 rounded-3xl shadow-xl shadow-emerald-900/5 border border-white flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-emerald-600/30">
                                    <Icon className="w-8 h-8" />
                                </div>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    {parts.map((part: string, i: number) =>
                                        i % 2 === 1 ? <span key={i} className="text-slate-900 font-bold block mb-2 text-xl">{part}</span> : part
                                    )}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
