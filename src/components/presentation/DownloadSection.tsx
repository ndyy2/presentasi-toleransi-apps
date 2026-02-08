import { motion } from 'framer-motion';
import { Download, FileText, Share2 } from 'lucide-react';
import type { SlideContent } from '../../data/content';
import { GeometricPattern } from '../ui/GeometricPattern';

export const DownloadSection = ({ data }: { data: SlideContent }) => {
    return (
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-emerald-950 text-white overflow-hidden px-6 py-20">
            {/* Background Texture - Deep & Consistent */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-emerald-950 to-emerald-950" />
            <GeometricPattern className="text-emerald-800" opacity={0.05} />

            <div className="relative z-10 container mx-auto max-w-4xl text-center">

                {/* Header Group */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-16 space-y-4"
                >
                    <h2 className="text-5xl md:text-6xl font-serif text-white tracking-tight leading-tight">
                        {data.title}
                    </h2>

                    <p className="text-emerald-200/60 text-lg md:text-xl font-light max-w-xl mx-auto leading-relaxed tracking-wide font-body">
                        {data.subtitle || "Unduh materi lengkap untuk dipelajari lebih lanjut dan disebarkan sebagai amal jariyah."}
                    </p>
                </motion.div>

                {/* Download Actions - Minimal & Elegant */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto"
                >
                    {/* PPT Button */}
                    <DownloadCard
                        href="/downloads/materi.pptx"
                        icon={<FileText className="w-6 h-6" />}
                        title="Presentation Slides"
                        format=".pptx"
                        delay={0}
                    />

                    {/* Doc Button */}
                    <DownloadCard
                        href="/downloads/Toleransi.docx"
                        icon={<FileText className="w-6 h-6" />}
                        title="Full Document"
                        format=".docx"
                        delay={0.1}
                    />
                </motion.div>

                {/* Footer Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="mt-20 flex items-center justify-center gap-3 text-emerald-500/40 text-sm font-light tracking-widest uppercase"
                >
                    <Share2 className="w-4 h-4" />
                    <span>Silakan bagikan seluas-luasnya</span>
                </motion.div>

            </div>
        </div>
    );
};

// Sub-component for cleaner codes
const DownloadCard = ({ href, icon, title, format }: { href: string; icon: React.ReactNode; title: string; format: string; delay: number }) => (
    <motion.a
        href={href}
        download
        whileHover={{ y: -4 }}
        className="group relative flex items-center p-6 rounded-xl bg-emerald-900/5 hover:bg-emerald-900/20 border border-white/5 hover:border-amber-500/20 transition-all duration-500 ease-out"
    >
        <div className="w-12 h-12 rounded-full bg-emerald-900/30 flex items-center justify-center text-emerald-200 group-hover:bg-amber-500/10 group-hover:text-amber-400 transition-colors duration-500">
            {icon}
        </div>

        <div className="ml-5 text-left flex-1">
            <h3 className="text-lg font-serif text-white/90 group-hover:text-white transition-colors">{title}</h3>
            <p className="text-xs text-emerald-500/60 font-mono tracking-wider uppercase">{format}</p>
        </div>

        <div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
            <Download className="w-5 h-5 text-amber-500/80" />
        </div>
    </motion.a>
);
