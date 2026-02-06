import { motion } from 'framer-motion';
import type { SlideContent } from '../../data/content';
import { GeometricPattern } from '../../components/ui/GeometricPattern';

export const HeroSection = ({ data }: { data: SlideContent }) => {
    return (
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-emerald-950 text-white">
            {/* Geometric Pattern Overlay */}
            <GeometricPattern className="text-emerald-800" opacity={0.1} />

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-emerald-600/10 blur-[120px] animate-float" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-teal-600/10 blur-[120px] animate-float" style={{ animationDelay: '-4s' }} />
            </div>

            <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center justify-center min-h-[80vh]">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="max-w-4xl mx-auto"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="inline-block py-2 px-6 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-sm md:text-base font-medium tracking-[0.2em] mb-8 text-emerald-300 shadow-2xl"
                    >
                        {data.section}
                    </motion.div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-b from-white via-emerald-100 to-emerald-900 drop-shadow-sm">
                        {data.title}
                    </h1>

                    <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-yellow-500 mx-auto rounded-full mb-8 opacity-80" />

                    <p className="text-xl md:text-3xl text-emerald-100/80 font-light max-w-2xl mx-auto leading-relaxed">
                        {data.subtitle}
                    </p>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            >
                <span className="text-xs md:text-sm text-emerald-500 font-medium tracking-[0.3em] uppercase">
                    {data.interactionHint || "Scroll to Begin"}
                </span>
                <div className="w-px h-12 bg-gradient-to-b from-emerald-500 to-transparent" />
            </motion.div>
        </div>
    );
};
