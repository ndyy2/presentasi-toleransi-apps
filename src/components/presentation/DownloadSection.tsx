import { motion } from 'framer-motion';
import { Download, FileText, Share2 } from 'lucide-react';
import type { SlideContent } from '../../data/content';
import { GeometricPattern } from '../ui/GeometricPattern';

export const DownloadSection = ({ data }: { data: SlideContent }) => {
    return (
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-emerald-950 text-white overflow-hidden px-6 py-20">
            {/* Background Texture - Deep & Consistent */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-emerald-900/40 via-emerald-950 to-emerald-950" />
            <GeometricPattern className="text-emerald-800" opacity={0.1} />

            {/* Ambient Light */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 container mx-auto max-w-4xl text-center">

                {/* Header Group */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <div className="inline-flex items-center gap-3 mb-6 opacity-80">
                        <span className="h-px w-12 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
                        <span className="text-amber-400 font-mono tracking-[0.3em] uppercase text-xs font-bold">
                            RESOURCES
                        </span>
                        <span className="h-px w-12 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
                    </div>

                    <h2 className="text-5xl md:text-6xl font-serif text-white tracking-tight leading-tight mb-6">
                        {data.title}
                    </h2>

                    <p className="text-emerald-200/70 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                        {data.subtitle || "Unduh materi lengkap untuk dipelajari lebih lanjut dan disebarkan sebagai amal jariyah."}
                    </p>
                </motion.div>

                {/* Download Actions - Simple & Elegant Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto"
                >
                    {/* PPT Button */}
                    <a
                        href="/downloads/materi.pptx"
                        download
                        className="group relative bg-emerald-900/30 backdrop-blur-sm border border-emerald-800/50 p-8 rounded-2xl flex flex-col items-center gap-4 hover:bg-emerald-800/40 transition-all duration-300 hover:border-amber-500/30 hover:-translate-y-1"
                    >
                        <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                            <FileText className="w-7 h-7 text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">Presentation Slides</h3>
                            <p className="text-sm text-emerald-400/60 font-mono">Format .pptx</p>
                        </div>
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Download className="w-5 h-5 text-amber-400" />
                        </div>
                    </a>

                    {/* Doc Button */}
                    <a
                        href="/downloads/materi.docx"
                        download
                        className="group relative bg-emerald-900/30 backdrop-blur-sm border border-emerald-800/50 p-8 rounded-2xl flex flex-col items-center gap-4 hover:bg-emerald-800/40 transition-all duration-300 hover:border-blue-500/30 hover:-translate-y-1"
                    >
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                            <FileText className="w-7 h-7 text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">Full Document</h3>
                            <p className="text-sm text-emerald-400/60 font-mono">Format .docx</p>
                        </div>
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Download className="w-5 h-5 text-blue-400" />
                        </div>
                    </a>
                </motion.div>

                {/* Footer Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="mt-16 flex items-center justify-center gap-2 text-emerald-500/40 text-sm"
                >
                    <Share2 className="w-4 h-4" />
                    <span>Silakan bagikan materi ini seluas-luasnya</span>
                </motion.div>

            </div>
        </div>
    );
};
