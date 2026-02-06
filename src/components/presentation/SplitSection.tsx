import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import type { SlideContent } from '../../data/content';

export const SplitSection = ({ data }: { data: SlideContent }) => {
    return (
        <div className="min-h-screen w-full flex items-center bg-emerald-50 relative overflow-hidden">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-4 block bg-white/50 w-fit px-3 py-1 rounded-full">{data.section}</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-emerald-950 leading-tight">{data.title}</h2>
                    <p className="text-xl text-emerald-800/70 mb-8 max-w-lg">{data.subtitle}</p>

                    <div className="prose prose-lg prose-emerald text-slate-600 mb-8 whitespace-pre-wrap">
                        {/* Simple Markdown-like rendering for bold text */}
                        {data.content?.split('\n\n').map((paragraph, idx) => (
                            <p key={idx} className="mb-4 leading-relaxed">
                                {paragraph.split('**').map((part, i) =>
                                    i % 2 === 1 ? <strong key={i} className="text-emerald-800 font-bold bg-emerald-100/50 px-1 rounded">{part}</strong> : part
                                )}
                            </p>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid gap-6"
                >
                    {data.items?.map((item: any, idx) => {
                        const Icon = item.icon ? (LucideIcons as any)[item.icon] : LucideIcons.CheckCircle;
                        return (
                            <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg shadow-emerald-900/5 border border-emerald-100 flex items-start gap-4 hover:shadow-xl transition-all duration-300">
                                <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 shrink-0">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>

            {/* Decorative Blob */}
            <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-emerald-100/50 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
        </div>
    );
};
