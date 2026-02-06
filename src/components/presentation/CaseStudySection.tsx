import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Eye, ArrowRight } from 'lucide-react';
import type { SlideContent } from '../../data/content';

export const CaseStudySection = ({ data }: { data: SlideContent }) => {
    const [isRevealed, setIsRevealed] = useState(false);

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-emerald-950 text-white relative px-6">
            <div className="max-w-4xl w-full">
                <div className="text-center mb-12">
                    <span className="inline-block py-1 px-3 rounded-full bg-yellow-500/20 text-yellow-500 text-xs font-bold tracking-widest border border-yellow-500/30 mb-6">
                        {data.section}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-emerald-200 mb-6">{data.title}</h2>
                    <p className="text-xl text-emerald-100/60">{data.subtitle}</p>
                </div>

                <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-emerald-500/20 shadow-2xl overflow-hidden">
                    {/* Background Image if available */}
                    {data.image && (
                        <div className="absolute inset-0 z-0 opacity-20">
                            <img src={data.image} alt="Case Study" className="w-full h-full object-cover grayscale" />
                            <div className="absolute inset-0 bg-emerald-950/80 mix-blend-multiply" />
                        </div>
                    )}

                    <div className="relative z-10">
                        <h3 className="text-sm font-mono text-emerald-400 mb-4 uppercase tracking-wider">SITUASI</h3>
                        <p className="text-2xl md:text-3xl font-serif text-white leading-relaxed mb-12">
                            "{data.content}"
                        </p>

                        <div className="flex flex-col items-center">
                            <p className="text-yellow-400 mb-4 font-bold animate-pulse">
                                {data.interactionHint}
                            </p>

                            <button
                                onClick={() => setIsRevealed(true)}
                                className={`group relative inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 rounded-full font-bold transition-all hover:scale-105 active:scale-95 ${isRevealed ? 'opacity-50 pointer-events-none' : ''}`}
                            >
                                <span>Lihat Respon Nabi</span>
                                <Eye className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                            </button>
                        </div>
                    </div>

                    <AnimatePresence>
                        {isRevealed && (
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute inset-0 bg-emerald-900/95 backdrop-blur-md z-20 flex flex-col items-center justify-center p-8 md:p-16 text-center"
                            >
                                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/50">
                                    <Search className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                    Nabi Berdiri Menghormati
                                </h4>
                                <p className="text-xl text-emerald-100 max-w-2xl leading-relaxed">
                                    "Bukankah dia juga manusia?"
                                    <br />
                                    <span className="text-sm mt-4 block text-emerald-300 opacity-75">
                                        (Hadis Riwayat Bukhari)
                                    </span>
                                </p>

                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIsRevealed(false);
                                    }}
                                    className="mt-12 text-sm text-emerald-300 hover:text-white flex items-center gap-2"
                                >
                                    Tutup Kembali <ArrowRight className="w-4 h-4" />
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            </div>
        </div>
    );
};
