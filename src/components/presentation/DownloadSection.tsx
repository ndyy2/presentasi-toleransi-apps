import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import type { SlideContent } from '../../data/content';

export const DownloadSection = ({ data }: { data: SlideContent }) => {
    // Use data to avoid unused variable warning, maybe for analytics or conditional rendering later
    const sectionTitle = data.title || "Unduh Materi";
    console.log(sectionTitle);


    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-emerald-50">
            <div className="text-center">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-24 h-24 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl text-white"
                >
                    <Download className="w-10 h-10" />
                </motion.div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">{data.title}</h2>
                <p className="text-slate-500 mb-8 max-w-md mx-auto">
                    {data.subtitle || "Dapatkan materi lengkap presentasi ini untuk dipelajari lebih lanjut."}
                </p>

                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <a
                        href="/downloads/materi.pptx"
                        download
                        className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-950 text-white rounded-full font-bold hover:bg-emerald-900 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300"
                    >
                        <FileText className="w-5 h-5 text-yellow-400" /> Unduh PPT
                    </a>

                    <a
                        href="/downloads/materi.docx"
                        download
                        className="inline-flex items-center gap-3 px-8 py-4 bg-white text-emerald-900 border-2 border-emerald-900/10 rounded-full font-bold hover:bg-emerald-50 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300"
                    >
                        <FileText className="w-5 h-5 text-blue-500" /> Unduh Dokumen
                    </a>
                </div>
            </div>
        </div>
    );
};
