import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send } from 'lucide-react';
import type { SlideContent } from '../../data/content';

export const ReflectionSection = ({ data }: { data: SlideContent }) => {
    const [reflection, setReflection] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (reflection.trim()) {
            setSubmitted(true);
            // In a real app, save this data
            console.log("Refleksi:", reflection);
        }
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-emerald-50 px-6">
            <div className="max-w-2xl w-full">
                <div className="text-center mb-12">
                    <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-2 block">{data.section}</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{data.title}</h2>
                    <p className="text-slate-500 mt-2">{data.subtitle}</p>
                </div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="bg-white p-8 rounded-3xl shadow-xl shadow-emerald-100 border border-white"
                >
                    {!submitted ? (
                        <form onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label className="block text-slate-700 font-medium mb-3">Apa makna toleransi bagi Anda dalam satu kalimat?</label>
                                <textarea
                                    className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all resize-none h-32 text-slate-700"
                                    placeholder="Tulis refleksi Anda di sini..."
                                    value={reflection}
                                    onChange={(e) => setReflection(e.target.value)}
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={!reflection.trim()}
                                className="w-full py-4 bg-emerald-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Send className="w-4 h-4" /> Kirim Refleksi
                            </button>
                        </form>
                    ) : (
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-center py-8"
                        >
                            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <MessageCircle className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Terima Kasih!</h3>
                            <p className="text-slate-500">Refleksi Anda sangat berharga untuk membangun pemahaman bersama.</p>
                            <button
                                onClick={() => { setSubmitted(false); setReflection(''); }}
                                className="mt-6 text-emerald-600 font-medium hover:underline text-sm"
                            >
                                Isi lagi
                            </button>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};
